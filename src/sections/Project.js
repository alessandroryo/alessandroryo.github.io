import { useState } from "react";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

const projects = [
  {
    title: "Conneqtech Bicycles Behavior Detection",
    description:
      "Developed in collaboration with Conneqtech, this project aims to detect suspicious activities on their bicycles. Implementing the CRISP-DM methodology and utilizing advanced data science techniques creates a robust system to accurately identify and classify suspicious behaviour. This project demonstrates the practical application of classification algorithms, enhancing bicycle security and mitigating potential threats.",
    image: "/img/projects/Conneqtech.jpg",
    link: null,
    techStack: ["Python", "Tensorflow", "Keras"],
  },
  {
    title: "Rock, Paper, Scissors Image Classification",
    description: "A simple machine-learning model is assigned to classify paper, scissors, or stone images based on an uploaded image. Developed using the Python programming language.",
    image: "/img/projects/Rock, Paper, Scissors.png",
    link: "http://github.com/alessandroryo/rock-paper-scissors-classification",
    techStack: ["Python", "Tensorflow", "Keras"],
  },
  {
    title: "3P Tests Zeelenberg Architectuur Website",
    description:
      "Developed in collaboration with Zeelenberg Architectuur company, this sophisticated website, the 3P Tests, aims to evaluate the balance and viability of architectural concept plans. Utilizing the PHP Laravel Framework and Tailwind CSS, this dynamic platform enables accurate measurements and analysis, facilitating the seamless development of exceptional architectural designs.",
    image: "/img/projects/3P-Tests.jpg",
    link: "http://188.166.89.92/",
    techStack: ["PHP", "Laravel", "Tailwind CSS"],
  },
  {
    title: "Healthy-Link Mobile App",
    description:
      "Designed as a mobile application for iOS and Android, Healthy-Link serves as a platform that connects individuals based on shared activities or nearby events. Developed using Express, React Native, and Node JS with a microservice architecture, this innovative app enables users to engage in meaningful social interactions while promoting a healthy and active lifestyle.",
    image: "/img/projects/Healthy-Link.png",
    link: "http://github.com/alessandroryo/healthy-link",
    techStack: ["Express", "Node JS", "React Native", "JSON DB", "Docker", "Microservices"],
  },
  {
    title: "HZ Portfolio Website",
    description:
      "Developed as my first college assignment, the HZ Portfolio Website exhibits my general background information and the motivations behind my decision to join HZ University. Created using HTML, CSS, and JS, the website beautifully portrays my journey and aspirations.",
    image: "/img/projects/HZ-Portfolio-Website.jpg",
    link: "http://alessandroryo.github.io/hz-portfolio-showcase-website/",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Password Defender Game",
    description:
      "Developed as a web-based game, Password Defender effectively educates children on the significance of cyber and internet security. Using HTML Canvas and TypeScript, this engaging platform empowers young minds with essential knowledge and skills to protect themselves online, promoting a safer digital environment.",
    image: "/img/projects/Password-Defender.jpg",
    link: "http://alessandroryo.github.io/password-defender/",
    techStack: ["HTML5 Canvas", "TypeScript"],
  },
  {
    title: "Vagrant LAMP Stack Tutorial",
    description:
      "This comprehensive manual provides a clear and concise walkthrough on setting up a Laravel project using a Vagrant virtual machine and Ubuntu 20.04. With a well-defined methodology, this tutorial equips developers with the necessary knowledge to effortlessly create robust web applications in a reliable LAMP stack environment.",
    image: "/img/projects/Vagrant LAMP Stack Tutorial.png",
    link: "http://alessandroryo.notion.site/Vagrant-LAMP-Stack-Tutorial-799c9cad49aa4a3f91a2e66a68f8bfb1",
    techStack: ["Vagrant VM", "LAMP Stack"],
  },
  {
    title: "Vagrant & Laravel Homestead Tutorial",
    description:
      "This instructive guide offers a comprehensive walkthrough on creating Laravel projects using Vagrant virtual machine and Laravel Homestead. With a well-structured methodology, this tutorial enables developers to effortlessly set up a robust development environment and achieve seamless Laravel project creation, enhancing productivity and efficiency.",
    image: "/img/projects/Homestead Tutorial.jpg",
    link: "http://alessandroryo.notion.site/Vagrant-and-Laravel-Homestead-Tutorial-ea332ab5bfda46b2bef6ecaf28bfd713",
    techStack: ["Vagrant VM", "Laravel", "Laravel Homestead"],
  },
  {
    title: "Java CLI Trivia Game",
    description:
      "Developed using the Java programming language, this trivia game offers an immersive experience through a console interface. Applying efficient software design patterns, the game showcases increased application performance, ensuring an enjoyable and interactive gaming experience for users.",
    image: "/img/projects/Java Trivia Game.jpg",
    link: "http://github.com/alessandroryo/trivia-game",
    techStack: ["Java"],
  },
];

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 + index * 0.3, // Adjusted delay for each project
        duration: 0.6,
      },
    }),
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <section id="projects" className="flex flex-col items-center justify-center min-h-screen gap-12 py-32 bg-black">
        <div className="w-2/3 lg:w-1/2">
          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={headerVariants} className="flex flex-col items-start w-1/2 mb-10">
            <div className="flex items-center justify-start gap-2">
              <div className="w-20 h-px bg-green-500"></div>
              <h3 className="text-xs font-medium tracking-widest text-green-500 uppercase">PROJECTS</h3>
            </div>
            <p className="mt-2 text-6xl font-black tracking-wide text-white font-dm">Discover My Works.</p>
          </motion.div>
          <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, projectIdx) => (
              <motion.article key={projectIdx} className="flex flex-col items-start justify-start h-full group" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={projectVariants} custom={projectIdx}>
                <div className="relative w-full mb-3 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover object-center group-hover:scale-110 w-full h-full transition-transform duration-500 ease-in-out transform aspect-[16/9] rounded-lg bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="h-14">
                  <h3 className="text-lg font-bold leading-6 text-white cursor-pointer group-hover:text-gray-200">
                    <a href={project.link}>
                      {project.title}
                    </a>
                  </h3>
                </div>
                <p className="mb-3 text-sm leading-6 text-gray-200">{project.description}</p>
                <div className="flex flex-wrap items-center mt-2 text-xs gap-x-2">
                  {project.techStack.map((tech, techIdx) => (
                    <p key={techIdx} className="relative z-10 rounded-full bg-green-500 px-3 py-1.5 font-medium text-black cursor-default mb-2">
                      {tech}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
