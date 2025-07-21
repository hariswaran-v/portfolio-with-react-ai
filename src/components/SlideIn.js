// src/components/SlideIn.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideIn = ({ children, direction = "up", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animate again on scroll
    threshold: 0.2,
  });

  const getOffset = (dir) => {
    switch (dir) {
      case "up":
        return { x: 0, y: 40 };
      case "down":
        return { x: 0, y: -40 };
      case "left":
        return { x: 40, y: 0 };
      case "right":
        return { x: -40, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset(direction);

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
