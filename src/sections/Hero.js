import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const greetings = ["Selamat datang", "Welcome", "Welkom", "いらっしゃいませ"];
  const [showLogo, setShowLogo] = useState(false);
  const [lastGreetingShown, setLastGreetingShown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);
  const controls = useAnimation();

  const handleTimeouts = () => {
    if (currentGreetingIndex < greetings.length - 1) {
      setTimeout(() => setCurrentGreetingIndex(currentGreetingIndex + 1), 1000);
    } else if (!lastGreetingShown) {
      setLastGreetingShown(true);
      setTimeout(() => setShowLogo(true), 1000);
    } else if (showLogo) {
      setTimeout(() => {
        setShowLogo(false);
        setShowSplash(false);
        setShowContent(true);
      }, 1000);
    }
  };

  useEffect(handleTimeouts, [currentGreetingIndex, showLogo, lastGreetingShown, greetings.length]);

  useEffect(() => {
    const toggleOverflow = () => {
      document.body.style.overflow = showSplash ? "hidden" : "visible";
    };
    toggleOverflow();
  }, [showSplash]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <AnimatePresence>
      {showSplash ? (
        <motion.div key={showLogo ? "logo" : "greeting"} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          {showLogo ? (
            <motion.img src="/img/others/logo.png" alt="Personal Logo" initial="hidden" animate="visible" exit="exit" variants={splashScreenAnimations.logoFadeIn} className="w-24 h-24" />
          ) : (
            <motion.h1 className="text-4xl text-white" initial="initial" animate="initial" exit="exit" variants={splashScreenAnimations.splashScreenAnimation}>
              {greetings[currentGreetingIndex]}
            </motion.h1>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  const splashScreenAnimations = {
    splashScreenAnimation: {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
    },
    logoFadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
      exit: { opacity: 0, transition: { duration: 0.5 } },
    },
  };

  const contentAnimations = {
    entrance: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    floatIn: {
      hidden: { opacity: 0, y: 100 },
      visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.3 + 2, duration: 0.5 },
      }),
    },
    slideFromRight: {
      hidden: { x: "100%" },
      visible: { x: 0, transition: { duration: 1, delay: 1 } },
    },
  };

  const parallaxTranslate = {
    y: scrollY * 0.5,
  };

  const handleHoverStart = () => {
    controls.start({ width: "100%" });
  };

  const handleHoverEnd = () => {
    controls.start({ width: "0%" });
  };

  return (
    <div className="relative min-h-screen">
      {renderContent()}
      <section id="hero" className={`max-h-screen z-10`}>
        <AnimatePresence>
          {showContent && (
            <motion.div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8" initial="initial" animate="animate" variants={contentAnimations.entrance}>
              <motion.div className="px-6 pt-2 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-72 xl:col-span-6" initial="hidden" animate="visible">
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <motion.div className="mt-0 sm:mt-32 sm:flex lg:mt-16" variants={contentAnimations.floatIn} custom={1}>
                    <div className="relative ">
                      <motion.div initial={{ width: "0%" }} animate={controls} transition={{ duration: 0.5 }} className="absolute inset-y-0 left-0 z-0 rounded-full bg-gray-50" />
                      <p className="relative z-10 px-3 py-1 text-sm leading-6 text-gray-500 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
                        "No matter how hard you try, you will get what's meant for you."
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="h-32 mt-6 sm:mt-4" variants={contentAnimations.floatIn} custom={2}>
                    <TypeAnimation
                      cursor={true}
                      sequence={["", 3100, "Alessandro Javva Ananda Satriyo", 3000, "Ryo", 3000]}
                      wrapper="h1"
                      repeat={Infinity}
                      speed={10}
                      className="text-4xl font-bold tracking-wide text-gray-900 lg:text-6xl font-dm"
                    />
                  </motion.div>
                  <motion.p className="mt-4 text-base leading-8 w-fit" variants={contentAnimations.floatIn} custom={3}>
                    <span className="text-base font-semibold text-center text-slate-900">
                      <span className="relative inline-block p-2 before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-green-200">
                        <span className="relative text-green-600">Student | Developer</span>
                      </span>
                    </span>
                  </motion.p>

                  <motion.p className="mt-6 text-base leading-8 text-gray-600" variants={contentAnimations.floatIn} custom={4}>
                    Hi there! I'm Ryo, a passionate student and developer dedicated to creating innovative solutions and expanding my knowledge in the tech world.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div className="relative -z-10 base:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0" variants={contentAnimations.floatIn} custom={6} ref={parallaxRef}>
                {window.innerWidth >= 1024 ? (
                  <motion.video
                    className="aspect-[3/2] w-full cursor-default object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    autoPlay
                    loop
                    muted
                    alt="Alessandro Ryo's"
                    initial="hidden"
                    animate={showContent ? "visible" : "hidden"}
                    variants={contentAnimations.slideFromRight}
                    style={parallaxTranslate}
                  >
                    <source src="/video/Ryo.mp4" type="video/mp4" />
                  </motion.video>
                ) : (
                  <motion.video
                    className="aspect-[3/2] w-full cursor-default object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    autoPlay
                    loop
                    muted
                    alt="Alessandro Ryo's"
                    initial="hidden"
                    animate={showContent ? "visible" : "hidden"}
                    variants={contentAnimations.slideFromRight}
                  >
                    <source src="/video/Ryo.mp4" type="video/mp4" />
                  </motion.video>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
