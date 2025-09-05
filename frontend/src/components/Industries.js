import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    {
      name: "Banking",
      icon: "🏛️",
      description: "Secure financial solutions and digital banking platforms",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Financial",
      icon: "💰",
      description: "Investment platforms and financial management systems",
      color: "from-green-500 to-green-700"
    },
    {
      name: "Insurance",
      icon: "🛡️",
      description: "Policy management and claims processing solutions",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Education",
      icon: "🎓",
      description: "Learning management systems and e-learning platforms",
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Aviation",
      icon: "✈️",
      description: "Flight management and passenger service systems",
      color: "from-red-500 to-red-700"
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Patient management and telemedicine solutions",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Pharma",
      icon: "💊",
      description: "Drug development and pharmaceutical management",
      color: "from-pink-500 to-pink-700"
    },
    {
      name: "Retail",
      icon: "🛍️",
      description: "E-commerce platforms and inventory management",
      color: "from-orange-500 to-orange-700"
    },
    {
      name: "Energy",
      icon: "⚡",
      description: "Renewable energy and power management systems",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      name: "Telecom",
      icon: "📡",
      description: "Communication networks and service management",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      name: "Shipping",
      icon: "🚚",
      description: "Logistics and fleet management solutions",
      color: "from-red-600 to-red-800"
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Production optimization and IoT integration",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            We Serve to Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, providing tailored solutions 
            that meet the unique challenges and requirements of each sector.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-center">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{industry.icon}</span>
                  </div>
                </div>
                
                {/* Industry Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories by Industry */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industry Success Stories
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <div className="text-3xl mb-4">🏛️</div>
              <h4 className="text-xl font-bold mb-3">Banking Sector</h4>
              <p className="text-sm mb-4">
                "QuickNest helped us build a secure digital banking platform that now serves 
                50,000+ customers. Their expertise in financial technology was invaluable."
              </p>
              <div className="text-yellow-400 font-bold">+200% Digital Adoption</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white"
            >
              <div className="text-3xl mb-4">🏥</div>
              <h4 className="text-xl font-bold mb-3">Healthcare Provider</h4>
              <p className="text-sm mb-4">
                "Their HIPAA-compliant patient management system streamlined our operations 
                and improved patient satisfaction significantly."
              </p>
              <div className="text-yellow-400 font-bold">+60% Efficiency</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white"
            >
              <div className="text-3xl mb-4">🛍️</div>
              <h4 className="text-xl font-bold mb-3">Retail Chain</h4>
              <p className="text-sm mb-4">
                "The e-commerce platform and inventory management system helped us expand 
                to online markets and increase sales by 300%."
              </p>
              <div className="text-yellow-400 font-bold">+300% Sales Growth</div>
            </motion.div>
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
          <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We work with businesses across all sectors. Let's discuss how we can 
              help your industry-specific needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Industry Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
