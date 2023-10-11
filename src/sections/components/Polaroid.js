import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

export default function Polaroid() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalName, setModalName] = useState("");

  const images = [
    { src: "/img/education/santa-angela.jpg", name: "SMA Santa Angela Bandung" },
    { src: "/img/education/hz-university.jpg", name: "HZ University of Applied Sciences" },
    { src: "/img/experiences/dcii-building.jpg", name: "DCI Indonesia" },
  ];

  const styles = [
    {
      rotate: "-20deg",
      zIndex: 1,
    },
    {
      rotate: "0deg",
      zIndex: 2,
      marginLeft: "-15%",
    },
    {
      rotate: "30deg",
      zIndex: 3,
      marginLeft: "-10%",
    },
  ];

  const openModal = (image, name) => {
    setModalImage(image);
    setModalName(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
    setModalName("");
  };

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <>
      <ScrollTrigger onEnter={onEnterViewport}>
        <div className="flex justify-center mt-20">
          {images.map((image, idx) => (
            <motion.div
            key={idx}
            initial={{ y: isVisible ? 100 : 0, opacity: isVisible ? 0 : 1 }}
            animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative w-64 p-4 mx-2 bg-white shadow-xl"
            style={styles[idx]}
            whileTap={{ scale: 1.05 }}
            onClick={() => {
              openModal(image.src, image.name);
            }}
          >
            <img className="object-cover object-top border-4 border-white cursor-pointer w-60 h-60 aspect-square" src={image.src} alt={image.name} />
            <div className="pt-4 font-semibold text-center text-black">
              {image.name}
            </div>
          </motion.div>
          ))}
        </div>
      </ScrollTrigger>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50" onClick={closeModal}>
            <motion.div className="relative w-auto p-6 bg-white shadow-2xl" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 0.3 }}>
              <img className="object-cover object-top border-4 border-white w-96 h-96" src={modalImage} alt="Expanded" />
              <div className="pt-4 font-semibold text-center text-black">{modalName}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
