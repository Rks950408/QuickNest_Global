import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      department: "Leadership",
      experience: "15+ years",
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      image: "👨‍💼",
      description: "Visionary leader with extensive experience in scaling technology companies"
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      department: "Technology",
      experience: "12+ years",
      expertise: ["Software Architecture", "Cloud Solutions", "AI/ML"],
      image: "👩‍��",
      description: "Technology expert passionate about innovative solutions and digital transformation"
    },
    {
      name: "Michael Chen",
      position: "Head of Digital Marketing",
      department: "Marketing",
      experience: "10+ years",
      expertise: ["SEO/SEM", "Social Media", "Content Strategy"],
      image: "👨‍🎨",
      description: "Digital marketing strategist with proven track record in growth marketing"
    },
    {
      name: "Emily Rodriguez",
      position: "Head of HR Solutions",
      department: "Human Resources",
      experience: "8+ years",
      expertise: ["Talent Acquisition", "HR Technology", "Workforce Planning"],
      image: "👩‍💼",
      description: "HR specialist focused on building high-performing teams and cultures"
    },
    {
      name: "David Wilson",
      position: "Lead Developer",
      department: "Development",
      experience: "10+ years",
      expertise: ["Full-Stack Development", "Mobile Apps", "API Development"],
      image: "👨‍💻",
      description: "Full-stack developer with expertise in modern web technologies"
    },
    {
      name: "Lisa Park",
      position: "UI/UX Designer",
      department: "Design",
      experience: "7+ years",
      expertise: ["User Experience", "Interface Design", "Prototyping"],
      image: "👩‍🎨",
      description: "Creative designer focused on creating intuitive and beautiful user experiences"
    },
    {
      name: "Robert Brown",
      position: "Cloud Solutions Architect",
      department: "Infrastructure",
      experience: "9+ years",
      expertise: ["Cloud Architecture", "DevOps", "Security"],
      image: "👨‍🔧",
      description: "Infrastructure expert specializing in scalable cloud solutions"
    },
    {
      name: "Amanda Taylor",
      position: "Project Manager",
      department: "Operations",
      experience: "6+ years",
      expertise: ["Agile Management", "Quality Assurance", "Client Relations"],
      image: "👩‍💼",
      description: "Project management professional ensuring smooth delivery and client satisfaction"
    }
  ];

  const departments = [
    { name: "Leadership", count: 1, color: "from-blue-500 to-blue-600" },
    { name: "Technology", count: 2, color: "from-green-500 to-green-600" },
    { name: "Marketing", count: 1, color: "from-purple-500 to-purple-600" },
    { name: "Human Resources", count: 1, color: "from-orange-500 to-orange-600" },
    { name: "Development", count: 1, color: "from-red-500 to-red-600" },
    { name: "Design", count: 1, color: "from-pink-500 to-pink-600" },
    { name: "Infrastructure", count: 1, color: "from-teal-500 to-teal-600" },
    { name: "Operations", count: 1, color: "from-indigo-500 to-indigo-600" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Expert",
    "PMP Certified Project Manager",
    "Certified Scrum Master",
    "Google Analytics Certified",
    "HubSpot Content Marketing",
    "Salesforce Certified Administrator"
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of professionals brings together decades of experience 
            and expertise to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-gray-600">Departments</div>
          </div>
        </motion.div>

        {/* Department Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Team Structure
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${dept.color} rounded-lg p-4 text-white text-center`}
              >
                <div className="text-2xl font-bold">{dept.count}</div>
                <div className="text-sm opacity-90">{dept.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-4">{member.experience} Experience</p>
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                
                <div className="space-y-2">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-1"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{member.expertise.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Certifications & Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-medium text-gray-700">{cert}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Team Culture
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600">We work together as one team, sharing knowledge and supporting each other's growth.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Growth</h4>
              <p className="text-gray-600">We invest in continuous learning and professional development for all team members.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
