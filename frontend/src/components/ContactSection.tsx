import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, User, Link } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'muhammadarham0372@gmail.com',
      href: 'mailto:muhammadarham0372@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+923459725016',
      href: 'tel:+923459725016'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Lahore, Punjab',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Globe className="w-5 h-5" />,
      name: 'GitHub',
      href: 'https://github.com/marhambhatti'
    },
    {
      icon: <User className="w-5 h-5" />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-arham-b342062a0/'
    },
    {
      icon: <Link className="w-5 h-5" />,
      name: 'Portfolio',
      href: '#'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      name: 'Email',
      href: 'mailto:muhammadarham0372@gmail.com'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gradient-to-b from-navy-dark/30 to-transparent">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6">
            Get In <span className="text-electric-blue glow-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate on ML solutions? Or just want to say hello? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                Send us a Message
              </h3>
              
              {submitMessage && (
                <motion.div
                  className="mb-6 p-4 bg-cyber-green/20 border border-cyber-green/50 rounded-lg text-cyber-green font-rajdhani"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-electric-blue font-rajdhani mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-electric-blue font-rajdhani mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-electric-blue font-rajdhani mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-electric-blue font-rajdhani mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-navy-dark/50 border border-white/20 rounded-lg text-white font-rajdhani focus:border-electric-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-electric-blue to-cyber-green text-navy-dark font-rajdhani font-bold py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-cyber-green hover:to-electric-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-electric-blue">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-rajdhani">{info.label}</div>
                      <a
                        href={info.href}
                        className="text-white font-rajdhani hover:text-electric-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 glass-card hover:bg-white/10 transition-colors group"
                  >
                    <div className="text-gray-400 group-hover:text-electric-blue transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-gray-300 font-rajdhani group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                Business Hours
              </h3>
              <div className="space-y-2 font-rajdhani">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="text-electric-blue">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span className="text-electric-blue">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
