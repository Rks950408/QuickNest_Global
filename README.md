# QuickNest Global - Company Portfolio Website

A comprehensive company portfolio website built with React and Node.js, featuring end-to-end business solutions showcase, contact management, and real-time chat support.

## 🚀 Features

### Frontend (React + Tailwind CSS)
- **Modern UI/UX**: Beautiful, responsive design with Framer Motion animations
- **Company Introduction**: Vision, mission, values, and commitment
- **Services Showcase**: 9 comprehensive service categories
- **Industries Served**: 8+ industry verticals with success stories
- **Team & Expertise**: Professional team showcase with certifications
- **Case Studies**: Real client success stories and results
- **Contact System**: Multi-channel contact with WhatsApp integration
- **Real-time Chat**: Interactive chatbot with admin support
- **Process Overview**: 6-step client-centric approach

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete backend infrastructure
- **Contact Management**: Lead capture and admin dashboard
- **Real-time Chat**: Socket.io powered chat system
- **Email Notifications**: Automated email responses
- **Admin Panel**: Complete admin management system
- **Authentication**: JWT-based admin authentication
- **Analytics**: Dashboard with insights and statistics

## 🛠️ Tech Stack

### Frontend
- React 19.1.1
- Tailwind CSS 3.4.0
- Framer Motion 12.23.12
- React Router DOM 7.8.2
- Axios 1.11.0
- Socket.io Client 4.8.1

### Backend
- Node.js 14.21.3
- Express.js 4.18.2
- MongoDB 6.12.0
- Socket.io 4.7.4
- JWT Authentication
- Nodemailer 6.9.7
- Bcryptjs 2.4.3

## 📁 Project Structure

```
quicknest_global/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images, icons, etc.
│   │   ├── utils/          # Utility functions
│   │   └── services/       # API services
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── controllers/        # Business logic
│   ├── utils/              # Utility functions
│   └── server.js           # Main server file
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ 
- MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quicknest_global
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Backend environment variables
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

5. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on your system
   mongod
   ```

6. **Start the Application**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm start
   ```

7. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Panel: http://localhost:3000/admin

## 🔧 Configuration

### Backend Environment Variables
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/quicknest_global
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@quicknestglobal.com
ADMIN_PASSWORD=admin123
WHATSAPP_API_URL=https://api.whatsapp.com/send
WHATSAPP_PHONE=+15551234567
```

## 📱 Services Covered

1. **Digital Marketing** - SEO, SEM, Social Media, Content Marketing
2. **Calling & Chat Process** - Customer Support, BPO, Lead Generation
3. **Human Resources Solutions** - Recruitment, Payroll, Training
4. **Hardware Services** - IT Infrastructure, Networking, Maintenance
5. **Software Services** - Custom Development, ERP, CRM, Automation
6. **Web Development & Design** - Websites, E-commerce, Web Apps
7. **Cloud Solutions** - Migration, Security, Management, SaaS
8. **IoT Services** - Smart Devices, Integration, Analytics
9. **Payment Integration** - Secure Gateways, UPI, International Payments

## 🏢 Industries Served

- Information Technology
- Healthcare
- Finance & Banking
- E-commerce & Retail
- Education
- Manufacturing
- Real Estate
- Logistics & Transportation

## 👥 Admin Features

- **Dashboard**: Overview of contacts, messages, and analytics
- **Contact Management**: View, update, and manage inquiries
- **Chat Support**: Real-time chat with website visitors
- **User Management**: Admin user management (Super Admin)
- **Analytics**: Detailed insights and reporting
- **Email Notifications**: Automated email responses

## 🔐 Authentication

- JWT-based authentication for admin users
- Role-based access control (Super Admin, Admin, Moderator)
- Permission-based feature access
- Secure password hashing with bcrypt

## 📊 API Endpoints

### Contact Management
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact` - Get all contacts (Admin)
- `GET /api/contact/:id` - Get single contact (Admin)
- `PATCH /api/contact/:id/status` - Update contact status (Admin)

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get admin profile
- `PUT /api/auth/profile` - Update admin profile
- `PUT /api/auth/change-password` - Change password

### Chat System
- `GET /api/chat/messages/:sessionId` - Get chat messages
- `GET /api/chat/sessions` - Get all chat sessions (Admin)
- `POST /api/chat/send-admin-message` - Send admin message

### Admin Panel
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/analytics` - Analytics data
- `GET /api/admin/admins` - Get all admins (Super Admin)

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional interface
- **Animations**: Smooth Framer Motion animations
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized for speed and SEO

## 📈 Performance

- **Frontend**: Optimized React build with code splitting
- **Backend**: Efficient API design with proper error handling
- **Database**: Indexed MongoDB collections for fast queries
- **Real-time**: Socket.io for instant communication

## 🔒 Security

- **Input Validation**: Comprehensive data validation
- **Authentication**: Secure JWT token system
- **CORS**: Proper cross-origin resource sharing
- **Rate Limiting**: API rate limiting (can be added)
- **Data Sanitization**: XSS and injection protection

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Configure environment variables

### Backend (Heroku/DigitalOcean)
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to your hosting service
4. Set up domain and SSL

## 📞 Support

For technical support or questions:
- Email: info@quicknestglobal.com
- Phone: +1 (555) 123-4567
- WhatsApp: Available 24/7

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**QuickNest Global** - Your trusted partner for end-to-end business solutions.

## 🚀 GitHub Pages Deployment

The frontend is automatically deployed to GitHub Pages using GitHub Actions.

### 🌐 Live Website
- **URL:** https://rks950408.github.io/QuickNest_Global
- **Auto-deployment:** Triggered on every push to main branch
- **Build status:** Check the Actions tab in your repository

### 📋 Deployment Setup

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Automatic Deployment:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab for deployment status

3. **Manual Deployment:**
   ```bash
   # Run the deployment script
   ./deploy-frontend.sh
   ```

### 🔧 GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy-frontend.yml`:

- **Triggers:** Push to main branch, PR to main, or manual dispatch
- **Build:** Installs dependencies and builds React app
- **Deploy:** Uploads build artifacts to GitHub Pages
- **Environment:** Uses GitHub Pages environment

### 📁 Frontend Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   └── index.css       # Tailwind CSS
├── package.json        # Dependencies and scripts
└── tailwind.config.js  # Tailwind configuration
```

### 🛠️ Local Development

```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm start

# Build for production
npm run build
```

### 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `frontend/public/` with your domain
2. Configure DNS settings to point to GitHub Pages
3. Enable custom domain in repository settings

