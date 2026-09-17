import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CLINIC_INFO } from '../types';
import { ASSETS } from '../data/clinicData';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Activity, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    CLINIC_INFO.whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Neon Pill Label */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ADVANCED DENTAL CARE • SAMBHAL</span>
            </motion.div>

            {/* Clinic Name Overline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-tech text-xs sm:text-sm tracking-[0.25em] text-slate-400 uppercase font-semibold mb-2"
            >
              {CLINIC_INFO.name}
            </motion.div>

            {/* Main Heading - Apple Precision + Futuristic Gaming Typography */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-4xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6 uppercase"
            >
              YOUR SMILE.
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                ENGINEERED WITH PRECISION.
              </span>
            </motion.h1>

            {/* Supporting Subtext */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl mb-8"
            >
              Modern dentistry powered by advanced technology and personalized care.
              Featuring in-house CBCT 3D imaging, computer-guided dental implants, and micro-endodontics in Chaman Sarai, Sambhal.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenBooking}
                id="hero-book-appointment-btn"
                className="relative group px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 text-slate-950 font-display font-black text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="px-7 py-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-300 hover:text-emerald-200 font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP US</span>
              </a>
            </motion.div>

            {/* Quick Trust Highlights */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-tech font-semibold tracking-wider uppercase"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>In-House CBCT 3D Scan</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Digital Implant Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Sterile Class-B Protocols</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Futuristic Dental Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Circular UI Rings */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[340px] sm:w-[440px] md:w-[480px] aspect-square flex items-center justify-center"
            >
              {/* Outer Cyan Orbit Ring with Dashes */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-[spin_60s_linear_infinite]" />

              {/* Middle Rotating Tech Ring */}
              <div className="absolute inset-5 rounded-full border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)]" />
              
              {/* Inner Glow Aura */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />

              {/* Main 3D Dental Holographic Visual Container */}
              <motion.div
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.94 }}
                animate={isLoaded ? { scale: 1 } : {}}
                transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[84%] aspect-square rounded-3xl overflow-hidden border border-cyan-400/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#070e24] group"
              >
                <img
                  src={ASSETS.heroDental}
                  alt="Raza Multispeciality Dental Clinic 3D precision technology render"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Ambient Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Interactive Diagnostic Readout Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <div>
                      <div className="font-tech font-bold tracking-wider text-white">CBCT 3D RECONSTRUCTION</div>
                      <div className="text-[10px] text-cyan-400 font-mono">0.075mm VOXEL ACCURACY</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-[10px] tracking-wider">
                    CALIBRATED
                  </div>
                </div>
              </motion.div>

              {/* Floating Technical UI Telemetry Chips */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 px-3.5 py-2 rounded-xl bg-[#09142e]/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-20 hidden sm:flex items-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-tech font-bold text-xs tracking-wider text-slate-200">
                  DIGITAL ORTHOPANTOMOGRAM
                </span>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [6, -6, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-3 px-3.5 py-2 rounded-xl bg-[#09142e]/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-20 hidden sm:flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-tech font-bold text-xs tracking-wider text-slate-200">
                  3D IMPLANT SIMULATION
                </span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
