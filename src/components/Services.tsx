import React from 'react';
import { Code, Layout, Server, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native.',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Developing scalable server-side solutions and APIs.',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
          My Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-teal-500/10 dark:bg-teal-500/5 rounded-lg flex items-center justify-center mb-6 text-teal-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}