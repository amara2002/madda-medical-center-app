// =============================================================
// MADDA MEDICAL CENTER — institutional profile data
// Source: "INSTITUTIONAL PROFILE OF MADDA MEDICAL CENTER"
// All facts verified against official profile document.
// =============================================================

export const SITE = {
  name: "MADDA Medical Center",
  shortName: "MADDA",
  tagline: "Your Health, Our Priority",
  description:
    "A tertiary healthcare facility serving as a referral and treatment center for patients across the Western Region of Liberia.",
  established: "2026",
  ownership: "Private",
  level: "Tertiary Healthcare Facility",
  license: "12-VT-2-3",
  address: {
    street: "Vonzula, Bendu Road",
    district: "Garwula District",
    county: "Grand Cape Mount County",
    country: "Liberia",
  },
  phones: [
    { label: "0770 570 525", tel: "+231770570525" },
    { label: "0770 570 508", tel: "+231770570508" },
  ],
  email: "info@madda-medical.org",
  hours: "Outpatient clinics: 75 per day. Emergency services available.",
  mapQuery:
    "MADDA Medical Center, Vonzula, Bendu Road, Garwula District, Grand Cape Mount County, Liberia",
} as const;

export const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapQuery
)}`;

// ─── Navigation ───────────────────────────────────────────────
export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Facilities", to: "/facilities" },
  { label: "Appointments", to: "/appointments" },
  { label: "Updates", to: "/updates" },
  { label: "Contact Us", to: "/contact" },
] as const;

// ─── Hospital capacity (Home + About stats) ──────────────────
export const CAPACITY = [
  { label: "Patient Beds", value: "112" },
  { label: "Wards", value: "18" },
  { label: "Operating Theaters", value: "1" },
  { label: "Intensive Care Unit", value: "1" },
  { label: "Outpatient Clinics / Day", value: "75" },
] as const;

// ─── Clinical Services ───────────────────────────────────────
export const CLINICAL_SERVICES = [
  {
    slug: "outpatient",
    title: "Outpatient Services",
    summary:
      "Daily outpatient consultations and follow-up care for patients not requiring admission.",
    icon: "stethoscope" as const,
  },
  {
    slug: "inpatient",
    title: "Inpatient Services",
    summary:
      "Admission and continuous care across 18 wards with 112 beds.",
    icon: "bed" as const,
  },
  {
    slug: "emergency",
    title: "Emergency Care",
    summary:
      "Emergency assessment and treatment supported by our ICU and surgical facilities.",
    icon: "siren" as const,
  },
  {
    slug: "surgery",
    title: "Surgical Services",
    summary:
      "Operating theater for surgical procedures delivered by qualified clinical staff.",
    icon: "scalpel" as const,
  },
  {
    slug: "maternity",
    title: "Maternity Services",
    summary:
      "Obstetric and maternal care for mothers and newborns, delivered with compassion.",
    icon: "baby" as const,
  },
  {
    slug: "pediatric",
    title: "Pediatric Care",
    summary:
      "Specialized medical care for infants, children, and adolescents.",
    icon: "heart" as const,
  },
  {
    slug: "internal-medicine",
    title: "Internal Medicine",
    summary:
      "Diagnosis and treatment of adult medical conditions by experienced physicians.",
    icon: "activity" as const,
  },
];

// ─── Diagnostic Services ─────────────────────────────────────
export const DIAGNOSTIC_SERVICES = [
  {
    slug: "laboratory",
    title: "Laboratory Services",
    summary:
      "On-site laboratory testing supporting diagnosis and treatment.",
    icon: "flask" as const,
  },
  {
    slug: "radiology",
    title: "Radiology & Imaging",
    summary:
      "Radiology and imaging services to support accurate diagnosis.",
    icon: "scan" as const,
  },
  {
    slug: "ultrasound",
    title: "Ultrasound Services",
    summary:
      "Ultrasound imaging for diagnostic assessment and monitoring.",
    icon: "waves" as const,
  },
  {
    slug: "immunization",
    title: "Immunization",
    summary:
      "Routine immunization services supporting community health.",
    icon: "syringe" as const,
  },
];

// Combined service list (used by Home preview + Services page)
export const SERVICES = [...CLINICAL_SERVICES, ...DIAGNOSTIC_SERVICES];

// ─── Facilities gallery ──────────────────────────────────────
export const hospitalImages = {
  hero: {
    src: "/images/madda-building.jpeg",
    alt: "MADDA Medical Center building, Vonzula, Bendu Road",
  },
  gallery: [
    {
      src: "/images/facility-ward.jpeg",
      alt: "Patient ward at MADDA Medical Center",
      caption: "Patient Ward",
    },
    {
      src: "/images/facility-lab.jpeg",
      alt: "Laboratory at MADDA Medical Center",
      caption: "Laboratory",
    },
    {
      src: "/images/facility-imaging.jpeg",
      alt: "Imaging room at MADDA Medical Center",
      caption: "Imaging Room",
    },
    {
      src: "/images/facility-maternal.jpeg",
      alt: "Maternal care room at MADDA Medical Center",
      caption: "Maternal Care",
    },
    {
      src: "/images/facility-theater.jpeg",
      alt: "Operating theater at MADDA Medical Center",
      caption: "Operating Theater",
    },
    {
      src: "/images/facility-ambulance.jpeg",
      alt: "Ambulance at MADDA Medical Center",
      caption: "Ambulance",
    },
  ],
} as const;

// ─── About page content ──────────────────────────────────────
export const ABOUT = {
  intro:
    "MADDA Medical Center is a private, tertiary healthcare facility established in 2026. We serve as a referral and treatment center for patients within the Western Region of Liberia.",
  purpose:
    "Our purpose is to provide quality, affordable, and patient-centered medical services — reducing the need for families to travel long distances for essential care.",
  mission:
    "To improve the health and well-being of the community through accessible, quality, and compassionate healthcare services.",
  vision:
    "To be a leading healthcare institution providing excellent and innovative medical services.",
  values: [
    "Professionalism",
    "Integrity",
    "Compassion",
    "Accountability",
    "Teamwork",
    "Excellence",
  ],
  achievements: [
    "Accreditation by the Liberia Medical and Dental Council (LMDC)",
    "Community health outreach programs",
    "Improved patient satisfaction and service delivery",
  ],
  communityEngagement: [
    "Health education campaigns",
    "Immunization programs",
    "Disease prevention initiatives",
    "Community outreach and screening programs",
  ],
  partnerships: [
    "Ministry of Health, Republic of Liberia",
    "Grand Cape Mount County Health Team",
    "International Health Organizations",
    "Non-Governmental Organizations (NGOs)",
  ],
  staff: [
    "Medical Doctors",
    "Physician Assistants",
    "Nurses",
    "Midwives",
    "Pharmacists",
    "Pharmacist Technicians",
    "Laboratory Technologists",
    "Radiographers Technicians",
    "Administrative Staff",
    "Support Staff",
  ],
} as const;

// ─── Organizational structure ────────────────────────────────
export const DEPARTMENTS = [
  "Hospital Board / Governing Council",
  "Chief Executive Officer (CEO)",
  "Medical Department",
  "Nursing Department",
  "Administration and Finance Department",
  "Human Resources Department",
  "Pharmacy Department",
  "Laboratory Department",
] as const;