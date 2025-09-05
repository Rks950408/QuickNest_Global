import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business goals, challenges, and requirements through detailed consultation and analysis.",
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a comprehensive strategy tailored to your specific needs and industry requirements.",
      icon: "📋",
      color: "from-green-500 to-green-600"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We create and implement solutions using cutting-edge technology and best practices in the industry.",
      icon: "⚙️",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution is robust, secure, and performs optimally across all platforms.",
      icon: "✅",
      color: "from-orange-500 to-orange-600"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process and ensure a smooth launch with minimal disruption.",
      icon: "🚀",
      color: "from-red-500 to-red-600"
    },
    {
      step: "06",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and continuous optimization to ensure long-term success.",
      icon: "🔄",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const principles = [
    {
      title: "Transparency",
      description: "Clear communication and regular updates throughout the project lifecycle",
      icon: "👁️"
    },
    {
      title: "Innovation",
      description: "Leveraging latest technologies and methodologies for optimal results",
      icon: "��"
    },
    {
      title: "Collaboration",
      description: "Working closely with your team as an extension of your organization",
      icon: "��"
    },
    {
      title: "Excellence",
      description: "Commitment to delivering high-quality solutions that exceed expectations",
      icon: "⭐"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful project delivery 
            and maximum value for our clients.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-orange-500 via-red-500 to-teal-500 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client-Centric Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Client-Centric Approach
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h4>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Our Process Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Our Process Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
                  <span>Proven methodology with 95% project success rate</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
                  <span>Agile approach ensures flexibility and adaptability</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
                  <span>Regular checkpoints keep projects on track</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
                  <span>Continuous communication and transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
                  <span>Post-launch support and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">95%</div>
              <div className="text-xl mb-2">Project Success Rate</div>
              <div className="text-sm opacity-90">Based on 500+ completed projects</div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">48h</div>
                  <div className="text-sm opacity-90">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
