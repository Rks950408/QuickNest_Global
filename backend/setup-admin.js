const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const setupAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quicknest_global', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@quicknestglobal.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      console.log('Email: admin@quicknestglobal.com');
      console.log('Password: admin123');
    } else {
      // Create default admin user
      const admin = new Admin({
        name: 'Super Admin',
        email: 'admin@quicknestglobal.com',
        password: 'admin123',
        role: 'super_admin',
        permissions: ['read_contacts', 'write_contacts', 'delete_contacts', 'manage_users', 'view_analytics'],
        isActive: true
      });

      await admin.save();
      console.log('✅ Default admin user created successfully!');
      console.log('Email: admin@quicknestglobal.com');
      console.log('Password: admin123');
      console.log('');
      console.log('⚠️  Please change the password after first login for security.');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
};

setupAdmin();
