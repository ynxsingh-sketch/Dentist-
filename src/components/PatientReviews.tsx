import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, CheckCircle } from 'lucide-react';

export function PatientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden bg-[#040a1b] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>REAL PATIENT EXPERIENCES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            TRUSTED BY OUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              PATIENTS.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Authentic feedback from Sambhal families and patients who entrusted their smiles and oral health to Raza Dental Clinic.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-[#071129]/80 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] min-h-[300px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between flex-1"
              >
                <div>
                  {/* Top Bar: Stars + Google Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-tech text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{activeReview.source}</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-cyan-500/20 absolute -top-3 -left-3 pointer-events-none" />
                    <p className="text-base sm:text-xl text-slate-100 font-light leading-relaxed italic relative z-10">
                      "{activeReview.comment}"
                    </p>
                  </div>
                </div>

                {/* Patient Details */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase">
                      {activeReview.author}
                    </div>
                    {activeReview.treatment && (
                      <div className="font-tech text-xs text-cyan-400 font-semibold tracking-wider uppercase">
                        Procedure: {activeReview.treatment}
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-slate-400 font-tech">
                    {activeReview.date}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Glowing Blue Active Line Beneath the Card */}
            <div className="absolute -bottom-0.5 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />
          </div>

          {/* Carousel Navigation Buttons & Indicators */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextReview}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
