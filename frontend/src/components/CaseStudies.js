import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Outdated platform with poor user experience and low conversion rates",
      solution: "Complete redesign with modern UI/UX, mobile optimization, and payment integration",
      results: [
        "300% increase in conversion rates",
        "50% improvement in page load speed",
        "200% growth in mobile traffic",
        "40% increase in average order value"
      ],
      image: "🛒",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Healthcare Management System",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Manual patient management leading to inefficiencies and errors",
      solution: "Custom HIPAA-compliant patient management system with telemedicine features",
      results: [
        "60% reduction in administrative time",
        "95% patient satisfaction rate",
        "40% increase in appointment bookings",
        "100% HIPAA compliance achieved"
      ],
      image: "🏥",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Financial Services Automation",
      client: "FinTech Innovations",
      industry: "Finance",
      challenge: "Manual processes causing delays and compliance issues",
      solution: "Automated workflow system with secure payment processing and compliance monitoring",
      results: [
        "80% reduction in processing time",
        "99.9% uptime achieved",
        "50% cost savings on operations",
        "100% regulatory compliance"
      ],
      image: "🏦",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Lack of real-time monitoring and predictive maintenance",
      solution: "IoT sensor network with AI-powered analytics and predictive maintenance",
      results: [
        "35% reduction in downtime",
        "25% increase in production efficiency",
        "50% reduction in maintenance costs",
        "90% improvement in quality control"
      ],
      image: "🏭",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Educational Platform Development",
      client: "EduTech Academy",
      industry: "Education",
      challenge: "Need for scalable online learning platform",
      solution: "Comprehensive LMS with video streaming, assessments, and progress tracking",
      results: [
        "500% increase in student enrollment",
        "85% course completion rate",
        "60% improvement in learning outcomes",
        "90% student satisfaction score"
      ],
      image: "🎓",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, RetailTech Solutions",
      content: "QuickNest transformed our entire digital presence. The results speak for themselves - our revenue has tripled since the launch.",
      avatar: "👩‍💼"
    },
    {
      name: "Dr. Michael Chen",
      position: "Medical Director, MediCare Plus",
      content: "The healthcare management system has revolutionized our operations. We can now focus on patient care instead of paperwork.",
      avatar: "👨‍⚕️"
    },
    {
      name: "David Rodriguez",
      position: "CTO, FinTech Innovations",
      content: "Their expertise in financial technology and compliance helped us scale safely and efficiently. Highly recommended!",
      avatar: "👨‍💻"
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve 
            remarkable growth and transformation through our solutions.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {study.industry}
            </motion.button>
          ))}
        </div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className={`h-2 bg-gradient-to-r ${caseStudies[activeCase].color}`}></div>
          
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{caseStudies[activeCase].image}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {caseStudies[activeCase].title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {caseStudies[activeCase].client}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudies[activeCase].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{caseStudies[activeCase].solution}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Results Achieved</h4>
                <div className="grid grid-cols-1 gap-3">
                  {caseStudies[activeCase].results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.position}</p>
                </div>
                <p className="text-gray-600 italic text-center">"{testimonial.content}"</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </motion.div>
            ))}
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
