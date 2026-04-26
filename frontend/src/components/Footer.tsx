import React from 'react';
import { motion } from 'framer-motion';
import { Globe, User, Mail, Heart, Code, Brain, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Globe,
      href: 'https://github.com/marhambhatti',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: User,
      href: 'https://www.linkedin.com/in/muhammad-arham-b342062a0/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Portfolio',
      icon: Brain,
      href: '#',
      color: 'hover:text-orange-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:muhammadarham0372@gmail.com',
      color: 'hover:text-electric-blue'
    }
  ];

  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'scikit-learn', icon: '🤖' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'XGBoost', icon: '🚀' },
    { name: 'React', icon: '⚛️' }
  ];

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-t from-navy-dark to-transparent border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Brain className="w-8 h-8 text-electric-blue glow-text" />
              <span className="font-orbitron font-bold text-2xl text-white">
                Muhammad Arham
              </span>
            </div>
            <p className="text-gray-400 font-rajdhani mb-4 max-w-md">
              Software Engineer passionate about building intelligent applications with machine learning and modern web technologies.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-500">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-hot-pink" />
              <span>by Muhammad Arham</span>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-orbitron font-bold text-lg text-white mb-4">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card p-3 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl mb-1">{tech.icon}</div>
                  <div className="text-xs text-gray-300 font-rajdhani">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-orbitron font-bold text-lg text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors duration-300 hover:scale-110`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-gray-500 font-rajdhani">
              <p>Let's collaborate</p>
              <p className="text-electric-blue font-semibold">
                Open for opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500 font-rajdhani text-center md:text-left">
              © 2024 Muhammad Arham. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-electric-blue transition-colors cursor-pointer">
                <Code className="w-4 h-4" />
                <span className="font-rajdhani">Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-cyber-green transition-colors cursor-pointer">
                <Zap className="w-4 h-4" />
                <span className="font-rajdhani">Skills</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
