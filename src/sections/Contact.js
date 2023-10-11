import { motion } from "framer-motion";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <section className="py-24 bg-white dark:bg-gray-900 sm:py-32" id="contact">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto space-y-16 divide-y divide-gray-100 dark:divide-gray-800 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <motion.div variants={textVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{ duration: 0.5 }} className="flex items-center justify-start gap-2">
                  <div className="w-20 h-px border border-green-500 dark:border-green-400"></div>
                  <h3 className="text-xs font-medium tracking-widest text-green-500 uppercase dark:text-green-400">Contact</h3>
                </motion.div>
                <motion.p variants={textVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{ duration: 0.5, delay: 0.2 }} className="mt-2 text-6xl font-black tracking-wide text-black dark:text-white font-dm">
                  Get in Touch.
                </motion.p>

                <motion.p variants={textVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{ duration: 0.5, delay: 0.4 }} className="mt-4 leading-7 text-gray-900 dark:text-gray-300">
                  Interested in collaborating or just want to say hi? Reach out via email, Instagram, GitHub, or LinkedIn. Let's connect!
                </motion.p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <motion.div
                  variant={fadeIn}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.2 * 1 }}
                  className="p-10 duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl"
                >
                  <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Email</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6">
                    <div>
                      <dd>
                        <a className="font-semibold text-green-500 hover:underline dark:text-green-400" href="mailto:alessandroryo@gmail.com">
                          alessandroryo@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </motion.div>

                <motion.div
                  variant={fadeIn}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.2 * 2 }}
                  className="p-10 duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl"
                >
                  <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Instagram</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6">
                    <div>
                      <dd>
                        <a className="font-semibold text-[#4CAF50] hover:underline dark:text-green-400" href="https://www.instagram.com/alessandroryo">
                          @alessandroryo
                        </a>
                      </dd>
                    </div>
                  </dl>
                </motion.div>

                <motion.div
                  variant={fadeIn}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.2 * 3 }}
                  className="p-10 duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl"
                >
                  <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">GitHub</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6">
                    <div>
                      <dd>
                        <a className="font-semibold text-[#4CAF50] hover:underline dark:text-green-400" href="https://github.com/alessandroryo">
                          alessandroryo
                        </a>
                      </dd>
                    </div>
                  </dl>
                </motion.div>

                <motion.div
                  variant={fadeIn}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.2 * 4 }}
                  className="p-10 duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl"
                >
                  <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">LinkedIn</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6">
                    <div>
                      <dd>
                        <a className="font-semibold text-[#4CAF50] hover:underline dark:text-green-400" href="https://www.linkedin.com/in/alessandro-javva-ananda-satriyo-877aa5173/">
                          Alessandro Javva Ananda Satriyo
                        </a>
                      </dd>
                    </div>
                  </dl>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
