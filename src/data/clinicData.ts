import { ServiceItem, ReviewItem, DoctorMember, GalleryPhoto } from '../types';
import heroDentalImg from '../assets/images/hero_dental_tech_1789638062423.jpg';
import implantImg from '../assets/images/implant_tech_1789638076922.jpg';
import cbctImg from '../assets/images/cbct_imaging_1789638090286.jpg';
import clinicInteriorImg from '../assets/images/clinic_interior_1789638102248.jpg';

export const ASSETS = {
  heroDental: heroDentalImg,
  implant: implantImg,
  cbct: cbctImg,
  clinicInterior: clinicInteriorImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    tagline: 'Titanium precision & permanent stability',
    description: 'Advanced dental implantology designed around high precision biomechanics, seamless osseointegration, and natural tooth aesthetics.',
    iconName: 'Cpu',
    features: ['Computer-Guided Planning', 'Titanium & Zirconia Systems', 'Natural Bite Restoration'],
    techSpec: 'Sub-millimeter 3D placement accuracy',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    tagline: 'Micro-endodontic tooth preservation',
    description: 'Pain-free, mechanized rotary endodontics to eliminate infection, seal canals hermetically, and save natural tooth roots.',
    iconName: 'ShieldCheck',
    features: ['Apex Locator Precision', 'Rotary Endodontic Files', 'Hermetic Gutta-Percha Seal'],
    techSpec: 'Digital canal length verification',
  },
  {
    id: 'cbct-opg-xray',
    name: 'CBCT / OPG X-Ray',
    tagline: 'Ultra-low radiation volumetric diagnostics',
    description: 'In-house high-resolution Cone Beam Computed Tomography and Orthopantomogram providing instantaneous 3D digital diagnosis of bone, nerves, and roots.',
    iconName: 'Scan',
    features: ['3D Volumetric Bone Density', 'Nerve Canal Mapping', 'Instant High-Res Display'],
    techSpec: 'True 1:1 scale anatomical imaging',
  },
  {
    id: 'laser-dentistry',
    name: 'Laser Dentistry',
    tagline: 'Minimally invasive soft & hard tissue care',
    description: 'Precision dental laser technology offering bloodless gingival recontouring, sterilized pocket decontamination, and accelerated tissue healing.',
    iconName: 'Zap',
    features: ['Minimal Discomfort & Swelling', 'Sutureless Precision', 'Accelerated Tissue Regeneration'],
    techSpec: 'Targeted wavelength photonics',
  },
  {
    id: 'dental-cleaning',
    name: 'Dental Cleaning',
    tagline: 'Ultrasonic scaling & stain neutralization',
    description: 'Deep therapeutic ultrasonic prophylaxis that removes calculus, stubborn plaque, and tobacco or tea stains without damaging natural enamel.',
    iconName: 'Sparkles',
    features: ['Piezoelectric Ultrasonic Scaling', 'Gentle Enamel Polishing', 'Gingival Health Rejuvenation'],
    techSpec: 'Vibration frequency tuned for enamel safety',
  },
  {
    id: 'tooth-coloured-fillings',
    name: 'Tooth-Coloured Fillings',
    tagline: 'Biomimetic nano-hybrid composite restorations',
    description: 'Aesthetic shade-matched composite bonding cured with high-intensity light to restore cavities seamlessly with identical tooth translucency.',
    iconName: 'Layers',
    features: ['Nano-Ceramic Hybrid Resin', 'Dual-Phase Light Curing', 'Invisible Marginal Seal'],
    techSpec: 'High wear-resistance & biomimetic polish',
  },
  {
    id: 'prosthodontics',
    name: 'Prosthodontics',
    tagline: 'Crowns, bridges & aesthetic oral rehabilitation',
    description: 'CAD/CAM engineered zirconia crowns, precision dental bridges, and full mouth rehabilitations crafted for optimal occlusion and enduring longevity.',
    iconName: 'Grid',
    features: ['Monolithic Zirconia & E-max', 'Digital Margin Fit', 'Balanced Masticatory Function'],
    techSpec: 'Digital intraoral impression workflow',
  },
  {
    id: 'maxillofacial-care',
    name: 'Oral & Maxillofacial Care',
    tagline: 'Surgical extraction & maxillofacial precision',
    description: 'Gentle atraumatic impaction removals, wisdom tooth surgery, bone augmentation, and comprehensive facial oral health management.',
    iconName: 'Activity',
    features: ['Atraumatic Surgical Extraction', 'PRP / Bone Grafting Options', 'Post-Op Laser Recovery'],
    techSpec: 'CBCT nerve-guided surgical trajectory',
  },
];

