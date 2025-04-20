import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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
            <CardContainer className="inter-var">
  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0f172a] dark:border-white/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
    {/* Header with avatar and name */}
    <div className="flex items-center space-x-4">
      <CardItem translateZ={20}>
        <img
          src="https://github.com/PathumRathnayaka/Portfolio_React/blob/main/src/assets/cover3_053717.jpg?raw=true"
          className="w-12 h-12 rounded-full object-cover"
          alt="Avatar"
        />
      </CardItem>
      <div>
        <CardItem
          translateZ={20}
          className="font-semibold text-neutral-800 dark:text-white"
        >
          Pathum Rathnayaka
        </CardItem>
        <CardItem
          translateZ={20}
          className="text-sm text-neutral-500 dark:text-neutral-400"
        >
          @pathumr_dev
        </CardItem>
      </div>
    </div>

    {/* Tweet content */}
    <CardItem
      as="p"
      translateZ={40}
      className="text-neutral-700 dark:text-neutral-300 mt-4 text-sm"
    >
      Focused on the future, inspired by the view. 🚀💻 #WebDev #React #TechLife
    </CardItem>

    {/* Image */}
    <CardItem translateZ={100} className="w-full mt-4">
      <img
        src="https://github.com/PathumRathnayaka/Portfolio_React/blob/main/src/assets/cover3_053717.jpg?raw=true"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="Post image"
      />
    </CardItem>

    {/* Action buttons (icons only) */}
    <div className="flex justify-around items-center mt-6 text-neutral-500 dark:text-neutral-400 text-sm">
      <CardItem translateZ={20} className="hover:text-blue-500 cursor-pointer">
        💬 Comment
      </CardItem>
      <CardItem translateZ={20} className="hover:text-green-500 cursor-pointer">
        🔁 Repost
      </CardItem>
      <CardItem translateZ={20} className="hover:text-pink-500 cursor-pointer">
        ❤️ Like
      </CardItem>
      <CardItem translateZ={20} className="hover:text-yellow-500 cursor-pointer">
        📌 Save
      </CardItem>
    </div>
  </CardBody>
</CardContainer>

            </div>

            <div className="text-center md:text-left">
              <h2 className="text-4xl font-semibold mb-4">
                We can make it together
              </h2>
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
