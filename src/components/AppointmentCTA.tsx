import { CLINIC_INFO } from '../types';
import { Calendar, MessageCircle, Phone, ArrowRight, Clock, MapPin } from 'lucide-react';

interface AppointmentCTAProps {
  onOpenBooking: () => void;
}

export function AppointmentCTA({ onOpenBooking }: AppointmentCTAProps) {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    CLINIC_INFO.whatsappMessage
  )}`;

  return (
    <section id="appointment-cta" className="relative py-24 md:py-36 overflow-hidden bg-[#030713] border-t border-cyan-500/20">
      {/* Animated Blue/Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-blue-600/15 blur-[160px] rounded-full pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Neon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>INSTANT APPOINTMENT CONFIRMATION</span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-6">
          READY TO TAKE CARE
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
            OF YOUR SMILE?
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Book your appointment with Raza Multispeciality Dental Clinic.
          Experience painless diagnostics, digital radiographic imaging, and specialized dental care in Sambhal.
        </p>

        {/* Big Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            type="button"
            onClick={onOpenBooking}
            id="cta-book-appointment-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 text-slate-950 font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK APPOINTMENT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-now-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-emerald-500/50 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 hover:text-emerald-200 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:border-emerald-400 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP NOW</span>
          </a>
        </div>

        {/* Clinic Quick Indicators */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-tech text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Direct Line: +91 8881114717</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Open Mon - Sun: 9:30 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Chaman Sarai, Sambhal (UP)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
