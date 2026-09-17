import { useState } from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/clinicData';
import { Scan, Eye, Activity, Crosshair, ChevronRight, Layers, Cpu, ShieldAlert } from 'lucide-react';

export function TechnologySection() {
  const [activeMode, setActiveMode] = useState<'3d' | 'panoramic' | 'slice'>('3d');

  const techCards = [
    {
      id: 'cbct',
      code: 'TECH-01',
      title: 'CBCT 3D Volumetric Scanner',
      category: 'In-House Cone Beam CT',
      desc: 'Generates distortion-free 3D digital replicas of dental arches, maxillary sinuses, and sub-mandibular nerve paths in under 15 seconds with ultra-low radiation.',
      highlight: '0.075 mm Voxel Fidelity',
      specs: ['Low Dose Pulsed Radiation', 'Field of View: 12x10 cm', 'Instant Axial / Sagittal Slices'],
    },
    {
      id: 'opg',
      code: 'TECH-02',
      title: 'Digital OPG (Orthopantomogram)',
      category: 'Panoramic Radiography',
      desc: 'Continuous panoramic view of the entire upper and lower jaw, dentition, TM joints, and impacted third molars on a single high-contrast digital radiograph.',
      highlight: 'Single-Pass Panoramic Scan',
      specs: ['Full Dentition Overview', 'TMJ Functional Assessment', 'Instant Chairside Sync'],
    },
    {
      id: 'apex',
      code: 'TECH-03',
      title: 'Precision Digital Apex Locator',
      category: 'Endodontic Micro-Diagnostics',
      desc: 'Multifrequency acoustic impedance measurement determining the exact apical constriction of the tooth root, ensuring zero over-instrumentation.',
      highlight: '98.5% Apical Precision',
      specs: ['Micro-Electrolyte Calibration', 'Real-time Sound / Visual Alert', 'Painless Preservative RCT'],
    },
    {
      id: 'autoclave',
      code: 'TECH-04',
      title: 'Class-B Vacuum Autoclave',
      category: 'Hospital-Grade Sterilization',
      desc: 'Triple fractional pre-vacuum pressure cycles eradicating all microbial life, spores, and viruses from hollow dental handpieces and surgical instruments.',
      highlight: 'Zero Cross-Contamination Standard',
      specs: ['Continuous Thermal Logging', 'Individual Steri-Pouches', 'Medical Biosecurity Standard'],
    },
  ];

  return (
    <section id="technology" className="relative py-24 md:py-36 overflow-hidden bg-[#030816]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ADVANCED DIAGNOSTIC IMAGING SUITE</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-4"
          >
            SEE MORE.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              DIAGNOSE WITH PRECISION.
            </span>
          </motion.h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Eliminating guesswork in dental medicine. Our in-house CBCT and digital OPG infrastructure brings medical hospital-tier radiologic analysis directly to patients in Sambhal.
          </p>
        </div>

        {/* Big CBCT / OPG Hero Interactive Visual */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-400/40 bg-[#060e22] shadow-[0_0_50px_rgba(6,182,212,0.25)] mb-16 p-4 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screen with Floating Animated HUD Labels */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#02050f] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
              <img
                src={ASSETS.cbct}
                alt="CBCT 3D Volumetric Digital Imaging Screen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Scanline Grid Effect */}
              <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

              {/* Floating Technical UI Labels with Subtle Floating Animation */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/50 text-cyan-300 font-display font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                CBCT
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/50 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                3D IMAGING
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/50 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                PRECISION
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/50 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                DIGITAL DIAGNOSTICS
              </motion.div>

              {/* Center Crosshair Target Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <Crosshair className="w-16 h-16 text-cyan-400 stroke-[1]" />
              </div>

              {/* Active Scanner Line Sweeping */}
              <motion.div
                animate={{ y: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_15px_#22d3ee] pointer-events-none opacity-80"
              />
            </div>

            {/* Diagnostic Control Console */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Scan className="w-4 h-4 text-cyan-400" />
                  <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
                    IN-HOUSE RADIOLOGY
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-white uppercase mb-3">
                  CBCT & OPG 3D RADIOGRAPHY
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  Traditional 2D dental X-rays flatten complex 3-dimensional anatomy. Our high-resolution 3D Cone Beam CT provides accurate 1:1 volumetric depth rendering without distortion.
                </p>

                {/* Mode Selector Tabs */}
                <div className="space-y-2">
                  <div className="font-tech text-xs text-slate-400 font-semibold tracking-wider uppercase mb-2">
                    SELECT DIAGNOSTIC RECONSTRUCTION:
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveMode('3d')}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      activeMode === '3d'
                        ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="font-tech font-bold text-xs tracking-wider">
                        3D BONE & NERVE RECONSTRUCTION
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400">ACTIVE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMode('panoramic')}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      activeMode === 'panoramic'
                        ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span className="font-tech font-bold text-xs tracking-wider">
                        FULL DENTITION OPG PANORAMIC
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400">VIEW</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMode('slice')}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      activeMode === 'slice'
                        ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="font-tech font-bold text-xs tracking-wider">
                        MULTI-PLANAR SLICE (AXIAL / CORONAL)
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400">SLICE</span>
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-tech text-slate-400">
                <span className="text-cyan-400 font-bold">ACCESSIBILITY: </span>
                Available on-site at Chaman Sarai, Sambhal. No need to visit diagnostic centers in Moradabad or Aligarh.
              </div>
            </div>

          </div>

        </div>

        {/* Horizontal Scroll Interaction on Desktop */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="font-tech text-xs tracking-widest text-slate-400 font-bold uppercase">
              HARDWARE & DIAGNOSTIC CAPABILITY SUITE
            </div>
            <div className="text-xs text-cyan-400 font-tech hidden sm:flex items-center gap-1">
              <span>EXPLORE CLINICAL ARSENAL</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4">
            {techCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl p-6 bg-[#071129]/60 border border-cyan-500/20 hover:border-cyan-400/60 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-cyan-400 font-semibold">{card.code}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-tech font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      {card.highlight}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-lg text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide mb-1">
                    {card.title}
                  </h4>

                  <div className="font-tech text-xs text-cyan-400/80 uppercase font-semibold mb-3">
                    {card.category}
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  {card.specs.map((spec, sidx) => (
                    <div key={sidx} className="flex items-center gap-2 text-[11px] font-tech text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
