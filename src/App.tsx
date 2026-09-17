import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundFX } from './components/BackgroundFX';
import { AppleIntroLoader } from './components/AppleIntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { ImplantsFeatureSection } from './components/ImplantsFeatureSection';
import { TechnologySection } from './components/TechnologySection';
import { ClinicGallery } from './components/ClinicGallery';
import { DoctorSection } from './components/DoctorSection';
import { PatientReviews } from './components/PatientReviews';
import { AppointmentCTA } from './components/AppointmentCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [introCompleted, setIntroCompleted] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-[#f1f5f9] selection:bg-cyan-500 selection:text-black">
      {/* Desktop Subtle Custom Glowing Cursor */}
      <CustomCursor />

      {/* Subtle Futuristic Tech Background Grid & Particles */}
      <BackgroundFX />

      {/* Apple-Style Cinematic Launch Sequence */}
      <AppleIntroLoader onComplete={() => setIntroCompleted(true)} />

      {/* Floating Glass Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        {/* Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trust & Verified Statistics */}
        <TrustStats />

        {/* 8 Precision Dentistry Service Cards */}
        <ServicesSection onSelectServiceForBooking={(service) => handleOpenBooking(service)} />

        {/* Dental Implants Cinematic Feature Showcase */}
        <ImplantsFeatureSection onExploreImplant={() => handleOpenBooking('Dental Implants')} />

        {/* Advanced Technology: CBCT & OPG 3D Radiography */}
        <TechnologySection />

        {/* Clinic Experience & Facilities Gallery */}
        <ClinicGallery />

        {/* Clinical Leadership Team */}
        <DoctorSection />

        {/* Patient Reviews Carousel */}
        <PatientReviews />

        {/* Giant Final Appointment CTA */}
        <AppointmentCTA onOpenBooking={() => handleOpenBooking()} />

        {/* Local Map & Contact Information */}
        <ContactSection />
      </main>

      {/* Minimal Futuristic Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* High-Tech Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
