import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  index?:number;
}
const Reveal = ({ children, index=1}: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainCantrols = useAnimation();

  useEffect(()=>{
    mainCantrols.start('visible')
  },[isInView])
  return (
    <div >
      <motion.div
      ref={ref}
         style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.3}s`,
        }}
        initial="hidden"
        animate={mainCantrols}
        transition={{ duration: 0.5, delay: 0.5,ease:'linear' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
