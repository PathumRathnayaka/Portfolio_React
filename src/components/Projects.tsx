import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WobbleCard } from './ui/wobble-card';
import { cn } from '../lib/utils';

const projects = [
    {
        title: 'Spotify clone',
        description: 'The frontend is built with React and TypeScript for scalability and type safety, styled with Tailwind CSS, and uses Zustand for state management and React Query for efficient API calls. The backend runs on Node.js and Express.js, with MongoDB (via Mongoose) as the database. It features Clerk for secure authentication and role management, supporting various API functionalities.',
        technologies: ['React', 'Node.js', 'Express.js'],
        github: 'https://github.com/PathumRathnayaka/Spotify-clone-front-end.git',
        image: 'https://spotifknowledge.com/wp-content/uploads/2024/06/ss3-1200x577.png',
        web: 'https://spotifyremake.vercel.app'
    },
    {
        title: 'Crop Management System',
        description: 'Built a system to manage crop data efficiently using OOP concepts. Users can add, update, and delete crop details, with an interactive table for data visualization',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        github: 'https://github.com/PathumRathnayaka/Crop-Monitoring-System-React.git',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZU2clm4hgRLLfvXV9GySFRMGRC47ZbIu5Q&s',
        web: 'https://spotifyremake.vercel.app'
    },
    {
        title: 'Salon booking system',
        description: 'A full-featured salon booking system built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows customers to browse services, check stylist availability, book appointments, and receive confirmations. Admins can manage bookings, staff schedules, and services through a secure dashboard.',
        technologies: ['React', 'firebase', 'OpenAI'],
        github: 'https://github.com/PathumRathnayaka/salon-client-website.git',
        image: 'https://github.com/PathumRathnayaka/Portfolio_React/blob/main/src/assets/salon.PNG?raw=true',
        web: 'https://salonbooking-lemon.vercel.app/'
    },
    {
        title: 'Construction Marketplace',
        description: 'I\'ve implemented a complete e-commerce solution for Brick.lk, modeled after Amazon but tailored specifically for Sri Lanka\'s construction market. The application features a responsive design with dedicated sections for browsing construction products, services, and suppliers.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Crypto.js'],
        github: 'https://github.com/PathumRathnayaka/Brick.lk-E-commerce-Website.git',
        image: 'https://github.com/PathumRathnayaka/Portfolio_React/blob/main/src/assets/brick.PNG?raw=true',
        web: 'https://bricklk.vercel.app/'
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-[#092537]">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
>
  <span className="relative z-10 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
    Featured Projects
  </span>
</motion.h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    {projects.map((project) => (
                        <WobbleCard
                            key={project.title}
                            containerClassName={cn(
                                project.title === 'Spotify clone' || project.title === 'Construction Marketplace'
                                    ? 'col-span-1 lg:col-span-2'
                                    : 'col-span-1',
                                "bg-white dark:bg-gray-800/50 backdrop-blur-sm min-h-[300px] border border-gray-200 dark:border-gray-700/50 hover:border-teal-500/50 shadow-lg dark:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10 relative overflow-hidden"
                            )}
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0 opacity-20 pointer-events-none"
                            />

                            {/* Content */}
                            <div className="relative h-full flex flex-col z-10">
                                <div className="max-w-xl">
                                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-900 dark:text-white">
                                        {project.title}
                                    </h2>
                                    <p className="mt-4 text-left text-base/6 text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center gap-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md transition-all duration-300 text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-md transition-all duration-300 text-sm"
                                    >
                                        <span>See More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </WobbleCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
