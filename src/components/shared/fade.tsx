'use client'
import { motion, useInView, useAnimate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function Fade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='relative overflow-hidden w-full'>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Fade;
