import { CLINIC_INFO } from '../types';
import { Calendar, MessageCircle, Phone } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export function StickyMobileBar({ onOpenBooking }: StickyMobileBarProps) {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    CLINIC_INFO.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#060e22]/95 backdrop-blur-xl border-t border-cyan-500/30 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-white/10 text-slate-200 active:bg-slate-800"
        >
          <Phone className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="font-tech text-[10px] font-bold tracking-wider uppercase">CALL</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 active:bg-emerald-900"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="font-tech text-[10px] font-bold tracking-wider uppercase">WHATSAPP</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95"
        >
          <Calendar className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="font-tech text-[10px] font-black tracking-wider uppercase">BOOK</span>
        </button>
      </div>
    </div>
  );
}
