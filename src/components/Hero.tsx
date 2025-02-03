import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import {TypingAnimation} from "./ui/TypingAnimation.tsx";

export default function Hero() {
  return (
      <section
          id="home"
          className="min-h-screen flex items-center relative bg-cover bg-center"
          style={{
            backgroundImage:
                "url('https://raw.githubusercontent.com/PathumRathnayaka/software/refs/heads/main/portfoliyocover.png')",
          }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 text-white">
                <TypingAnimation
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
                    duration={100} // Adjust typing speed
                    delay={500} // Delay before typing starts
                    startOnView={true} // Start animation when visible
                >
                  Pathum Rathnayaka
                </TypingAnimation>

              <h2 className="text-2xl md:text-3xl text-gray-200">
                Software Engineer
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about creating innovative solutions through code.
                Specializing in web development with modern technologies.
              </p>

              <div className="flex space-x-4">
                <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <GitHub className="w-6 h-6 text-white" />
                </a>
                <a
                    href="https://www.linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                    href="mailto:john.doe@example.com"
                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
