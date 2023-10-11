import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";

const experience = [
  {
    school: { name: "SMA Santa Angela", href: "#" },
    activity: "Member of the Student Council Information and Communication Technology Division",
    imageUrl: "/img/education/serviam.png",
    date: "July 2018 - June 2019",
  },
  {
    school: { name: "SMA Santa Angela", href: "#" },
    activity: "Inventorum Art Appreciation Assistant Head of Design",
    imageUrl: "/img/education/serviam.png",
    date: "October 2019 - January 2020",
  },
  {
    school: { name: "SMA Santa Angela", href: "#" },
    activity: "Head of the Student Council Information and Communication Technology Division",
    imageUrl: "/img/education/serviam.png",
    date: "July 2019 - December 2020",
  },
  {
    school: { name: "SMA Santa Angela", href: "#" },
    activity: "E-Sport Competition Organizer Volunteer",
    imageUrl: "/img/education/serviam.png",
    date: "January 2021",
  },
  {
    school: { name: "HZ University of Applied Sciences", href: "#" },
    activity: "HBO-ICT Student Assistant",
    imageUrl: "/img/education/hz.png",
    date: "September 2022 - July 2023",
  },
  {
    school: { name: "PT DCI Indonesia Tbk", href: "#" },
    activity: "Data Science Internship",
    imageUrl: "/img/experiences/dcii.png",
    date: "September 2023 - December 2023",
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div className="flex flex-col items-center justify-start min-h-screen gap-12 py-32 ">
        <div className="flex flex-col w-2/3">
          <div className="flex flex-col items-start gap-2">
            <motion.div
              className="flex items-center justify-start gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}>
              <div className="w-20 h-px border border-green-500 dark:border-green-400"></div>
              <h3 className="text-xs font-medium tracking-widest text-green-500 uppercase">EXPERIENCES</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-6xl font-black tracking-wide text-black font-dm dark:text-white">
              One Experience at a Time.
            </motion.p>
          </div>
        </div>
        <div className="flow-root w-2/3">
          <ul className="-mb-8">
            {experience.map((experienceItem, experienceItemIdx) => (
              <motion.li
                key={experienceItemIdx}
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.4 + 0.3 * experienceItemIdx, duration: 1 }}>
                <div className="relative pb-12">
                  {experienceItemIdx !== experience.length - 1 ? <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" /> : null}
                  <div className="relative flex items-start space-x-3">
                  <img className="relative flex items-center justify-center w-10 h-10 " src={experienceItem.imageUrl} alt={experienceItem.school.name} />
                    <div className="flex-1 min-w-0">
                      <div>
                        <a
                          href={experienceItem.school.href}
                          className="text-xl text-black dark:text-white">
                          {experienceItem.activity} • {experienceItem.school.name}
                        </a>
                        <p className="mt-2 text-sm font-medium text-green-600 ">({experienceItem.date})</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollTrigger>
  );

}
