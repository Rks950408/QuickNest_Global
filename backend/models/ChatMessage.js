const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ['user', 'bot', 'admin'],
    required: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  userId: {
    type: String,
    required: function() {
      return this.sender === 'user';
    }
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: function() {
      return this.sender === 'admin';
    }
  },
  sessionId: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  metadata: {
    ipAddress: String,
    userAgent: String,
    source: {
      type: String,
      enum: ['website', 'whatsapp', 'email'],
      default: 'website'
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
chatMessageSchema.index({ sessionId: 1, createdAt: -1 });
chatMessageSchema.index({ sender: 1, isRead: 1 });

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
