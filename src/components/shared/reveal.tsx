import { motion, useInView, useAnimate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='relative overflow-hidden w-full'>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 75 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
