import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Digital Marketing",
      icon: "📱",
      description: "Comprehensive digital marketing solutions to boost your online presence",
      features: [
        "SEO & SEM Optimization",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Brand Development",
        "PPC Campaign Management",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Calling & Chat Process",
      icon: "📞",
      description: "Professional customer support and communication services",
      features: [
        "24/7 Customer Support",
        "BPO Services",
        "Lead Generation",
        "Technical Support",
        "Multi-language Support",
        "Quality Assurance"
      ]
    },
    {
      title: "Human Resources Solutions",
      icon: "👥",
      description: "Complete HR services to manage your workforce effectively",
      features: [
        "Recruitment & Staffing",
        "Payroll Management",
        "Training & Development",
        "Performance Management",
        "HR Consulting",
        "Employee Benefits"
      ]
    },
    {
      title: "Hardware Services",
      icon: "💻",
      description: "IT infrastructure and hardware solutions for your business",
      features: [
        "IT Infrastructure Setup",
        "Network Configuration",
        "Hardware Maintenance",
        "Technical Support",
        "System Integration",
        "Disaster Recovery"
      ]
    },
    {
      title: "Software Services",
      icon: "⚙️",
      description: "Custom software development and automation solutions",
      features: [
        "Custom Software Development",
        "ERP Implementation",
        "CRM Solutions",
        "Automation Tools",
        "API Development",
        "System Integration"
      ]
    },
    {
      title: "Web Development & Design",
      icon: "🌐",
      description: "Modern web solutions and user experience design",
      features: [
        "Website Development",
        "E-commerce Solutions",
        "Web Applications",
        "UI/UX Design",
        "Mobile Responsive Design",
        "Performance Optimization"
      ]
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable cloud infrastructure and management services",
      features: [
        "Cloud Migration",
        "Cloud Security",
        "Cloud Management",
        "SaaS Solutions",
        "Backup & Recovery",
        "Cost Optimization"
      ]
    },
    {
      title: "IoT Services",
      icon: "🔗",
      description: "Internet of Things solutions for smart business operations",
      features: [
        "Smart Device Integration",
        "IoT Analytics",
        "Automation Solutions",
        "Sensor Networks",
        "Data Collection",
        "Remote Monitoring"
      ]
    },
    {
      title: "Payment Integration",
      icon: "💳",
      description: "Secure payment solutions for seamless transactions",
      features: [
        "Secure Payment Gateways",
        "UPI Integration",
        "International Payments",
        "E-commerce Payments",
        "Mobile Payment Solutions",
        "Fraud Prevention"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive end-to-end solutions to help your business thrive 
            in the digital landscape. From strategy to execution, we've got you covered.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveService(index)}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                activeService === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-2xl mb-2">{service.icon}</div>
              <div className="text-sm font-medium">{service.title}</div>
            </motion.button>
          ))}
        </div>

        {/* Active Service Details */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{services[activeService].icon}</span>
                <h3 className="text-3xl font-bold text-gray-900">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {services[activeService].description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Learn More
              </motion.button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {services[activeService].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
