import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AdminPanel from './components/AdminPanel';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={
            <>
              <Navbar />
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Services />
                <TechStack />
                <Industries />
                <Process />
                <CaseStudies />
                <Team />
                <Contact />
              </motion.main>
              <Footer />
              <ChatBot />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
