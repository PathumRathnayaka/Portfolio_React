import React from 'react';
import { Globe, Smartphone, Database, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe className="w-12 h-12 sm:w-32 sm:h-32" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
  },
  {
    icon: <Smartphone className="w-12 h-12 sm:w-32 sm:h-32" />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native.',
  },
  {
    icon: <Database className="w-12 h-12 sm:w-32 sm:h-32" />,
    title: 'Backend Development',
    description: 'Developing scalable server-side solutions and APIs.',
  },
  {
    icon: <PenTool className="w-12 h-12 sm:w-32 sm:h-32" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <div id="services" className="mx-auto mt-24 mb-20 max-w-6xl text-center p-6 bg-gray-50 dark:bg-[#092537]">
      <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl">
        My Services
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center"
      >
        {services.map((service) => (
          <motion.a
            key={service.title}
            variants={cardVariants}
            className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10 flex w-full items-center px-4 py-6 text-black duration-200 hover:no-underline dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col"
            href="#"
            target="_blank"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mr-4 sm:mr-0 sm:mt-4 sm:mb-2 text-teal-500 dark:text-teal-400">
              {service.icon}
            </div>
            <div>
              <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">
                {service.title}
              </div>
              <div className="text-sm opacity-75">
                {service.description}
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
