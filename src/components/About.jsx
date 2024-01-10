// import React from 'react'

// import Layout from "./Layout"
import { motion } from "framer-motion";
const About = () => {
  document.title = "About Us";
  return (
    <div className="flex flex-row justify-center h-screen items-center">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "180deg" }}
        transition={{ duration: 1 }}
        style={{ height: "100px", width: "100px", backgroundColor: "blue" }}
      ></motion.div>
    </div>
  );
};

export default About;
