import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WobbleCard } from './ui/wobble-card';
import { cn } from '../lib/utils';

const projects = [
    {
        title: 'Subtitle Manager',
        description: 'Developed a web app to sync and translate subtitles between two languages using the Gemini API. Users can upload subtitle files, and the tool automatically matches text and generates downloadable .srt files.',
        technologies: ['React', 'Node.js', 'Express.js'],
        github: 'https://github.com/PathumRathnayaka/Subtitle-Generator-AI.git',
        image: 'https://cdn.prod.website-files.com/60d0c29c2e1261708dd228ea/669909585e9e9b266d4eaa48_subtitle-editing-tool-header-img.webp',
    },
    {
        title: 'Crop Management System',
        description: 'Built a system to manage crop data efficiently using OOP concepts. Users can add, update, and delete crop details, with an interactive table for data visualization',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        github: 'https://github.com/PathumRathnayaka/Crop-Monitoring-System-React.git',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZU2clm4hgRLLfvXV9GySFRMGRC47ZbIu5Q&s',
    },
    {
        title: 'AI-Powered Travel Planner',
        description: 'Built an AI-driven trip planner that customizes itineraries based on user preferences. Integrated Google Places API for destinations and Firebase for data storage, with OpenAI for itinerary generation',
        technologies: ['React', 'firebase', 'OpenAI'],
        github: 'https://github.com/PathumRathnayaka/AI-travel-planner.git',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogvBhiAZ7_XgX-AjFOkX8ICkJlt-uMkSGZg&s',
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
                    className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white group relative"
                >
          <span className="relative z-10 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
            Featured Projects
          </span>
                    <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.h2>

                {/* Short Description */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-center mb-12 relative"
                >
                    <p className="text-lg md:text-xl text-black dark:text-white leading-relaxed bg-gradient-to-r from-transparent via-teal-500/10 to-transparent dark:from-transparent dark:via-teal-500/20 dark:to-transparent py-2 px-4 rounded-lg">
                        I optimize websites for speed and performance using techniques like lazy loading, code splitting, and efficient caching. My projects are built with security in mind, implementing best practices such as HTTPS, input validation, and secure API integrations to protect your digital assets.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    {projects.map((project, index) => (
                        <WobbleCard
                            key={project.title}
                            containerClassName={cn(
                                index === 0 ? "col-span-1 lg:col-span-2" : "col-span-1",
                                "bg-white dark:bg-gray-800/50 min-h-[300px]"
                            )}
                        >
                            <div className="relative h-full flex flex-col">
                                <div className="max-w-xs">
                                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-900 dark:text-white">
                                        {project.title}
                                    </h2>
                                    <p className="mt-4 text-left text-base/6 text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                                />
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
                                        href={project.github} // You might want to add a separate demo URL if available
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

                {/* See More Button */}
                <div className="text-center">
                    <a
                        href="/projects" // Replace with your actual projects page URL
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 group"
                    >
                        <span>See More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
}