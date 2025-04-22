import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { TypingAnimation } from "./ui/TypingAnimation.tsx";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,  // Delay for child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },  // Start off from the left
  show: {
    opacity: 1,
    x: 0,  // Move to original position
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


export default function Hero() {
  return (
      <section
          id="home"
          className="min-h-screen flex items-center relative bg-cover bg-center"
          style={{
            backgroundImage: `url('https://raw.githubusercontent.com/PathumRathnayaka/software/refs/heads/main/portfoliyocover.png')`,
          }}
      >
        {/* Mobile Background Override */}
        <div
            className="absolute inset-0 bg-cover bg-center sm:hidden"
            style={{
              backgroundImage: `url('https://github.com/PathumRathnayaka/software/blob/main/mobilecover1.png?raw=true')`,
            }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 text-white">
              <TypingAnimation
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
                  duration={100}
                  delay={500}
                  startOnView={true}
              >
                Pathum Rathnayaka
              </TypingAnimation>

              <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-6"
    >
      <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-200">
        Software Engineer
      </motion.h2>

      <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
        Passionate about creating innovative solutions through code.
        Specializing in web development with modern technologies.
      </motion.p>

      <motion.div variants={itemVariants} className="flex space-x-4">
        <a
          href="https://github.com/PathumRathnayaka"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <GitHub className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/pathum-rathnayaka-02631b1b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        <a
          href="mailto:thilinapathumrathnayaka@gmail.com"
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <Mail className="w-6 h-6 text-white" />
        </a>
      </motion.div>
    </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}
