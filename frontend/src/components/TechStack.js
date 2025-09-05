import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const techCategories = {
    all: 'All Technologies',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    cloud: 'Cloud & DevOps',
    database: 'Database',
    ai: 'AI & ML',
    tools: 'Tools & Design'
  };

  const technologies = [
    // Frontend Technologies
    {
      name: 'React',
      category: 'frontend',
      icon: '⚛️',
      description: 'JavaScript library for building user interfaces',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'React Native',
      category: 'mobile',
      icon: '📱',
      description: 'Framework for building native mobile apps',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Flutter',
      category: 'mobile',
      icon: '🦋',
      description: 'UI toolkit for building natively compiled applications',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Angular',
      category: 'frontend',
      icon: '🅰️',
      description: 'Platform for building mobile and desktop web applications',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Vue.js',
      category: 'frontend',
      icon: '💚',
      description: 'Progressive JavaScript framework',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      icon: '🔷',
      description: 'Typed superset of JavaScript',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      icon: '🟨',
      description: 'High-level programming language',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'HTML5',
      category: 'frontend',
      icon: '🌐',
      description: 'Markup language for structuring web pages',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'CSS3',
      category: 'frontend',
      icon: '🎨',
      description: 'Styling language for web pages',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: '🎯',
      description: 'Utility-first CSS framework',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      icon: '🔧',
      description: 'CSS framework for responsive web design',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'jQuery',
      category: 'frontend',
      icon: '⚡',
      description: 'Fast, small JavaScript library',
      color: 'from-blue-500 to-blue-700'
    },

    // Backend Technologies
    {
      name: 'Node.js',
      category: 'backend',
      icon: '🟢',
      description: 'JavaScript runtime for server-side development',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Python',
      category: 'backend',
      icon: '🐍',
      description: 'High-level programming language',
      color: 'from-yellow-500 to-blue-600'
    },
    {
      name: 'Django',
      category: 'backend',
      icon: '🎯',
      description: 'High-level Python web framework',
      color: 'from-green-600 to-green-800'
    },
    {
      name: 'Laravel',
      category: 'backend',
      icon: '🔴',
      description: 'PHP web application framework',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'CodeIgniter',
      category: 'backend',
      icon: '🔥',
      description: 'PHP web application framework',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Java',
      category: 'backend',
      icon: '☕',
      description: 'Object-oriented programming language',
      color: 'from-red-600 to-red-800'
    },
    {
      name: 'Spring',
      category: 'backend',
      icon: '🍃',
      description: 'Java application framework',
      color: 'from-green-500 to-green-700'
    },
    {
      name: '.NET',
      category: 'backend',
      icon: '🔷',
      description: 'Microsoft development platform',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'PHP',
      category: 'backend',
      icon: '🐘',
      description: 'Server-side scripting language',
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Express.js',
      category: 'backend',
      icon: '🚀',
      description: 'Web framework for Node.js',
      color: 'from-gray-600 to-gray-800'
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      category: 'cloud',
      icon: '☁️',
      description: 'Amazon Web Services cloud platform',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'Azure',
      category: 'cloud',
      icon: '🔵',
      description: 'Microsoft cloud computing platform',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Google Cloud',
      category: 'cloud',
      icon: '🌐',
      description: 'Google Cloud Platform',
      color: 'from-blue-400 to-green-500'
    },
    {
      name: 'Docker',
      category: 'cloud',
      icon: '🐳',
      description: 'Containerization platform',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Kubernetes',
      category: 'cloud',
      icon: '⚙️',
      description: 'Container orchestration system',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Apache Kafka',
      category: 'cloud',
      icon: '📡',
      description: 'Distributed streaming platform',
      color: 'from-gray-600 to-gray-800'
    },

    // Database Technologies
    {
      name: 'MongoDB',
      category: 'database',
      icon: '🍃',
      description: 'NoSQL document database',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'MySQL',
      category: 'database',
      icon: '🐬',
      description: 'Relational database management system',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      icon: '🐘',
      description: 'Advanced open-source relational database',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Oracle',
      category: 'database',
      icon: '🔴',
      description: 'Multi-model database management system',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Elasticsearch',
      category: 'database',
      icon: '🔍',
      description: 'Search and analytics engine',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Redis',
      category: 'database',
      icon: '🔴',
      description: 'In-memory data structure store',
      color: 'from-red-500 to-red-700'
    },

    // AI & ML Technologies
    {
      name: 'TensorFlow',
      category: 'ai',
      icon: '🧠',
      description: 'Open-source machine learning platform',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'PyTorch',
      category: 'ai',
      icon: '🔥',
      description: 'Machine learning framework',
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Scikit-learn',
      category: 'ai',
      icon: '📊',
      description: 'Machine learning library for Python',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'OpenAI API',
      category: 'ai',
      icon: '🤖',
      description: 'Artificial intelligence API platform',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Machine Learning',
      category: 'ai',
      icon: '🎯',
      description: 'AI technology for predictive analytics',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Deep Learning',
      category: 'ai',
      icon: '🔮',
      description: 'Advanced AI neural networks',
      color: 'from-indigo-500 to-indigo-700'
    },

    // Tools & Design
    {
      name: 'Adobe Photoshop',
      category: 'tools',
      icon: '🎨',
      description: 'Raster graphics editor',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Figma',
      category: 'tools',
      icon: '🎭',
      description: 'Collaborative interface design tool',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Canva',
      category: 'tools',
      icon: '✨',
      description: 'Graphic design platform',
      color: 'from-blue-400 to-purple-600'
    },
    {
      name: 'Git',
      category: 'tools',
      icon: '📝',
      description: 'Version control system',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'GitHub',
      category: 'tools',
      icon: '🐙',
      description: 'Code hosting platform',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'VS Code',
      category: 'tools',
      icon: '💻',
      description: 'Source code editor',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reap benefits from collaborating with our experienced IT experts 
            for your diverse tech requirements. We work with cutting-edge 
            technologies across all domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(techCategories).map(([key, label]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Technologies</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-sm opacity-90">Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
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
            Don't See Your Required Technology?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            We continuously expand our expertise. Contact us to discuss 
            your specific technology requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Discuss Your Tech Needs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
