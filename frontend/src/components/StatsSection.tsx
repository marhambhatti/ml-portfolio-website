import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, TrendingUp, Award, Users, Zap, Code } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  suffix?: string;
}

const StatsSection: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    models: 0,
    accuracy: 0,
    categories: 0,
    industries: 0
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats: StatItem[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      value: '30',
      label: 'Models',
      color: 'text-electric-blue',
      suffix: '+'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '95',
      label: 'Accuracy',
      color: 'text-cyber-green',
      suffix: '%+'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '6',
      label: 'Categories',
      color: 'text-hot-pink'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '15',
      label: 'Industries',
      color: 'text-yellow-400',
      suffix: '+'
    }
  ];

  useEffect(() => {
    if (inView) {
      const targetValues = {
        models: 30,
        accuracy: 95,
        categories: 6,
        industries: 15
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat) => {
        const key = stat.label.toLowerCase();
        const targetValue = targetValues[key as keyof typeof targetValues];
        let currentValue = 0;
        const increment = targetValue / steps;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, stepDuration);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-transparent to-navy-dark/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4">
            Impact & <span className="text-electric-blue glow-text">Statistics</span>
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto">
            Our ML models are making a difference across various industries
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`mb-4 flex justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="font-orbitron font-black text-4xl md:text-5xl text-white mb-2 counter">
                {counters[stat.label.toLowerCase()]}{stat.suffix}
              </div>
              <div className="text-gray-400 font-rajdhani font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0">
              <Zap className="w-6 h-6 text-electric-blue" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                Real-time Processing
              </h3>
              <p className="text-gray-400 text-sm font-rajdhani">
                Lightning-fast inference with optimized algorithms for production deployment
              </p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0">
              <Code className="w-6 h-6 text-cyber-green" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                Open Source
              </h3>
              <p className="text-gray-400 text-sm font-rajdhani">
                All models are built with open-source frameworks and available for customization
              </p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0">
              <Brain className="w-6 h-6 text-hot-pink" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-400 text-sm font-rajdhani">
                Models are regularly updated with new data and improved algorithms
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-30"></div>
          </div>
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-block glass-card px-8 py-4">
              <p className="font-rajdhani text-lg text-gray-300">
                Trusted by <span className="text-electric-blue font-bold">10,000+</span> developers worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
