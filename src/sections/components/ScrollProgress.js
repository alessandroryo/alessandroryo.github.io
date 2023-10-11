import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

export default function ScrollProgress() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.a href="#" className="fixed z-50 cursor-pointer bottom-10 right-10" initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ duration: 0.3 }}>
      <svg className="h-14 w-14" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" className="text-gray-200 stroke-current" strokeWidth="10" fill="none" />
        <motion.circle cx="50" cy="50" r="45" className="text-green-500 stroke-current" strokeWidth="10" strokeLinecap="round" fill="none" style={{ pathLength: scrollYProgress }} />
      </svg>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <ArrowSmallUpIcon className="w-5 h-5 text-green-500" />
      </div>
    </motion.a>
  );
}
