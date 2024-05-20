'use client';
import { motion, useScroll } from 'framer-motion';

function Progressbar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className={`sticky top-0 origin-left bg-gray-500 h-2`}
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default Progressbar;
