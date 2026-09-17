import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryPhoto } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

export function ClinicGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Treatment Suite', 'Diagnostic Suite', 'Surgical Studio', 'Hygiene Standards'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden border-t border-cyan-500/20 bg-[#040a1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-tech font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>FACILITIES & CLINICAL SANCTUARY</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
              STEP INSIDE THE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                EXPERIENCE.
              </span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-tech text-xs font-bold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid / Horizontal Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 bg-[#07112a] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#040a1b] via-[#040a1b]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-[10px] font-tech font-bold text-cyan-300 uppercase tracking-widest">
                  {item.category}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-cyan-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-4 border-t border-white/10">
                <h3 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Glowing Line */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Real Photographs Note */}
        <div className="mt-8 flex items-center gap-2 justify-center text-xs font-tech text-slate-400">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>High-standard hygiene facility at Chaman Sarai, Sambhal. Walk-ins & scheduled appointments welcome.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-cyan-400/60 bg-[#07112a] shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-white border border-white/20 transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full bg-black overflow-hidden relative">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="font-tech text-xs tracking-widest text-cyan-400 font-bold uppercase">
                {selectedPhoto.category}
              </span>
              <h3 className="font-display font-black text-xl text-white uppercase mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-slate-300 text-sm font-light mt-2 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
