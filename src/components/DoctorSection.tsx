import { DOCTOR_PROFILES } from '../data/clinicData';
import { UserCheck, ShieldCheck, Stethoscope, Sparkles, Award } from 'lucide-react';

export function DoctorSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#030715]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>CLINICAL GOVERNANCE & CARE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            MEET YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              DENTAL CARE TEAM.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Patient-centered clinical leadership guided by evidence-based surgical precision and continuing professional education.
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTOR_PROFILES.map((doc) => (
            <div
              key={doc.id}
              className="relative rounded-3xl p-6 sm:p-8 bg-[#071128]/70 border border-cyan-400/30 hover:border-cyan-400/70 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Avatar / Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Stethoscope className="w-9 h-9" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-[11px] font-tech font-bold uppercase tracking-wider">
                    {doc.role}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors mb-1">
                  {doc.name}
                </h3>

                <div className="font-tech text-xs text-cyan-400/90 font-bold uppercase tracking-wider mb-4">
                  {doc.qualification}
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {doc.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-tech">
                <div className="flex items-center gap-2 text-slate-300">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-400">Focus:</span>
                  <span className="text-white font-semibold">{doc.specialization}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-400">Clinical Profile:</span>
                  <span className="text-slate-200">{doc.experienceText}</span>
                </div>
              </div>

              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-tr-3xl pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs font-tech text-slate-400">
          <span className="text-cyan-400 font-bold">ETHICAL PRACTICE NOTE: </span>
          All clinical consultations and treatments are conducted strictly in accordance with statutory dental council regulations.
        </div>

      </div>
    </section>
  );
}
