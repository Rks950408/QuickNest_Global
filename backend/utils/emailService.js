const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email templates
const emailTemplates = {
  'contact-notification': (data) => ({
    subject: 'New Contact Inquiry - QuickNest Global',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Inquiry</h1>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <h2 style="color: #333;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;"><strong>Name:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;"><strong>Email:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;"><strong>Company:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;">${data.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;"><strong>Service:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;">${data.service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;"><strong>Inquiry ID:</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; background: #fff;">${data.inquiryId}</td>
            </tr>
          </table>
          
          <h3 style="color: #333; margin-top: 20px;">Message</h3>
          <div style="background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            <p style="margin: 0; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <a href="${process.env.FRONTEND_URL}/admin" 
               style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              View in Admin Panel
            </a>
          </div>
        </div>
        
        <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">QuickNest Global - End-to-End Business Solutions</p>
        </div>
      </div>
    `
  }),

  'contact-confirmation': (data) => ({
    subject: 'Thank you for contacting QuickNest Global',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You!</h1>
        </div>
        
        <div style="padding: 20px;">
          <h2 style="color: #333;">Dear ${data.name},</h2>
          
          <p>Thank you for reaching out to QuickNest Global. We have received your inquiry and our team will review it shortly.</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Inquiry Details:</h3>
            <p><strong>Service:</strong> ${data.service || 'General Inquiry'}</p>
            <p><strong>Inquiry ID:</strong> ${data.inquiryId}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>We typically respond within 24 hours during business days. If you have any urgent questions, please don't hesitate to call us at <strong>+1 (555) 123-4567</strong>.</p>
          
          <h3 style="color: #333;">What happens next?</h3>
          <ul>
            <li>Our team will review your requirements</li>
            <li>We'll prepare a customized solution proposal</li>
            <li>We'll schedule a consultation call if needed</li>
            <li>You'll receive our response via email</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL}" 
               style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
        </div>
        
        <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">QuickNest Global - Your trusted partner for end-to-end business solutions</p>
          <p style="margin: 5px 0 0 0;">📧 info@quicknestglobal.com | 📞 +1 (555) 123-4567</p>
        </div>
      </div>
    `
  })
};

// Send email notification
const sendEmailNotification = async ({ to, subject, template, data }) => {
  try {
    const transporter = createTransporter();
    
    let emailContent;
    if (template && emailTemplates[template]) {
      emailContent = emailTemplates[template](data);
    } else {
      emailContent = { subject, html: data.message || data };
    }

    const mailOptions = {
      from: `"QuickNest Global" <${process.env.EMAIL_USER}>`,
      to,
      subject: emailContent.subject,
      html: emailContent.html
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;

  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Send contact confirmation email
const sendContactConfirmation = async (contactData) => {
  try {
    await sendEmailNotification({
      to: contactData.email,
      subject: 'Thank you for contacting QuickNest Global',
      template: 'contact-confirmation',
      data: contactData
    });
  } catch (error) {
    console.error('Contact confirmation email failed:', error);
    // Don't throw error to avoid breaking the main flow
  }
};

module.exports = {
  sendEmailNotification,
  sendContactConfirmation,
  createTransporter
};
