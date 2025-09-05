const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Contact = require('../models/Contact');
const ChatMessage = require('../models/ChatMessage');
const { authenticateAdmin, requireRole } = require('../middleware/auth');

// Get dashboard statistics
router.get('/dashboard', authenticateAdmin, async (req, res) => {
  try {
    const [
      totalContacts,
      newContacts,
      totalMessages,
      unreadMessages,
      contactsByStatus,
      contactsBySource,
      recentContacts,
      recentMessages
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ 
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } 
      }),
      ChatMessage.countDocuments(),
      ChatMessage.countDocuments({ sender: 'user', isRead: false }),
      Contact.aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } }
      ]),
      Contact.aggregate([
        { $group: { _id: '$source', count: { $sum: 1 } } }
      ]),
      Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name email company service status createdAt'),
      ChatMessage.find()
        .sort({ createdAt: -1 })
        .limit(10)
        .populate('adminId', 'name')
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalContacts,
          newContacts,
          totalMessages,
          unreadMessages
        },
        contactsByStatus,
        contactsBySource,
        recentContacts,
        recentMessages
      }
    });

  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data'
    });
  }
});

// Get all admins (Super Admin only)
router.get('/admins', authenticateAdmin, requireRole('super_admin'), async (req, res) => {
  try {
    const admins = await Admin.find()
      .select('-password')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: admins
    });

  } catch (error) {
    console.error('Get admins error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch admins'
    });
  }
});

// Create new admin (Super Admin only)
router.post('/admins', authenticateAdmin, requireRole('super_admin'), async (req, res) => {
  try {
    const { name, email, password, role, permissions } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required'
      });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Admin with this email already exists'
      });
    }

    const admin = new Admin({
      name,
      email: email.toLowerCase(),
      password,
      role: role || 'admin',
      permissions: permissions || ['read_contacts', 'write_contacts']
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        permissions: admin.permissions
      }
    });

  } catch (error) {
    console.error('Create admin error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create admin'
    });
  }
});

// Update admin (Super Admin only)
router.put('/admins/:id', authenticateAdmin, requireRole('super_admin'), async (req, res) => {
  try {
    const { name, email, role, permissions, isActive } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email.toLowerCase();
    if (role) updateData.role = role;
    if (permissions) updateData.permissions = permissions;
    if (typeof isActive === 'boolean') updateData.isActive = isActive;

    const admin = await Admin.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).select('-password');

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'Admin not found'
      });
    }

    res.json({
      success: true,
      message: 'Admin updated successfully',
      data: admin
    });

  } catch (error) {
    console.error('Update admin error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update admin'
    });
  }
});

// Delete admin (Super Admin only)
router.delete('/admins/:id', authenticateAdmin, requireRole('super_admin'), async (req, res) => {
  try {
    // Prevent deleting self
    if (req.params.id === req.admin.id) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete your own account'
      });
    }

    const admin = await Admin.findByIdAndDelete(req.params.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'Admin not found'
      });
    }

    res.json({
      success: true,
      message: 'Admin deleted successfully'
    });

  } catch (error) {
    console.error('Delete admin error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete admin'
    });
  }
});

// Get analytics data
router.get('/analytics', authenticateAdmin, async (req, res) => {
  try {
    const { period = '30d' } = req.query;
    
    let dateFilter = {};
    switch (period) {
      case '7d':
        dateFilter = { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) };
        break;
      case '30d':
        dateFilter = { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) };
        break;
      case '90d':
        dateFilter = { $gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) };
        break;
    }

    const [
      contactsOverTime,
      messagesOverTime,
      topServices,
      topSources
    ] = await Promise.all([
      Contact.aggregate([
        { $match: { createdAt: dateFilter } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' },
              day: { $dayOfMonth: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
      ]),
      ChatMessage.aggregate([
        { $match: { createdAt: dateFilter } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' },
              day: { $dayOfMonth: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
      ]),
      Contact.aggregate([
        { $match: { service: { $exists: true, $ne: '' } } },
        { $group: { _id: '$service', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]),
      Contact.aggregate([
        { $group: { _id: '$source', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ])
    ]);

    res.json({
      success: true,
      data: {
        contactsOverTime,
        messagesOverTime,
        topServices,
        topSources
      }
    });

  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics data'
    });
  }
});

module.exports = router;
