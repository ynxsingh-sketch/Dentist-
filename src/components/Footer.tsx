import { CLINIC_INFO } from '../types';
import { Sparkles, ArrowUp, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050f] border-t border-cyan-500/20 pt-16 pb-28 md:pb-16 overflow-hidden">
      {/* Animated Subtle Neon Top Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">
                {CLINIC_INFO.shortName}
              </span>
            </div>

            <p className="text-sm font-tech text-cyan-400 font-bold uppercase tracking-widest">
              Advanced Dental Care in Sambhal
            </p>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md">
              Specialized dental center providing digital CBCT 3D X-ray, computer-guided dental implants, painless rotary root canals, and restorative prosthodontics in Chaman Sarai, Sambhal.
            </p>

            <div className="text-xs font-tech text-slate-400 space-y-1 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Opposite Hind Inter College, Chaman Sarai, Sambhal (UP) 244302</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Direct Helpline: +91 8881114717</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase mb-4">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs font-tech font-semibold tracking-wider uppercase text-slate-300">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-cyan-300 transition-colors">
                  Technology & CBCT
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  Dental Care Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-300 transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top & Statutory */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/30 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 font-tech text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 md:mt-0 text-left md:text-right">
              <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400">
                SYSTEM VER: 2026.4
              </span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400">
            CBCT • OPG • X-RAY • ADVANCED DENTAL CARE • SAMBHAL, UTTAR PRADESH
          </div>
        </div>

      </div>
    </footer>
  );
}
