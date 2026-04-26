import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Zap, Users, Award, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'ML Engineer',
      description: 'Passionate about building intelligent systems using machine learning and deep learning techniques'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Dev',
      description: 'Experienced in building end-to-end web applications using MERN stack, Python, and modern frameworks'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time ML',
      description: 'Building real-time ML prediction systems with trained models that learn from actual data'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Turning complex business problems into elegant technical solutions with data-driven approaches'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following industry best practices'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Result Oriented',
      description: 'Focused on delivering practical solutions across healthcare, finance, and e-commerce domains'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-b from-transparent to-navy-dark/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
            About <span className="text-electric-blue glow-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            I am Muhammad Arham, a Software Engineer from Lahore, Pakistan with a passion for 
            machine learning and building intelligent applications. I specialize in creating 
            real-world ML solutions that bridge the gap between theory and practical application.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="glass-card p-8 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-orbitron font-bold text-2xl text-cyber-green mb-4">
            My Mission
          </h3>
          <p className="text-gray-300 font-rajdhani text-lg leading-relaxed max-w-2xl mx-auto">
            To build intelligent software solutions that leverage machine learning to solve 
            real-world problems, making AI accessible and practical for businesses and individuals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-4 flex justify-center text-electric-blue group-hover:text-cyber-green transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-orbitron font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-rajdhani leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-orbitron font-bold text-electric-blue mb-2">9+</div>
            <div className="text-sm text-gray-400 font-rajdhani">ML Models</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-orbitron font-bold text-cyber-green mb-2">10+</div>
            <div className="text-sm text-gray-400 font-rajdhani">Projects</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-orbitron font-bold text-hot-pink mb-2">3+</div>
            <div className="text-sm text-gray-400 font-rajdhani">Years Exp</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-orbitron font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-sm text-gray-400 font-rajdhani">Dedication</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-card p-8 inline-block">
            <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-300 font-rajdhani mb-6">
              Looking for opportunities in software engineering and machine learning? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-electric-blue to-cyber-green text-navy-dark font-rajdhani font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#models"
                className="border-2 border-electric-blue text-electric-blue font-rajdhani font-bold py-3 px-8 rounded-full hover:bg-electric-blue hover:text-navy-dark transition-all duration-300"
              >
                Explore Models
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
