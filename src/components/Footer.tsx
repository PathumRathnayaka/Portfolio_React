import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const copyrightVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 }
  }
};

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/t.pathum.rathayaka?mibextid=ZbWKwL', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/pathum_rathnaya?s=09', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/pathum__rathnayaka?igsh=MjdhcHlpdjd6NnR6', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/pathum-rathnayaka-02631b1b8/', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/PathumRathnayaka', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#092537] py-12 border-t border-gray-200 dark:border-gray-700/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Logo/Brand */}
          <motion.div 
            className="text-2xl md:text-3xl font-bold mb-6"
            variants={logoVariants}
          >
            <a href="#" className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
              Expand<span className="text-teal-500 dark:text-teal-400">.</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.ul 
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.li 
                key={link.label}
                variants={socialIconVariants}
                custom={index}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-teal-500/20 hover:text-teal-600 dark:hover:text-teal-300 transition-all duration-300"
                >
                  <motion.span 
                    className="group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Copyright */}
          <motion.p 
            className="text-sm text-gray-600 dark:text-gray-400"
            variants={copyrightVariants}
          >
            All rights reserved © {new Date().getFullYear()} | Crafted by{' '}
            <span className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300">
              Pathum Rathnayaka
            </span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}