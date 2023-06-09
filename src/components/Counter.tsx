import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CountProps {
  num: number;
}
export default function Counter({ num }: CountProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, num, { duration: 1.5 });

    return animation.stop;
  });

  return (
    <>
      <motion.div className="text-5xl font-bold amber_light counter">
        {rounded}
      </motion.div>
    </>
  );
}
