import React from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";
import M_model from "./m_model";
import bg from "../bg_Landing.jpg" 
const variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 }, // Add scale for initial shrinking
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: { duration: 1.2, delay: 0.2, ease: "easeOut" }, // Adjust duration and easing
  },
  titleScale: {
    y: 0,
    scale: 1.1, // Add a slight bounce for the title
    transition: { duration: 0.4, delay: 0.8, ease: "easeOut" },
  },
  typeFade: { opacity: 1, transition: { duration: 0.8, delay: 1.2 } }, // Fade in the typed text
  buttonSlide: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 1.6 } }, // Slide in the button
};

function Hero() {
  return (
    <div className="text-white bg_all">
      {/* <img src={bg} alt="" /> */}
      <motion.div
        className="max-w-[800px] w-full h-screen mt-[-96px] mx-auto flex flex-column items-center justify-center"
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
      >
        <h1
          className="text-7xl font-bold tracking-tighter text-primary-500"
          variants={variants}
          initial="hidden"
          animate="titleScale"
        >
          TrustCure
        </h1>
        <p>
          <span className="text-4xl font-medium mb-4 text-[rgb(40,48,115)]">
            You Trust —
          </span>
          <span className="text-4xl font-medium mb-4 text-[rgb(40,48,115)] "> We Cure</span>
        </p>
        <span className="text-2xl font-semibold text-[rgb(40,48,115)]">We offer you</span>
        <Typed
          className="text-2xl font-semibold mb-6 text-[rgb(40,48,115)]"
          strings={[
            "Advance Booking",
            "Online Consultation",
            "Medical History",
            "Prescription",
            "Articles",
          ]}
          typeSpeed={120}
          backSpeed={90}
          loop
          variants={variants}
          initial="hidden"
          animate="typeFade"
        />

        <M_model />
      </motion.div>
    </div>
  );
}

export default Hero;
