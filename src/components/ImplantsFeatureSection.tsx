import { useState } from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/clinicData';
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, Disc3, Layers } from 'lucide-react';

interface ImplantsFeatureSectionProps {
  onExploreImplant: () => void;
}

export function ImplantsFeatureSection({ onExploreImplant }: ImplantsFeatureSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const implantStages = [
    {
      step: '01',
      title: 'CBCT 3D Bone Density Analysis',
      desc: 'Sub-millimeter volumetric mapping of alveolar bone height, width, and nerve channels to calculate ideal implant angulation.',
      badge: 'PRE-SURGICAL MAPPING',
    },
    {
      step: '02',
      title: 'Precision Guided Placement',
      desc: 'Atraumatic surgical insertion of medical-grade titanium or zirconia fixture ensuring optimal primary mechanical stability.',
      badge: 'SURGICAL PRECISION',
    },
    {
      step: '03',
      title: 'Biological Osseointegration',
      desc: 'Micro-textured hydrophilic surface chemistry promotes direct cellular bone bonding over the maturation window.',
      badge: 'CELLULAR ADHESION',
    },
    {
      step: '04',
      title: 'Custom Zirconia Crown Restoration',
      desc: 'CAD/CAM milled biocompatible crown shade-matched to adjacent dentition, restoring 100% natural bite force and smile aesthetics.',
      badge: 'FINAL RESTORATION',
    },
  ];

  return (
    <section id="implants" className="relative py-24 md:py-36 overflow-hidden bg-[#040919] border-t border-cyan-500/20">
      {/* Ambient background light streaks */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[300px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
            FEATURED SPECIALITY PROTOCOL
          </span>
        </div>

        {/* Section Heading & Subheading */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-4"
          >
            A NEW LEVEL OF
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              CONFIDENCE.
            </span>
          </motion.h2>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            Advanced implant-focused dental care designed around precision and comfort.
            Engineered to replicate the root-to-crown architecture of natural human teeth.
          </p>
        </div>

        {/* Big Cinematic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Cinematic Visual with Technical HUD Overlays */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden border border-cyan-400/40 bg-[#070e24] shadow-[0_0_45px_rgba(6,182,212,0.25)] group"
            >
              <img
                src={ASSETS.implant}
                alt="Precision dental implant architecture"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Ambient scanlines */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040919] via-transparent to-transparent opacity-70" />

              {/* HUD Micro-Overlays */}
              <div className="absolute top-5 left-5 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-xs font-tech">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">BIO-COMPATIBILITY</div>
                <div className="text-cyan-300 font-bold tracking-wider">GRADE 4 TITANIUM / ZIRCONIA</div>
              </div>

              <div className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-xs font-tech">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">TOLERANCE RATIO</div>
                <div className="text-cyan-300 font-bold tracking-wider">&lt; 15 MICRONS FIT</div>
              </div>

              {/* Bottom Interactive Spec Pill */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#060e22]/90 backdrop-blur-md border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      CBCT-GUIDED TRAJECTORY
                    </div>
                    <div className="font-tech text-xs text-slate-400">
                      Zero-guesswork anatomical safety zone
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-tech text-xs font-bold text-emerald-300 uppercase tracking-widest">
                    Permanent Anchor
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Roadmap & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-tech text-xs tracking-widest text-slate-400 uppercase font-bold mb-2">
                FOUR-PHASE CLINICAL WORKFLOW:
              </div>

              {implantStages.map((stage, idx) => (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeStep === idx
                      ? 'bg-cyan-950/30 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                      : 'bg-[#071129]/40 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-black text-xs text-cyan-400 tracking-wider">
                      STAGE {stage.step}
                    </span>
                    <span className="font-tech text-[10px] font-bold text-slate-400 tracking-wider uppercase px-2 py-0.5 rounded bg-white/5">
                      {stage.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide mb-1">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Explore Implant CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreImplant}
                id="explore-implant-care-btn"
                className="group px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-display font-black text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center gap-3 transition-all"
              >
                <span>EXPLORE IMPLANT CARE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="text-xs font-tech text-slate-400 flex items-center gap-2 justify-center">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Individual anatomical assessment</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
