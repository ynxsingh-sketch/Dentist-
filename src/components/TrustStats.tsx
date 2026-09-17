import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, MessageSquare, Award, CheckCircle2 } from 'lucide-react';

function Counter({ end, duration = 1.6, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutExpo = (x: number): number => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
      const current = easeOutExpo(progress) * end;

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export function TrustStats() {
  return (
    <section className="relative py-12 md:py-20 z-10 border-y border-cyan-500/20 bg-[#050b1a]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 5.0★ Patient Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 rounded-2xl bg-[#081226]/80 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
                VERIFIED SATISFACTION
              </span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-1 font-display font-black text-4xl sm:text-5xl text-white group-hover:text-cyan-300 transition-colors">
              <Counter end={5.0} decimals={1} />
              <span className="text-amber-400 text-3xl">★</span>
            </div>

            <div className="mt-2 font-display text-sm font-bold text-slate-200 tracking-wider">
              PATIENT RATING
            </div>
            <div className="text-xs text-slate-400 font-tech mt-1">
              Consistently rated 5-stars on Google
            </div>
          </motion.div>

          {/* Card 2: 86+ Google Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-6 rounded-2xl bg-[#081226]/80 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
                COMMUNITY REPUTATION
              </span>
              <MessageSquare className="w-4 h-4 text-cyan-400" />
            </div>

            <div className="flex items-baseline gap-1 font-display font-black text-4xl sm:text-5xl text-white group-hover:text-cyan-300 transition-colors">
              <Counter end={86} />
              <span className="text-cyan-400">+</span>
            </div>

            <div className="mt-2 font-display text-sm font-bold text-slate-200 tracking-wider">
              GOOGLE REVIEWS
            </div>
            <div className="text-xs text-slate-400 font-tech mt-1">
              Real feedback from Sambhal patients
            </div>
          </motion.div>

          {/* Card 3: ADVANCED Dental Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 rounded-2xl bg-[#081226]/80 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
                DIAGNOSTIC EXCELLENCE
              </span>
              <Award className="w-4 h-4 text-cyan-400" />
            </div>

            <div className="font-display font-black text-3xl sm:text-4xl text-cyan-300 group-hover:text-cyan-200 transition-colors">
              ADVANCED
            </div>

            <div className="mt-2 font-display text-sm font-bold text-slate-200 tracking-wider">
              DENTAL TECHNOLOGY
            </div>
            <div className="text-xs text-slate-400 font-tech mt-1">
              In-house CBCT 3D X-Ray & OPG Scan
            </div>
          </motion.div>

          {/* Card 4: MULTISPECIALITY Dental Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-6 rounded-2xl bg-[#081226]/80 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
                COMPREHENSIVE PRACTICE
              </span>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            </div>

            <div className="font-display font-black text-2xl sm:text-3xl text-cyan-300 group-hover:text-cyan-200 transition-colors">
              MULTISPECIALITY
            </div>

            <div className="mt-2 font-display text-sm font-bold text-slate-200 tracking-wider">
              DENTAL CARE
            </div>
            <div className="text-xs text-slate-400 font-tech mt-1">
              Implants, RCT, Surgery & Prosthetics
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
