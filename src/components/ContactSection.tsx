import { CLINIC_INFO } from '../types';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    CLINIC_INFO.whatsappMessage
  )}`;

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-[#020612] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>LOCAL CLINIC ACCESS & DIRECTIONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-4">
            FIND OUR CLINIC IN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              SAMBHAL.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Centrally located in Chaman Sarai with direct road access, parking convenience, and prominent landmarks.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Card & Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Coordinates Card */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#071128]/80 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col justify-between">
            <div>
              <div className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide mb-6">
                {CLINIC_INFO.name}
              </div>

              <div className="space-y-6 text-sm font-sans">
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase mb-1">
                      CLINICAL LOCATION
                    </div>
                    <p className="text-slate-200 font-normal leading-relaxed">
                      Near Roadways Road, Opposite Hind Inter College, Chaman Sarai, Sambhal, Uttar Pradesh 244302
                    </p>
                    <div className="mt-2 text-xs font-tech text-slate-400">
                      <span className="text-cyan-300 font-semibold">Key Landmark:</span> Opposite Hind Inter College
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase mb-1">
                      TELEPHONE HELPLINE
                    </div>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-lg font-display font-black text-white hover:text-cyan-300 transition-colors tracking-wide"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <div className="text-xs font-tech text-slate-400 mt-0.5">
                      Direct patient consultation & enquiries
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase mb-1">
                      CLINIC TIMINGS
                    </div>
                    <div className="text-white font-semibold">
                      Monday – Sunday: 9:30 AM – 8:00 PM
                    </div>
                    <div className="text-xs font-tech text-emerald-400 font-semibold mt-1">
                      Open 7 Days a Week
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Get Directions & WhatsApp */}
            <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-get-directions-btn"
                className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-display font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS →</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:text-white hover:border-emerald-400 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-cyan-400/30 bg-[#060e22] shadow-[0_0_35px_rgba(6,182,212,0.15)] relative min-h-[380px] flex flex-col">
            <div className="p-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between px-5 text-xs font-tech">
              <div className="flex items-center gap-2 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold tracking-wider">LIVE SATELLITE & ROADWAY ROUTE</span>
              </div>
              <a
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>

            <iframe
              title="Raza Multispeciality Dental Clinic Location Map Sambhal"
              src={CLINIC_INFO.mapEmbedUrl}
              className="w-full flex-1 border-0 min-h-[360px] grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
