import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

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
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white group relative">
          <span className="relative z-10 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
            Featured Projects
          </span>
                    <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h2>

                {/* Short Description */}
                <div className="max-w-3xl mx-auto text-center mb-12 relative">
                    <p className="text-lg md:text-xl text-black dark:text-teal-300 leading-relaxed bg-gradient-to-r from-transparent via-teal-500/10 to-transparent dark:from-transparent dark:via-teal-500/20 dark:to-transparent py-2 px-4 rounded-lg">
                        I optimize websites for speed and performance using techniques like lazy loading, code splitting, and efficient caching. My projects are built with security in mind, implementing best practices such as HTTPS, input validation, and secure API integrations to protect your digital assets.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-500/10"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40" />
                                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-teal-500/20 text-teal-600 dark:text-teal-300 rounded-full backdrop-blur-sm"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center space-x-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 group/link"
                                    >
                                        <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                                        <span className="text-sm">Code</span>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 group/link"
                                    >
                                        <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                                        <span className="text-sm">Demo</span>
                                    </a>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                        </div>
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