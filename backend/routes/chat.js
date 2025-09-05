const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');
const { authenticateAdmin } = require('../middleware/auth');

// Get chat messages for a session
router.get('/messages/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { page = 1, limit = 50 } = req.query;

    const messages = await ChatMessage.find({ sessionId })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('adminId', 'name email');

    res.json({
      success: true,
      data: messages.reverse() // Return in chronological order
    });

  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
});

// Get all chat sessions (Admin only)
router.get('/sessions', authenticateAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 20, status = 'active' } = req.query;

    // Get unique session IDs with latest message
    const sessions = await ChatMessage.aggregate([
      {
        $sort: { createdAt: -1 }
      },
      {
        $group: {
          _id: '$sessionId',
          lastMessage: { $first: '$$ROOT' },
          messageCount: { $sum: 1 },
          unreadCount: {
            $sum: {
              $cond: [
                { $and: [{ $eq: ['$sender', 'user'] }, { $eq: ['$isRead', false] }] },
                1,
                0
              ]
            }
          }
        }
      },
      {
        $lookup: {
          from: 'admins',
          localField: 'lastMessage.adminId',
          foreignField: '_id',
          as: 'admin'
        }
      },
      {
        $addFields: {
          admin: { $arrayElemAt: ['$admin', 0] }
        }
      },
      {
        $sort: { 'lastMessage.createdAt': -1 }
      },
      {
        $skip: (page - 1) * limit
      },
      {
        $limit: parseInt(limit)
      }
    ]);

    const total = await ChatMessage.distinct('sessionId').length;

    res.json({
      success: true,
      data: {
        sessions,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total
        }
      }
    });

  } catch (error) {
    console.error('Get sessions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch chat sessions'
    });
  }
});

// Mark messages as read (Admin only)
router.put('/messages/:sessionId/read', authenticateAdmin, async (req, res) => {
  try {
    const { sessionId } = req.params;

    await ChatMessage.updateMany(
      { 
        sessionId, 
        sender: 'user',
        isRead: false 
      },
      { 
        isRead: true 
      }
    );

    res.json({
      success: true,
      message: 'Messages marked as read'
    });

  } catch (error) {
    console.error('Mark messages read error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to mark messages as read'
    });
  }
});

// Get unread message count (Admin only)
router.get('/unread-count', authenticateAdmin, async (req, res) => {
  try {
    const unreadCount = await ChatMessage.countDocuments({
      sender: 'user',
      isRead: false
    });

    res.json({
      success: true,
      data: { unreadCount }
    });

  } catch (error) {
    console.error('Get unread count error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get unread count'
    });
  }
});

// Send admin message (Admin only)
router.post('/send-admin-message', authenticateAdmin, async (req, res) => {
  try {
    const { sessionId, message } = req.body;

    if (!sessionId || !message) {
      return res.status(400).json({
        success: false,
        message: 'Session ID and message are required'
      });
    }

    const chatMessage = new ChatMessage({
      sender: 'admin',
      message,
      sessionId,
      adminId: req.admin.id,
      isRead: true
    });

    await chatMessage.save();

    // Emit to socket.io for real-time delivery
    const io = req.app.get('io');
    if (io) {
      io.emit('admin-message', {
        sessionId,
        message: chatMessage,
        admin: {
          id: req.admin.id,
          name: req.admin.name
        }
      });
    }

    res.json({
      success: true,
      message: 'Message sent successfully',
      data: chatMessage
    });

  } catch (error) {
    console.error('Send admin message error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
});

module.exports = router;
