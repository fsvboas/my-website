"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animationDuration?: number;
}

const FadeInStagger = ({
  children,
  className,
  staggerDelay = 0.2,
  animationDuration = 0.8,
}: FadeInStaggerProps) => {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={fadeInUp}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeInStagger;
