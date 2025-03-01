import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
