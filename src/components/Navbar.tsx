import { useState, useEffect, MouseEvent } from 'react';
import { CLINIC_INFO } from '../types';
import { Menu, X, Calendar, Phone, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'services', 'technology', 'about', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'TECHNOLOGY', href: '#technology', id: 'technology' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
              isScrolled
                ? 'bg-[#060c1d]/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.15)] py-2.5'
                : 'bg-[#0a1226]/50 backdrop-blur-md border border-white/10 py-3.5'
            }`}
          >
            {/* Logo / Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              id="navbar-brand-logo"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute opacity-40" />
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  {CLINIC_INFO.shortName}
                </span>
                <span className="font-tech text-[10px] tracking-widest text-cyan-400/80 uppercase">
                  Precision Dental
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-tech font-semibold tracking-widest transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700/60 bg-slate-900/50 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-tech font-semibold tracking-wider transition-all"
                title="Call Clinic"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 8881114717</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                id="navbar-book-appointment-btn"
                className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2 text-slate-950 font-black">
                  <Calendar className="w-3.5 h-3.5 text-slate-950" />
                  BOOK APPOINTMENT
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-2.5 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-tech text-xs font-bold"
              >
                BOOK
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-white/10 bg-slate-900/60 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#070e22] border-l border-cyan-500/30 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-display font-black text-base text-white tracking-wider">
                    {CLINIC_INFO.shortName}
                  </span>
                  <span className="font-tech text-xs text-cyan-400">SAMBHAL, UP</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-tech font-bold tracking-widest text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-display font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                BOOK APPOINTMENT
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-center font-tech text-xs font-semibold text-slate-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                CALL: +91 8881114717
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
