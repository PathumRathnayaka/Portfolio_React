import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Git",
  "SQL",
  "AWS",
];

export default function About() {
  return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-[#092537]">
        <div className="container mx-auto px-4" >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 mx-auto mb-6">

            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-5">
            <div className="relative w-3/4 mx-auto">
              <img
                  src="https://github.com/PathumRathnayaka/Portfolio_React/blob/main/src/assets/cover3_053717.jpg?raw=true"
                  alt="Profile"
                  className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                We can make it together
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                A passionate software engineer in
                developing web and mobile applications. Proficient in JavaScript,
                React, Node.js, and Python. I enjoy solving complex problems and
                building innovative solutions.
              </p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/5 text-teal-700 dark:text-teal-300 text-sm font-medium border border-teal-400"
                    >
                  {skill}
                </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                    href="#"
                    className="btn btn-outline-pill border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-white transition-all"
                >
                  Download my CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
