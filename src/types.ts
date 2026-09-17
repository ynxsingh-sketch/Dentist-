export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  techSpec: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: string;
  comment: string;
  treatment?: string;
}

export interface DoctorMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  specialization: string;
  experienceText: string;
  bio: string;
  isVerified: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description: string;
}

export const CLINIC_INFO = {
  name: 'RAZA MULTISPECIALITY DENTAL CLINIC',
  tagline: 'CBCT • OPG • X-RAY • ADVANCED DENTAL CARE',
  shortName: 'RAZA DENTAL',
  city: 'Sambhal',
  state: 'Uttar Pradesh',
  pincode: '244302',
  address: 'Near Roadways Road, Opposite Hind Inter College, Chaman Sarai, Sambhal, Uttar Pradesh 244302',
  phone: '+91 8881114717',
  phoneRaw: '+918881114717',
  whatsappNumber: '918881114717',
  whatsappMessage: 'Hello Raza Multispeciality Dental Clinic, I would like to book a dental appointment.',
  timings: 'Monday - Sunday: 9:30 AM - 8:00 PM',
  mapEmbedUrl: 'https://www.google.com/maps?q=Chaman+Sarai,+Sambhal,+Uttar+Pradesh+244302&output=embed',
  directionsUrl: 'https://maps.google.com/?q=Near+Roadways+Road+Opposite+Hind+Inter+College+Chaman+Sarai+Sambhal+Uttar+Pradesh+244302',
};
