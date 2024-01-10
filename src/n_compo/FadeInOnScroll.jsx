import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInOnScroll = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const sectionElement = ref.current;
    const onScroll = () => {
      const topOffset = sectionElement.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (topOffset < scrollPosition) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
