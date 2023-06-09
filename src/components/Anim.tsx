import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


interface Props {
  children: JSX.Element;
  width?: "w-fit" | "100%";
}
const Anim = ({ children, width = "w-fit" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className={`reletive overflow-hidden ${width}`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.div>
    
    </div>
  );
};

export default Anim;