export const STATS = [
  { value: 5.0, suffix: '★', label: 'Patient Rating', sublabel: 'Verified on Google' },
  { value: 86, suffix: '+', label: 'Google Reviews', sublabel: 'Locally Trusted in Sambhal' },
  { text: 'ADVANCED', label: 'Dental Technology', sublabel: 'In-house CBCT & OPG 3D Diagnostics' },
  { text: 'MULTISPECIALITY', label: 'Dental Care', sublabel: 'Complete Oral Health Under One Roof' },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified Google Patient',
    rating: 5,
    date: 'Recent Google Review',
    source: 'Google Reviews',
    comment: 'One of the best and most advanced dental clinics in Sambhal. The clinic is exceptionally neat, hygienic, and equipped with the latest digital X-ray machines.',
    treatment: 'Dental Consultation & Diagnosis',
  },
  {
    id: 'rev-2',
    author: 'Patient from Sambhal',
    rating: 5,
    date: 'Verified Patient',
    source: 'Google Reviews',
    comment: 'Got my dental treatment done here. Painless procedure and the doctor explains each step very clearly using computer screen scans. Highly recommended!',
    treatment: 'Advanced Dental Care',
  },
  {
    id: 'rev-3',
    author: 'Local Resident',
    rating: 5,
    date: 'Verified Patient',
    source: 'Google Reviews',
    comment: 'Having in-house CBCT and OPG X-ray facilities right here in Chaman Sarai saves patients from traveling to other cities. Genuine care and top modern equipment.',
    treatment: 'CBCT / OPG Digital Diagnostic',
  },
  {
    id: 'rev-4',
    author: 'Family Dental Patient',
    rating: 5,
    date: 'Google Verified',
    source: 'Google Reviews',
    comment: 'Very polite behavior, calm atmosphere, and modern dental chairs. Clean sterile environment. The treatment was smooth and painless.',
    treatment: 'Root Canal & Restoration',
  },
];

export const DOCTOR_PROFILES: DoctorMember[] = [
  {
    id: 'lead-doctor',
    name: 'Dr. Dental Specialist [Lead Doctor]',
    role: 'Chief Dental Surgeon & Implantologist',
    qualification: '[BDS / MDS - Specialization Credentials - Editable]',
    specialization: 'Implantology, CBCT Diagnostic Analysis & Advanced Restorative Dentistry',
    experienceText: '[Verified Experience - Editable in Clinic Profile]',
    bio: 'Dedicated to bringing world-class, digital precision dentistry and compassionate oral health care to the patients of Sambhal and surrounding regions.',
    isVerified: false,
  },
  {
    id: 'visiting-specialist',
    name: 'Specialist Dental Team',
    role: 'Orthodontics & Maxillofacial Consultants',
    qualification: '[Consultant Specialists - On Call Appointment]',
    specialization: 'Orthodontics, Clear Aligners, Wisdom Tooth Surgery & Aesthetic Rehabilitation',
    experienceText: '[Consultant Panel of Raza Dental Clinic]',
    bio: 'Multi-disciplinary panel of experienced dental specialists providing comprehensive, evidence-based care tailored to individual patient anatomy.',
    isVerified: false,
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'High-Precision Operatory Suite',
    category: 'Treatment Suite',
    image: clinicInteriorImg,
    aspect: 'aspect-video',
    description: 'Equipped with ergonomic dental units, touchless sterile protocols, and direct digital display monitors.',
  },
  {
    id: 'g-2',
    title: 'In-House CBCT & OPG Imaging Suite',
    category: 'Diagnostic Suite',
    image: cbctImg,
    aspect: 'aspect-video',
    description: 'Ultra-low dosage 3D volumetric scanner providing instant cross-sectional radiographs for surgical precision.',
  },
  {
    id: 'g-3',
    title: 'Advanced Implantology Studio',
    category: 'Surgical Studio',
    image: implantImg,
    aspect: 'aspect-video',
    description: 'Precision computer-guided placement for lasting stability, osseointegration, and aesthetic restoration.',
  },
  {
    id: 'g-4',
    title: 'Sterilization & Biosecurity Station',
    category: 'Hygiene Standards',
    image: heroDentalImg,
    aspect: 'aspect-video',
    description: 'Class-B vacuum autoclaves and hospital-grade multi-barrier sterilization protocols protecting every patient.',
  },
];
