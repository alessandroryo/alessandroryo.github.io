import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";

const initialSkills = [
  {
    name: "Python",
    icon: "/img/skills/python.png",
  },
  {
    name: "Adobe Photoshop",
    icon: "/img/skills/photoshop.png",
  },
  {
    name: "Adobe Illustrator",
    icon: "/img/skills/illustrator.png",
  },
  {
    name: "TensorFlow",
    icon: "/img/skills/tensorflow.png",
  },
  {
    name: "Scikit Learn",
    icon: "/img/skills/scikitlearn.png",
  },
  {
    name: "PHP",
    icon: "/img/skills/php.png",
  },
  {
    name: "Laravel",
    icon: "/img/skills/laravel.png",
  },
  {
    name: "JavaScript",
    icon: "/img/skills/js.png",
  },
  {
    name: "NodeJS",
    icon: "/img/skills/nodejs.png",
  },
  {
    name: "React JS",
    icon: "/img/skills/reactjs.png",
  },
  {
    name: "React Native",
    icon: "/img/skills/reactjs.png",
  },
  {
    name: "Git",
    icon: "/img/skills/git.png",
  },
  {
    name: "GitHub",
    icon: "/img/skills/github.png",
  },
  {
    name: "HTML",
    icon: "/img/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/img/skills/css.png",
  },
  {
    name: "MySQL",
    icon: "/img/skills/mysql.png",
  },
  {
    name: "TypeScript",
    icon: "/img/skills/ts.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/img/skills/tailwindcss.png",
  },
  {
    name: "Docker",
    icon: "/img/skills/docker.png",
  },
  {
    name: "PostgreSQL",
    icon: "/img/skills/postgresql.png",
  },
  {
    name: "Flutter",
    icon: "/img/skills/flutter.png",
  },
  {
    name: "MongoDB",
    icon: "/img/skills/mongodb.png",
  },
  {
    name: "Next JS",
    icon: "/img/skills/nextjs.png",
  },
  {
    name: "Dart",
    icon: "/img/skills/dart.png",
  },
];

initialSkills.sort((a, b) => a.name.localeCompare(b.name));

export default function Skill() {
  const [isVisible, setIsVisible] = useState(false);
  const [skills] = useState(initialSkills);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <section id="skills" className="flex flex-col items-center justify-center min-h-screen gap-12 py-32 bg-white border-t border-gray-500 dark:bg-gray-900">
        <div className="flex flex-col w-2/3 lg:w-1/2">
          <div className="flex flex-col items-start gap-2">
            <motion.div className="flex items-center justify-start gap-2" variants={fadeInVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
              <div className="w-20 h-px border border-green-500 dark:border-green-400"></div>
              <h3 className="text-xs font-medium tracking-widest text-green-500 uppercase dark:text-green-400">SKILLS</h3>
            </motion.div>
            <motion.p variants={fadeInVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} className="text-6xl font-black tracking-wide text-black dark:text-white font-dm">
              Skilled and Versatile.
            </motion.p>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/2">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 aspect-square"
                variants={fadeInVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={index}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <div className="flex flex-col items-center justify-center">
                    <img src={skill.icon} alt={skill.name} className="object-contain w-full max-h-8 lg:max-h-12" />
                    <div className="p-2 lg:mt-4">
                      <h3 className="text-sm text-center text-black font-msemibold text-lg:text-base dark:text-white">{skill.name}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
