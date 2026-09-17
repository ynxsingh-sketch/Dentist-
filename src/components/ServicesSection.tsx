import { useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import {
  Cpu,
  ShieldCheck,
  Scan,
  Zap,
  Sparkles,
  Layers,
  Grid,
  Activity,
  ArrowRight,
  CheckCircle,
  X,
  Calendar,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

const iconMap: Record<string, ReactNode> = {
  Cpu: <Cpu className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Scan: <Scan className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Grid: <Grid className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};

export function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>FULL-SPECTRUM CLINICAL EXPERTISE</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            PRECISION DENTISTRY.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              WITHOUT COMPROMISE.
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Every procedure at Raza Multispeciality Dental Clinic adheres to strict aseptic standards, digital planning, and biomimetic aesthetic principles.
          </p>
        </div>

        {/* 8 Futuristic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              onClick={() => setSelectedService(service)}
              className="group relative cursor-pointer rounded-2xl p-6 bg-[#081226]/60 border border-cyan-500/20 hover:border-cyan-400/70 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.3)] active:scale-[0.99]"
            >
              {/* Top Card Section: Icon & Tech Tag */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300">
                    {iconMap[service.iconName] || <Sparkles className="w-6 h-6" />}
                  </div>
                  <span className="font-tech text-[11px] font-semibold text-cyan-400/80 tracking-widest uppercase">
                    MOD-{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide mb-2">
                  {service.name}
                </h3>

                <div className="text-xs font-tech font-bold text-cyan-400/90 tracking-wider uppercase mb-3">
                  {service.tagline}
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Section: Neon Arrow & Technical Spec */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-tech text-slate-400 tracking-wider truncate max-w-[170px]">
                  {service.techSpec}
                </span>

                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 text-cyan-400 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Top Corner Neon Accent Light */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-cyan-400/25 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detailed Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
          <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#091530] border border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center">
                {iconMap[selectedService.iconName] || <Sparkles className="w-5 h-5" />}
              </div>
              <div>
                <span className="font-tech text-xs tracking-widest text-cyan-400 uppercase font-bold">
                  Clinical Protocol
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="font-tech text-xs text-slate-400 uppercase tracking-widest font-bold">
                CLINICAL HIGHLIGHTS & TECHNOLOGY:
              </div>
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 font-tech mb-6">
              <span className="font-bold">ENGINEERING SPEC: </span>
              {selectedService.techSpec}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const serviceName = selectedService.name;
                  setSelectedService(null);
                  onSelectServiceForBooking(serviceName);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-display font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" />
                BOOK FOR THIS SERVICE
              </button>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="py-3 px-4 rounded-xl border border-white/20 text-slate-300 text-xs font-tech font-bold hover:bg-white/5 transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
