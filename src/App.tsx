import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, LineChart, PieChart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              variants={slideFromLeft}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-2xl font-bold transform -rotate-45">A</span>
              </div>
              <div className="text-2xl font-bold px-2">
                <span className="text-blue-400 gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text ">Analytica</span> Data
              </div>
            </motion.div>
            <motion.div
              className="hidden md:flex space-x-8"
              initial="hidden"
              animate="visible"
              variants={slideFromRight}
            >
              <a
                href="#home"
                className="text-blue-400 text-2xl hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-400 text-2xl hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                About
              </a>
              <a
                href="#features"
                className="text-blue-400 text-2xl hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-blue-400 text-2xl hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 transform scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30"></div>
        </div>
        <motion.div
          className="container mx-auto px-6 text-center relative"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={slideFromLeft}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center transform rotate-45 shadow-lg shadow-blue-600/30">
              <span className="text-4xl font-bold transform -rotate-45">A</span>
            </div>
          </div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={slideFromRight}
          >
            Transform Your Business with Data Insights
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 gradient-hover bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300 bg-clip-text text-transparent"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={slideFromLeft}
          >
            Unlock the power of your data with advanced analytics solutions
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30">
              Get Started
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50" ref={aboutRef}>
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={slideFromRight}
        >
          <h2 className="text-4xl font-bold mb-12 text-center gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-xl gradient-hover bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300 bg-clip-text text-transparent leading-relaxed"
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={slideFromLeft}
            >
              At Analytica Data, we're passionate about transforming complex data into actionable insights.
              Our mission is to help businesses make data-driven decisions with confidence through
              cutting-edge analytics solutions and expert consultation.
            </motion.p>
            <div className="mt-8 grid grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={slideFromLeft}
              >
                <div className="text-4xl font-bold gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-400 mt-2">Clients Served</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={slideFromRight}
              >
                <div className="text-4xl font-bold gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">98%</div>
                <div className="text-gray-400 mt-2">Success Rate</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={slideFromLeft}
              >
                <div className="text-4xl font-bold gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-400 mt-2">Support</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="py-20" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={slideFromRight}
          >
            Our Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 className="w-12 h-12" />, title: "Predictive Analytics", description: "Forecast trends and make data-driven decisions" },
              { icon: <LineChart className="w-12 h-12" />, title: "Data Visualization", description: "Transform complex data into clear visual insights" },
              { icon: <PieChart className="w-12 h-12" />, title: "Real-time Insights", description: "Monitor and analyze data as it happens" },
              { icon: <Mail className="w-12 h-12" />, title: "Custom Reporting", description: "Tailored reports that match your needs" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl hover:shadow-lg hover:shadow-blue-600/10 transition-all transform hover:-translate-y-2 backdrop-blur-sm border border-gray-700/50"
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 gradient-hover bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">{feature.title}</h3>
                <p className="gradient-hover bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300 bg-clip-text text-transparent">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800/50" ref={contactRef}>
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={slideFromRight}
        >
          <h2 className="text-4xl font-bold mb-12 text-center gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 gradient-hover bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300 bg-clip-text text-transparent">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 gradient-hover bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300 bg-clip-text text-transparent">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 gradient-hover bg-gradient-to-r from-gray-300 via-blue-300 to-gray-300 bg-clip-text text-transparent">Message</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Send Message
            </button>
          </form>
          {showConfirmation && (
            <div className="mt-4 p-4 bg-green-600/20 text-green-400 rounded-lg text-center backdrop-blur-sm">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center space-x-2 mb-4 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={slideFromLeft}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-lg font-bold transform -rotate-45">A</span>
              </div>
              <div className="text-2xl font-bold">
                <span className="gradient-hover bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Analytica</span> Data
              </div>
            </motion.div>
            <motion.div
              className="flex space-x-6"
              initial="hidden"
              animate="visible"
              variants={slideFromRight}
            >
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
            </motion.div>
          </div>
          <motion.div
            className="mt-8 text-center gradient-hover bg-gradient-to-r from-gray-400 via-blue-400 to-gray-400 bg-clip-text text-transparent"
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
          >
            © 2024 Analytica Data. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;