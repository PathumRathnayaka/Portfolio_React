import React from 'react';
import { Globe, Smartphone, Database, PenTool, } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native.',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Developing scalable server-side solutions and APIs.',
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces.',
  },
];

export default function Services() {
  return (
      <section className="py-20 bg-gray-50 dark:bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white group relative">
          <span className="relative z-10 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
            My Services
          </span>
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h2>

          {/* Short Description */}
          <div className="max-w-3xl mx-auto text-center mb-12 relative">
            <p className="text-lg md:text-xl text-black dark:text-teal-300 leading-relaxed bg-gradient-to-r from-transparent via-teal-500/10 to-transparent dark:from-transparent dark:via-teal-500/20 dark:to-transparent py-2 px-4 rounded-lg">
              As a passionate freelancer, I specialize in crafting innovative digital solutions using cutting-edge technologies like React, Node.js, and MongoDB. From web and mobile apps to scalable backends and stunning UI/UX designs, I deliver tailored services to bring your ideas to life.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service) => (
                <div
                    key={service.title}
                    className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-teal-500 dark:text-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="absolute inset-0 rounded-2xl bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
            ))}
          </div>


        </div>
      </section>
  );
}