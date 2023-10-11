import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import Polaroid from "./components/Polaroid";

const education = [
  {
    school: { name: "SMP Santa Angela", href: "https://smp.santa-angela.sch.id/" },
    imageUrl: "/img/education/serviam.png",
    major: null,
    date: "2015 - 2018",
  },
  {
    school: { name: "SMA Santa Angela", href: "https://smasta.santa-angela.sch.id/" },
    imageUrl: "/img/education/serviam.png",
    major: "Natural Sciences",
    date: "2018 - 2021",
  },
  {
    school: { name: "HZ University of Applied Sciences", href: "https://hz.nl/en" },
    imageUrl: "/img/education/hz.png",
    major: "Hoger beroepsonderwijs - ICT",
    date: "2021 - Present",
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div className="flex flex-col items-center justify-start min-h-screen gap-12 py-32">
        <div className="flex flex-col w-2/3">
          <div className="flex flex-col items-start gap-2">
            <motion.div className="flex items-center justify-start gap-2" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="w-20 h-px border border-green-500 dark:border-green-400"></div>
              <h3 className="text-xs font-medium tracking-widest text-green-500 uppercase dark:text-green-400">EDUCATIONAL JOURNEY</h3>
            </motion.div>
            <motion.p initial={{ opacity: 0, x: -100 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.7, duration: 0.7 }} className="text-6xl font-black tracking-wide text-black font-dm dark:text-white">
              Learning and Discovery.
            </motion.p>
          </div>
        </div>
        <div className="flow-root w-2/3">
          <ul className="-mb-8">
            {education.map((educationItem, educationItemIdx) => (
              <motion.li key={educationItemIdx} initial={{ y: 50, opacity: 0 }} animate={isVisible ? { y: 0, opacity: 1 } : {}} transition={{ delay: 1.4 + 0.3 * educationItemIdx, duration: 1 }}>
                <div className="relative pb-12">
                  {educationItemIdx !== education.length - 1 ? <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" /> : null}
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <img className="relative flex items-center justify-center w-10 h-10" src={educationItem.imageUrl} alt={educationItem.school.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="">
                        <a href={educationItem.school.href} className="text-xl text-black dark:text-white">
                          {educationItem.major ? (
                            <>
                              {educationItem.major} • {educationItem.school.name}
                            </>
                          ) : (
                            <>{educationItem.school.name}</>
                          )}
                        </a>
                        <p className="mt-2 text-sm font-medium text-green-600">({educationItem.date})</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <Polaroid/>
        </div>
      </div>
    </ScrollTrigger>
  );
}
