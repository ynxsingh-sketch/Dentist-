import { useState, FormEvent } from 'react';
import { CLINIC_INFO } from '../types';
import { SERVICES } from '../data/clinicData';
import { X, Calendar, MessageCircle, Phone, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function AppointmentModal({ isOpen, onClose, preselectedService }: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [service, setService] = useState(preselectedService || SERVICES[0].name);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Raza Multispeciality Dental Clinic, I would like to book a dental appointment:
- Name: ${name || 'Patient'}
- Phone: ${phone || 'Not specified'}
- Procedure: ${service}
- Preferred Date: ${date || 'Earliest available'}
- Preferred Slot: ${time}
${notes ? `- Notes: ${notes}` : ''}`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleDirectCallback = (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 bg-[#081229] border border-cyan-400/50 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>CONFIDENTIAL SCHEDULING</span>
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase">
                SCHEDULE YOUR VISIT
              </h3>
              <p className="text-xs text-slate-400 font-tech mt-1">
                Raza Multispeciality Dental Clinic • Chaman Sarai, Sambhal
              </p>
            </div>

            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mohd Rashid"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Clinical Service / Concern
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white font-sans transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} - {s.tagline}
                    </option>
                  ))}
                  <option value="General Consultation & Checkup">General Consultation & Checkup</option>
                  <option value="Emergency Tooth Pain Relief">Emergency Tooth Pain Relief</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white font-sans transition-colors"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-tech font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Symptoms or Special Request (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Sensitivity to cold water, need replacement for back molar"
                  className="w-full px-4 py-2 rounded-xl bg-slate-900/90 border border-white/15 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-display font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  BOOK VIA WHATSAPP (INSTANT)
                </button>

                <button
                  type="button"
                  onClick={handleDirectCallback}
                  className="py-3.5 px-4 rounded-xl border border-white/20 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  REQUEST CALL
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-tech text-slate-400 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero spam. Direct communication with the Sambhal clinic desk.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
              APPOINTMENT DISPATCHED!
            </h3>

            <p className="text-slate-300 text-sm font-light max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-bold text-white">{name || 'Patient'}</span>. Our clinic desk at Chaman Sarai, Sambhal has received your appointment interest for <span className="text-cyan-300 font-semibold">{service}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-left max-w-md mx-auto mb-6 text-xs font-tech space-y-1 text-slate-300">
              <div><span className="text-cyan-400 font-bold">Clinic:</span> {CLINIC_INFO.name}</div>
              <div><span className="text-cyan-400 font-bold">Location:</span> {CLINIC_INFO.address}</div>
              <div><span className="text-cyan-400 font-bold">Helpline:</span> {CLINIC_INFO.phone}</div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-display font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              DONE
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
