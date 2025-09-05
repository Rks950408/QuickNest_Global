const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendEmailNotification } = require('../utils/emailService');
const { authenticateAdmin } = require('../middleware/auth');

// Create new contact inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, company, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Create contact inquiry
    const contact = new Contact({
      name,
      email,
      company,
      phone,
      service,
      message,
      source: 'website'
    });

    await contact.save();

    // Send email notification to admin
    try {
      await sendEmailNotification({
        to: process.env.ADMIN_EMAIL,
        subject: 'New Contact Inquiry - QuickNest Global',
        template: 'contact-notification',
        data: {
          name,
          email,
          company,
          phone,
          service,
          message,
          inquiryId: contact._id
        }
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you soon.',
      data: {
        id: contact._id,
        status: contact.status
      }
    });

  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again.'
    });
  }
});

// Get all contacts (Admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 10, status, priority, search } = req.query;
    
    const query = {};
    
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('assignedTo', 'name email')
      .populate('notes.addedBy', 'name');

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total
        }
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// Get single contact (Admin only)
router.get('/:id', authenticateAdmin, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('notes.addedBy', 'name');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });

  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact'
    });
  }
});

// Update contact status (Admin only)
router.patch('/:id/status', authenticateAdmin, async (req, res) => {
  try {
    const { status, priority, assignedTo } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (assignedTo) updateData.assignedTo = assignedTo;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).populate('assignedTo', 'name email');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    });
  }
});

// Add note to contact (Admin only)
router.post('/:id/notes', authenticateAdmin, async (req, res) => {
  try {
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({
        success: false,
        message: 'Note is required'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          notes: {
            note,
            addedBy: req.admin.id
          }
        }
      },
      { new: true }
    ).populate('notes.addedBy', 'name');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Note added successfully',
      data: contact
    });

  } catch (error) {
    console.error('Add note error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add note'
    });
  }
});

// Delete contact (Admin only)
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    });
  }
});

module.exports = router;
