import { section } from 'framer-motion/client';
import React from 'react';
import { Timeline } from "@/components/ui/timeline";

const RoadMap = () => {
  // Timeline data
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          Cloud & Advanced Tech
          </h3>
          
          <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
          Cloud platforms and DevOps
          </h4>
          
          <ul className="mb-6">
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Docker, Kubernetes
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Mobile app development
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Cloud architecture and serverless solutions
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> CI/CD implementation and deployment automation
            </li>
          </ul>
          
          <div className="grid grid-cols-2 gap-4">
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" />
          
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
          
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" />
          
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          Full-Stack Development
          </h3>
          
          <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
          Mastering advanced modern web and backend development frameworks and techniques for building scalable, high-performance applications
          </h4>
          
          <ul className="mb-6">
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Mastered React ecosystem and state management
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Built responsive and accessible web applications
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Learned advanced CSS techniques and UI libraries
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Developed backend skills with Node.js and Express
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Implemented authentication and API integration
            </li>
          </ul>
          
          <div className="grid grid-cols-2 gap-4">
          <img className="w-20 h-20"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            
          
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          
          
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
          
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
          
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2022",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          Data Structures & Algorithms
          </h3>
          
          <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
          Frameworks and version control
          </h4>
          
          <ul className="mb-6">
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Learning complex algorithms and data structures
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Problem-solving and optimizations
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Introduction to web frameworks
            </li>
          </ul>
          
          <div className="grid grid-cols-2 gap-4">
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          
            
          
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" />
          
          
          
          
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-plain-wordmark.svg" />
          
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
          
          
          
            
            
          </div>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          Started Software Engineering path
          </h3>
          
          <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            Programming Fundamentals & Database Introduction
          </h4>
          
          <ul className="mb-6">
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Java programming and OOP concepts
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> SQL queries and MySQL basics
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Database design and normalization
            </li>
          </ul>
          
          <div className="grid grid-cols-2 gap-4">
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          
            
          
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
          
          
            
          <img className="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          
            
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            AL ICT Stream (Foundations)
          </h3>
          
          <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            ICT fundamentals and computer science basics
          </h4>
          
          <ul className="mb-6">
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Computer basics (Hardware/Software, OS - Windows/Linux)
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Networking (IP addresses, LAN/WAN, IoT basics)
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-1">
              <span className="text-teal-500">•</span> Programming exposure (Basic HTML/CSS)
            </li>
          </ul>
          
          <div className="grid grid-cols-2 gap-4">
          
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id='roadmap' className='py-20 bg-gray-50 dark:bg-[#092537]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-semibold text-center mb-12 text-gray-700 dark:text-gray-300'>My Journey</h2>
        <div className='max-w-5xl mx-auto'>
          <div className="relative w-full overflow-clip">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;