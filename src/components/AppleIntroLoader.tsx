import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { CLINIC_INFO } from '../types';

interface AppleIntroLoaderProps {
  onComplete: () => void;
}

export function AppleIntroLoader({ onComplete }: AppleIntroLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<number>(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsDone(true);
      onComplete();
      return;
    }

    // Step 1: Black screen + small glowing blue light appears (0ms - 600ms)
    // Step 2: Clinic logo/name fades in (600ms - 1300ms)
    // Step 3: Aperture opens and reveals main hero (1600ms - 2200ms)
    const t1 = setTimeout(() => setPhase(2), 600);
    const t2 = setTimeout(() => setPhase(3), 1400);
    const t3 = setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [shouldReduceMotion, onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 3 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#02050e] flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Glowing blue singularity point */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: phase >= 2 ? [1, 1.4, 1.1] : 1,
            opacity: [0, 1, 0.8],
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_50px_15px_#22d3ee] mb-6"
        />

        {/* Clinic Name & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: phase >= 2 ? 1 : 0,
            y: phase >= 2 ? 0 : 15,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-4"
        >
          <div className="font-tech text-xs tracking-[0.3em] text-cyan-400 font-bold uppercase mb-2">
            ADVANCED DENTAL CARE • SAMBHAL
          </div>
          <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-widest uppercase">
            {CLINIC_INFO.name}
          </h2>
          <div className="font-tech text-xs text-slate-400 tracking-wider mt-1">
            CBCT • OPG • X-RAY • IMPLANTS
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
