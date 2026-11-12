export interface Course {
  id: string;
  name: string;
  shortCode: string;
  level: 'Undergraduate' | 'Diploma' | 'Postgraduate';
  duration: string;
  intakeCapacity: number;
  eligibility: string;
  eligibilityBullets: string[];
  affiliation: string;
  clinicalHours: string;
  overview: string;
  careerPathways: string[];
  keySubjects: string[];
  annualTuitionApprox: string;
  badge?: string;
  curriculum: {
    year: string;
    focus: string;
    subjects: string[];
  }[];
}

export interface Laboratory {
  id: string;
  name: string;
  shortDesc: string;
  photo: string;
  keyBenefit: string;
  capacity: string;
  equipmentHighlights: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualifications: string;
  experienceYears: number;
  specialization: string;
  photo: string;
  bio: string;
  memberships: string[];
}

export interface ClinicalPartner {
  name: string;
  beds: number;
  type: string;
  specialties: string[];
  location: string;
  logoText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  batch: string;
  programme: string;
  quote: string;
  photo: string;
  verifiedBadge: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Admissions' | 'Academic' | 'Clinical' | 'Events';
  headline: string;
  summary: string;
  readTime: string;
  isImportant?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Admissions' | 'Courses' | 'Clinical & Hostels' | 'Career & Overseas';
  question: string;
  answer: string;
}

export const COLLEGE_INFO = {
  name: "Apex National College of Nursing & Research",
  shortName: "Apex Nursing College",
  tagline: "Building the Next Generation of Skilled Nursing Professionals",
  established: "2004",
  campusArea: "12.5 Acres Health City Campus",
  address: "Apex Health City Campus, Survey No. 42/1, Sarjapur-Electronic City Corridor, Bengaluru, Karnataka 560100",
  phoneNumbers: ["+91 80 2845 7890", "+91 80 2845 7891"],
  mobileHelpline: "+91 94821 55678",
  whatsappNumber: "+91 94821 55678",
  admissionsEmail: "admissions@apex-nursing.edu.in",
  officialEmail: "info@apex-nursing.edu.in",
  officeHours: "Monday to Saturday: 8:30 AM – 5:30 PM (IST)",
  approvals: [
    { title: "Indian Nursing Council (INC)", status: "Approved & Recognized", code: "INC File No. 18-12/2004-INC" },
    { title: "Karnataka State Nursing Council (KNC)", status: "Recognized", code: "KNC Reg. No. 418/2004" },
    { title: "Rajiv Gandhi Univ. of Health Sciences (RGUHS)", status: "Permanently Affiliated", code: "RGUHS Code: N142" },
    { title: "Government of Karnataka", status: "Approved (HFW Department)", code: "Govt Order No. HFW 287 RGU 2004" },
  ],
  hospitalCapacity: "1,200+ Teaching Hospital Beds",
  simulationCenters: "6 State-of-the-Art Simulation & Skill Labs",
  placementRate: "98.4% Documented Placement & Overseas Transition",
};

export const COURSES_DATA: Course[] = [
  {
    id: "bsc-nursing",
    name: "B.Sc. Nursing (Basic)",
    shortCode: "B.Sc. Nursing",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intakeCapacity: 100,
    eligibility: "10+2 passed with Physics, Chemistry, Biology (PCB) & English with minimum 45% aggregate (40% for SC/ST/OBC). Minimum age 17 years by Dec 31st.",
    eligibilityBullets: [
      "Passed 10+2 / Pre-University (PUC II) or equivalent recognized examination",
      "Core subjects must include Physics, Chemistry, Biology and English",
      "Minimum 45% aggregate in PCB (40% for reserved category candidates)",
      "Candidate must be medically fit",
      "Minimum age 17 years as on 31st December of admission year"
    ],
    affiliation: "Affiliated to RGUHS & Approved by Indian Nursing Council (INC)",
    clinicalHours: "3,200+ Supervised Hospital & Community Clinical Hours",
    overview: "A comprehensive 4-year degree programme designed as per the latest INC Competency-Based Curriculum framework. Prepares students for advanced patient-centred care, evidence-based critical interventions, clinical decision-making, and healthcare leadership in premier Indian and global hospitals.",
    careerPathways: [
      "Staff Nurse & Critical Care Specialist (ICU/CCU/NICU)",
      "Nursing Officer in Central Govt. Hospitals (AIIMS, JIPMER, ESI)",
      "Military Nursing Services (MNS) Officer",
      "Global Registered Nurse (UK NHS, USA NCLEX, Ireland NMBI, Germany, Australia)",
      "Clinical Nurse Specialist & Nurse Educator"
    ],
    keySubjects: [
      "Applied Anatomy & Physiology",
      "Applied Microbiology & Infection Control",
      "Nursing Foundation with High-Fidelity Simulation",
      "Adult Health Nursing I & II (Medical-Surgical)",
      "Obstetrics & Gynaecological Nursing",
      "Child Health Nursing",
      "Mental Health Nursing",
      "Community Health Nursing I & II",
      "Nursing Research & Biostatistics",
      "Leadership & Management in Nursing"
    ],
    annualTuitionApprox: "₹1,45,000 / Year (Scholarships Available)",
    badge: "Most Popular",
    curriculum: [
      {
        year: "Year 1 (Semester I & II)",
        focus: "Foundational Sciences & Basic Nursing Practice",
        subjects: [
          "Applied Anatomy & Applied Physiology",
          "Applied Sociology & Applied Psychology",
          "Nursing Foundations I & II (Principles & Skill Lab)",
          "Applied Biochemistry & Nutrition and Dietetics",
          "Health/Nursing Informatics & Technology",
          "Communicative English"
        ]
      },
      {
        year: "Year 2 (Semester III & IV)",
        focus: "Clinical Diagnostics, Microbiology & Adult Health Care",
        subjects: [
          "Applied Microbiology and Infection Control",
          "Pharmacology I & Pathology I",
          "Adult Health Nursing I (Medical-Surgical)",
          "Pharmacology II & Pathology II with Genetics",
          "Adult Health Nursing II with Palliative Care",
          "Professionalism, Professional Values & Ethics"
        ]
      },
      {
        year: "Year 3 (Semester V & VI)",
        focus: "Maternal, Paediatric, Mental & Community Healthcare",
        subjects: [
          "Child Health Nursing I & II",
          "Mental Health Nursing I & II",
          "Community Health Nursing I",
          "Educational Technology / Nursing Education",
          "Introduction to Forensic Nursing & Indian Laws",
          "Midwifery & Obstetrical Nursing I"
        ]
      },
      {
        year: "Year 4 (Semester VII & VIII)",
        focus: "Advanced Midwifery, Research, Management & 6-Month Intensive Clinical Internship",
        subjects: [
          "Midwifery & Obstetrical Nursing II",
          "Community Health Nursing II",
          "Nursing Research & Statistics (Project dissertation)",
          "Nursing Management & Leadership",
          "Mandatory 24-week Clinical Rotational Internship across ICU, Emergency, OT, Labour Ward and PHCs"
        ]
      }
    ]
  },
  {
    id: "gnm",
    name: "GNM – General Nursing & Midwifery",
    shortCode: "GNM Diploma",
    level: "Diploma",
    duration: "3 Years",
    intakeCapacity: 60,
    eligibility: "10+2 passed with English with minimum 40% aggregate marks (Science stream PCB preferred; Arts/Commerce candidates also eligible as per INC norms). Minimum age 17 to 35 years.",
    eligibilityBullets: [
      "10+2 class passed with Science (PCB) & English with aggregate of 40% marks",
      "10+2 in Arts/Commerce with English core/elective or Health Care Science also eligible with 40%",
      "Minimum age 17 years; maximum age 35 years as of 31st December",
      "Must be medically fit with certificate of fitness"
    ],
    affiliation: "Recognized by Indian Nursing Council & Karnataka State Diploma in Nursing Examination Board (KSDNEB)",
    clinicalHours: "2,400+ Hours in Multi-Specialty Hospital Wards & Maternity Units",
    overview: "A rigorous diploma programme that equips aspiring nurses with intensive bedside clinical acumen, emergency skills, and maternal-infant care mastery. Focuses on patient rehabilitation, compassionate direct care, and community public health services.",
    careerPathways: [
      "Registered Nurse (RN) / Registered Midwife (RM)",
      "Staff Nurse in Private & Corporate Hospitals",
      "Public Health Nurse in State Health Departments",
      "Eligibility for Post Basic B.Sc. Nursing degree bridge course",
      "Overseas Opportunities (Gulf countries DHA/MOH/MOHW)"
    ],
    keySubjects: [
      "Bio-Sciences (Anatomy, Physiology & Microbiology)",
      "Behavioral Sciences (Psychology & Sociology)",
      "Nursing Foundations & First Aid",
      "Medical-Surgical Nursing I & II",
      "Mental Health Nursing",
      "Midwifery & Gynaecological Nursing",
      "Community Health Nursing & Environmental Sanitation"
    ],
    annualTuitionApprox: "₹85,000 / Year",
    badge: "Fast-Track Career",
    curriculum: [
      {
        year: "Year 1",
        focus: "Fundamentals, Biological Sciences & Clinical Ward Orientation",
        subjects: [
          "Bio-Sciences (Anatomy, Physiology, Microbiology)",
          "Behavioral Sciences (Psychology & Sociology)",
          "Nursing Foundations (Fundamentals & First Aid)",
          "Community Health Nursing I & Environmental Hygiene",
          "English & Computer Education"
        ]
      },
      {
        year: "Year 2",
        focus: "Medical-Surgical Specialties, Pharmacology & Psychiatric Care",
        subjects: [
          "Medical-Surgical Nursing I (including Pharmacology)",
          "Medical-Surgical Nursing II (Specialties, Eye, ENT, Burns, Oncology)",
          "Mental Health Nursing & Psychiatric Clinical Postings",
          "Child Health Nursing (Paediatrics)"
        ]
      },
      {
        year: "Year 3 (Including 6 Months Internship)",
        focus: "Midwifery, Gynaecology, Community Health Nursing & Advanced Ward Management",
        subjects: [
          "Midwifery & Gynaecological Nursing",
          "Community Health Nursing II",
          "Nursing Administration & Ward Management",
          "Intensive Clinical Internship in Labour Room, NICU, Emergency & PHC"
        ]
      }
    ]
  },
  {
    id: "pb-bsc-nursing",
    name: "Post Basic B.Sc. Nursing",
    shortCode: "P.B. B.Sc. Nursing",
    level: "Undergraduate",
    duration: "2 Years",
    intakeCapacity: 40,
    eligibility: "Passed GNM (General Nursing and Midwifery) diploma and registered as a Registered Nurse & Registered Midwife (RN/RM) with any State Nursing Council in India.",
    eligibilityBullets: [
      "Passed 10+2 or equivalent examination",
      "Obtained certificate in General Nursing and Midwifery (GNM)",
      "Registered as Nurse and Midwife with any State Nursing Registration Council",
      "No upper age limit for in-service candidates"
    ],
    affiliation: "Affiliated to RGUHS & Approved by Indian Nursing Council (INC)",
    clinicalHours: "1,600+ Advanced Specialty Postings & Clinical Leadership Hours",
    overview: "A transformative 2-year undergraduate bridge course designed specifically for diploma-holding registered nurses to upgrade their academic standing to a Bachelor of Science degree, unlocking managerial, research, and international licensing tiers.",
    careerPathways: [
      "Nursing Supervisor / Ward In-charge",
      "Clinical Instructor / Assistant Lecturer in Nursing Colleges",
      "Infection Control Nurse (ICN) / Quality Assurance Officer",
      "Direct eligibility for M.Sc. Nursing postgraduate programs",
      "Fast-track registration with NHS UK, Ireland NMBI & Australia AHPRA"
    ],
    keySubjects: [
      "Nursing Foundation & Applied Sciences",
      "Maternal Nursing & Child Health",
      "Microbiology & Medical-Surgical Nursing",
      "Mental Health Nursing & Sociology",
      "Introduction to Nursing Education",
      "Introduction to Nursing Administration",
      "Introduction to Nursing Research & Statistics"
    ],
    annualTuitionApprox: "₹95,000 / Year",
    badge: "Career Upgrade",
    curriculum: [
      {
        year: "Year 1",
        focus: "Advanced Medical Sciences, Maternal Care & Child Health",
        subjects: [
          "Nursing Foundation",
          "Nutrition & Dietetics",
          "Biochemistry & Biophysics",
          "Psychology & Microbiology",
          "Maternal Nursing",
          "Child Health Nursing",
          "Medical & Surgical Nursing",
          "English (Qualifying)"
        ]
      },
      {
        year: "Year 2",
        focus: "Sociology, Community Nursing, Administration & Education",
        subjects: [
          "Sociology",
          "Community Health Nursing",
          "Mental Health Nursing",
          "Introduction to Nursing Education",
          "Introduction to Nursing Administration",
          "Introduction to Nursing Research & Statistics"
        ]
      }
    ]
  },
  {
    id: "msc-nursing",
    name: "M.Sc. Nursing (5 Clinical Specialities)",
    shortCode: "M.Sc. Nursing",
    level: "Postgraduate",
    duration: "2 Years",
    intakeCapacity: 25,
    eligibility: "B.Sc. Nursing / Post Basic B.Sc. Nursing with minimum 55% aggregate marks from an INC-recognized institution with at least 1 year of clinical/teaching work experience.",
    eligibilityBullets: [
      "Passed B.Sc. Nursing / B.Sc. Hons Nursing / Post Basic B.Sc. Nursing with min 55% marks",
      "Registered Nurse & Registered Midwife with State Nursing Council",
      "Minimum 1 year of clinical experience prior to or after Post Basic B.Sc., or 1 year after B.Sc. Nursing",
      "Candidate must be certified medically fit"
    ],
    affiliation: "Affiliated to RGUHS & Approved by Indian Nursing Council (INC)",
    clinicalHours: "2,000+ Super-Specialty Practicum & Research Thesis Investigation",
    overview: "An elite master's degree programme preparing advanced practice nurses, clinical researchers, hospital directors, and university professors. Features rigorous clinical research, dissertation defence, and clinical specialization.",
    careerPathways: [
      "Assistant Professor / Associate Professor / Principal in Nursing Colleges",
      "Chief Nursing Officer (CNO) & Hospital Nursing Director",
      "Advanced Clinical Nurse Specialist (Critical Care, Oncology, Cardiology)",
      "Clinical Trial Manager & Healthcare Research Scientist",
      "International Faculty & Nurse Consultant in UK, Canada, Australia"
    ],
    keySubjects: [
      "Advanced Practice Nursing & Clinical Pharmacology",
      "Nursing Education, Curriculum Development & Assessment",
      "Clinical Speciality I & II (Med-Surg, OBG, Paediatric, Community, Psychiatric)",
      "Nursing Research & Applied Biostatistics",
      "Nursing Management & Healthcare Policy"
    ],
    annualTuitionApprox: "₹1,80,000 / Year",
    badge: "Postgraduate Leadership",
    curriculum: [
      {
        year: "Year 1",
        focus: "Advanced Practice, Education, Research Methodology & Speciality Core",
        subjects: [
          "Advanced Practice Nursing",
          "Nursing Education & Pedagogical Techniques",
          "Clinical Speciality - 1 (Subject Chosen: Medical Surgical / OBG / Paediatrics / Community / Psychiatry)",
          "Nursing Research and Statistics",
          "Formulation of Master's Dissertation Protocol"
        ]
      },
      {
        year: "Year 2",
        focus: "Speciality Mastery, Healthcare Administration & Master's Thesis Defence",
        subjects: [
          "Nursing Management & Strategic Leadership",
          "Clinical Speciality - 2 (Sub-Specialty Advanced Clinical Practicum)",
          "Execution, Analysis, and Defense of Master's Research Dissertation",
          "Supervised Teaching Practice with B.Sc. / GNM cohorts"
        ]
      }
    ]
  },
  {
    id: "anm",
    name: "ANM – Auxiliary Nurse Midwifery",
    shortCode: "ANM Diploma",
    level: "Diploma",
    duration: "2 Years",
    intakeCapacity: 40,
    eligibility: "10+2 passed from any recognized board in Arts, Science or Commerce with minimum 40% marks. Exclusively for female candidates aged 17 to 35 years.",
    eligibilityBullets: [
      "10+2 passed in any stream (Arts, Commerce, Science) with minimum 40% aggregate",
      "Qualified from CBSE, ICSE, NIOS, or State Higher Secondary Boards",
      "Female candidates only as per INC guidelines for Midwifery care",
      "Minimum age 17 years and maximum 35 years"
    ],
    affiliation: "Approved by INC and Karnataka State Nursing Council",
    clinicalHours: "1,800+ Primary Health Centre & Maternal Sub-Centre Postings",
    overview: "A vital grassroots healthcare programme focusing on maternal and child healthcare, national immunization schedules, family welfare counselling, and primary healthcare delivery in rural and community settings.",
    careerPathways: [
      "Community Health Worker / Female Health Worker in Govt. PHCs/CHCs",
      "Primary Healthcare Clinic Nurse",
      "Maternal & Child Health Counselor",
      "Opportunity for higher education progression into GNM and B.Sc."
    ],
    keySubjects: [
      "Community Health Nursing & Primary Healthcare",
      "Health Promotion, Nutrition & Environmental Sanitation",
      "Primary Healthcare Nursing I & II (Infection & First Aid)",
      "Child Health Nursing & Immunization",
      "Midwifery & Antenatal Care",
      "Health Centre Management"
    ],
    annualTuitionApprox: "₹55,000 / Year",
    curriculum: [
      {
        year: "Year 1",
        focus: "Community Health, Health Promotion & Primary Care Nursing",
        subjects: [
          "Community Health Nursing",
          "Health Promotion (Nutrition, Mental Health, Environmental Sanitation)",
          "Primary Healthcare Nursing I (Prevention, First Aid, Referral)",
          "Child Health Nursing"
        ]
      },
      {
        year: "Year 2 (Including 6 Months Internship)",
        focus: "Midwifery, Antenatal/Postnatal Care & Health Centre Operations",
        subjects: [
          "Midwifery (Normal Labour, Complications, Newborn Care)",
          "Health Centre Management",
          "Rotational Clinical Internship at Sub-Centres, PHCs and District Hospitals"
        ]
      }
    ]
  }
];

export const LABORATORIES_DATA: Laboratory[] = [
  {
    id: "foundation-lab",
    name: "Nursing Foundation & Skill Simulation Lab",
    shortDesc: "16-bed simulated hospital ward with advanced adult manikins, CPR trainers, and clinical headwall units.",
    photo: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=900&auto=format&fit=crop&q=80",
    keyBenefit: "Enables students to master vital signs, IV cannulation, catheterization, and sterile aseptic techniques before attending real patients.",
    capacity: "40 Students / Session",
    equipmentHighlights: [
      "Advanced multi-parameter adult simulation manikins",
      "Functional oxygen, vacuum, and suction wall units",
      "Automated External Defibrillator (AED) training systems",
      "Crash cart equipped with emergency drugs and airway trays"
    ]
  },
  {
    id: "obg-midwifery-lab",
    name: "Obstetrics & Gynaecological Simulation Lab",
    shortDesc: "High-tech birthing simulator suite with neonatal resuscitation stations and pelvic examination models.",
    photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80",
    keyBenefit: "Hands-on practice of normal deliveries, episiotomy repair, foetal heart monitoring, and obstetrical emergency triage.",
    capacity: "30 Students / Session",
    equipmentHighlights: [
      "Interactive wireless maternal birthing simulator (Noelle)",
      "Foetal Doppler and electronic cardiotocography (CTG) units",
      "Newborn radiant warmers and neonatal suction apparatus",
      "Pelvic examination, IUD insertion, and cervical dilation models"
    ]
  },
  {
    id: "paediatric-lab",
    name: "Child Health & Paediatric Nursing Lab",
    shortDesc: "Specially designed child-friendly clinical lab featuring neonatal incubators and pediatric resuscitation mannequins.",
    photo: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900&auto=format&fit=crop&q=80",
    keyBenefit: "Mastering pediatric medication dosage calculations, phototherapy management, and developmental milestone assessments.",
    capacity: "25 Students / Session",
    equipmentHighlights: [
      "Neonatal intensive care incubator and phototherapy units",
      "Paediatric ALS (PALS) manikins with realistic airway anatomies",
      "Infant weighing scales, infantometers, and growth monitoring charts",
      "Pediatric emergency drug calculation simulators"
    ]
  },
  {
    id: "community-lab",
    name: "Community Health Nursing Lab",
    shortDesc: "Equipped with authentic community assessment bags, family health folder archives, and public health audio-visual aids.",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&auto=format&fit=crop&q=80",
    keyBenefit: "Trains nurses to deliver door-to-door health counseling, nutritional assessments, and communicable disease surveillance.",
    capacity: "35 Students / Session",
    equipmentHighlights: [
      "INC standardized community nursing kits with sterile instruments",
      "Water testing and water purification demonstration models",
      "Dietary models for nutritional deficiency counseling",
      "Epidemiological survey software and family health registers"
    ]
  },
  {
    id: "preclinical-anatomy-lab",
    name: "Anatomy, Physiology & Pathology Lab",
    shortDesc: "Vast collection of articulated human skeletons, anatomical organ models, histology microscopes, and pathological specimens.",
    photo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&auto=format&fit=crop&q=80",
    keyBenefit: "Deep 3D spatial comprehension of organ systems, blood circulation, and tissue pathology essential for clinical diagnosis.",
    capacity: "45 Students / Session",
    equipmentHighlights: [
      "Full-scale articulated human skeletons and neuro-vascular models",
      "Binocular compound research microscopes",
      "Preserved organ specimens across cardiovascular, respiratory & gastrointestinal systems",
      "Interactive 3D digital human anatomy dissection software"
    ]
  },
  {
    id: "digital-library",
    name: "Central Digital Library & Health Informatics Lab",
    shortDesc: "Wi-Fi enabled research hub with 5,000+ medical volumes, e-journals, DELNET access, and statistical analysis terminals.",
    photo: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&auto=format&fit=crop&q=80",
    keyBenefit: "Facilitates evidence-based nursing research, dissertation formulation, and access to leading indexed journals (PubMed, ScienceDirect).",
    capacity: "120 Students / Session",
    equipmentHighlights: [
      "5,200+ print volumes and 42 national & international nursing journals",
      "Dedicated computer terminal row with high-speed internet & printer access",
      "Subscription to RGUHS HELINET consortium & DELNET database",
      "Quiet cubicles for postgraduate dissertation research"
    ]
  }
];

export const CLINICAL_PARTNERS_DATA: ClinicalPartner[] = [
  {
    name: "Apex Super Specialty Hospital & Research Centre",
    beds: 750,
    type: "Parent Teaching Hospital (NABH Accredited)",
    specialties: ["Cardiology", "Neurology", "Organ Transplant", "Oncology", "Trauma & Emergency", "Neonatal ICU"],
    location: "Campus In-house",
    logoText: "Apex Super Specialty"
  },
  {
    name: "Bangalore Medical College & Associated Teaching Hospitals",
    beds: 450,
    type: "Government Affiliated Clinical Rotations",
    specialties: ["General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Infectious Diseases", "Burns Unit"],
    location: "Bengaluru Central",
    logoText: "BMCRI Associated"
  },
  {
    name: "Narayana Institute of Cardiac Sciences",
    beds: 350,
    type: "Specialized Cardiac Clinical Posting",
    specialties: ["Pediatric Cardiac Surgery", "Interventional Cardiology", "Cardiac CCU"],
    location: "Bommasandra, Bengaluru",
    logoText: "Narayana Health"
  },
  {
    name: "Kidwai Memorial Institute of Oncology",
    beds: 300,
    type: "Comprehensive Cancer Centre Rotation",
    specialties: ["Surgical Oncology", "Medical Oncology", "Bone Marrow Transplant", "Palliative Care"],
    location: "Bengaluru",
    logoText: "Kidwai Oncology"
  },
  {
    name: "Anekal & Sarjapur Community Health Centres (CHC & PHCs)",
    beds: 100,
    type: "Rural & Urban Public Health Postings",
    specialties: ["Maternal & Child Health", "National Health Missions", "Immunization", "Epidemic Control"],
    location: "Bengaluru Rural District",
    logoText: "Govt. Health Centres"
  }
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: "principal",
    name: "Prof. Dr. Sr. Philomena Mathew",
    designation: "Principal & Professor of Nursing",
    department: "Medical-Surgical Nursing",
    qualifications: "M.Sc. Nursing (Med-Surg), Ph.D. in Nursing, Post-Doctoral Fellow (Cardio-Thoracic Nursing)",
    experienceYears: 24,
    specialization: "Cardio-Vascular & Thoracic Nursing, Evidence-Based Nursing Practice",
    photo: "https://images.unsplash.com/photo-1594824813508-0a0684f09101?w=800&auto=format&fit=crop&q=80",
    bio: "Dr. Sr. Philomena has steered Apex National College of Nursing for over 14 years. A distinguished academician who has published 38 peer-reviewed research papers in indexed journals and serves on the curriculum advisory council of Rajiv Gandhi University of Health Sciences.",
    memberships: ["Life Member, Trained Nurses Association of India (TNAI)", "Member, Indian Society of Critical Care Nurses", "Executive Member, Karnataka Nursing Council Research Board"]
  },
  {
    id: "vice-principal",
    name: "Prof. Dr. Sunita K. Sharma",
    designation: "Vice Principal & Head of Department",
    department: "Obstetrics & Gynaecological Nursing",
    qualifications: "M.Sc. Nursing (OBG), Ph.D., Certified Midwifery Educator (ICM Standards)",
    experienceYears: 19,
    specialization: "High-Risk Pregnancy Care, Respectful Maternity Care (RMC), Foetal Monitoring",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80",
    bio: "Pioneering educator championing evidence-based midwifery practices in India. She led the state's simulation-based obstetrical emergency training project in collaboration with public health directorates.",
    memberships: ["National Neonatology Forum (NNF)", "Society of Midwives India (SOMI)", "Life Member, TNAI"]
  },
  {
    id: "hod-paediatrics",
    name: "Prof. Rajeshwari Venugopal",
    designation: "Professor & Head of Department",
    department: "Child Health (Paediatric) Nursing",
    qualifications: "M.Sc. Nursing (Paediatrics), Fellow in Pediatric Critical Care (FICCN)",
    experienceYears: 16,
    specialization: "Neonatal Resuscitation, Pediatric Intensive Care (PICU), Developmental Supportive Care",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    bio: "Certified PALS and NALS instructor with vast clinical experience at premier tertiary hospitals. She mentors M.Sc. researchers in neonatal pain management and pediatric oncology.",
    memberships: ["Indian Academy of Pediatrics (IAP) Nurses Chapter", "Life Member, TNAI", "Association of Pediatric Nurses"]
  },
  {
    id: "hod-mental-health",
    name: "Dr. Anand Kumar Murthy",
    designation: "Professor & Head of Department",
    department: "Mental Health (Psychiatric) Nursing",
    qualifications: "M.Sc. Psychiatric Nursing (NIMHANS), Ph.D., Certified De-Addiction Specialist",
    experienceYears: 15,
    specialization: "Community Mental Health, Cognitive Behavioural Interventions, Psycho-Geriatric Nursing",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80",
    bio: "An alumnus of NIMHANS Bengaluru, Dr. Anand specializes in adolescent mental health triage, crisis intervention, and stigma eradication in rural healthcare setups.",
    memberships: ["Indian Psychiatric Society (Associate Member)", "Indian Society of Psychiatric Nurses (ISPN)", "TNAI"]
  },
  {
    id: "hod-community",
    name: "Assoc. Prof. Meera K. Nair",
    designation: "Associate Professor & Head of Department",
    department: "Community Health Nursing",
    qualifications: "M.Sc. Nursing (Community Health), PGD in Public Health & Epidemiology",
    experienceYears: 13,
    specialization: "Epidemiological Surveillance, Maternal-Child Nutrition, Rural Health Outreach",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
    bio: "Coordinates the college's flagship rural health adoption scheme across 12 villages in Anekal taluk. Instrumental in achieving 100% full immunization coverage in adopted rural zones.",
    memberships: ["Indian Public Health Association (IPHA)", "TNAI", "Community Health Nurses Association of India"]
  },
  {
    id: "hod-foundation",
    name: "Assoc. Prof. Priya Darshini",
    designation: "Associate Professor & Skill Lab Coordinator",
    department: "Nursing Foundations",
    qualifications: "M.Sc. Nursing (Medical-Surgical), AHA Certified BLS/ACLS Instructor",
    experienceYears: 11,
    specialization: "Objective Structured Clinical Examination (OSCE), Infection Prevention, Basic Life Support",
    photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=800&auto=format&fit=crop&q=80",
    bio: "Specializes in high-fidelity medical simulation pedagogy. Conducts weekly simulation debriefing workshops for first-year nursing students to bridge the gap between classroom theory and ICU reality.",
    memberships: ["Society for Simulation in Healthcare (SSIH)", "TNAI"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Sneha Rachel Thomas",
    role: "Senior Staff Nurse (Cardiac ICU)",
    organization: "St Thomas' NHS Foundation Trust",
    location: "London, United Kingdom",
    batch: "B.Sc. Nursing (Batch 2021)",
    programme: "B.Sc. Nursing",
    quote: "The clinical rigor at Apex College and their dedicated International Placement Cell made my dream of working with the NHS UK a reality. The OSCE simulation practice we received at the college was identical to the UK NMC exam format.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    verifiedBadge: "UK NMC Registered"
  },
  {
    id: "t2",
    name: "Rohit Krishnan",
    role: "Nursing Officer (Neuro-Trauma ICU)",
    organization: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi, India",
    batch: "B.Sc. Nursing (Batch 2022)",
    programme: "B.Sc. Nursing",
    quote: "Securing an All India Rank in the NORCET AIIMS examination was made possible by our professors' relentless focus on fundamental sciences and rationale-based clinical practice. The 1200-bed hospital clinical posting gave us immense hands-on confidence.",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80",
    verifiedBadge: "AIIMS NORCET Qualified"
  },
  {
    id: "t3",
    name: "Anjali Deshmukh",
    role: "Anästhesie & Intensivpflege Nurse (Intensive Care)",
    organization: "Charité – Universitätsmedizin Berlin",
    location: "Berlin, Germany",
    batch: "Post Basic B.Sc. Nursing (Batch 2020)",
    programme: "P.B. B.Sc. Nursing",
    quote: "Transitioning to Germany's healthcare system required B2 German and credential recognition. Apex College's Global Career Guidance Cell guided me through the entire 'Anerkennung' adaptation process with zero consultancy traps.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80",
    verifiedBadge: "Germany Certified"
  },
  {
    id: "t4",
    name: "Aiswarya Menon",
    role: "Assistant Professor & Clinical Specialist",
    organization: "Apollo Institute of Hospital Management & Nursing",
    location: "Bengaluru, India",
    batch: "M.Sc. Nursing (OBG) (Batch 2023)",
    programme: "M.Sc. Nursing",
    quote: "My M.Sc. dissertation was guided by Dr. Sunita Sharma, and our research was published in an indexed international journal. Apex provided exceptional research funding, statistical support, and teaching internships.",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=80",
    verifiedBadge: "Published Researcher"
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    date: "November 08, 2026",
    category: "Admissions",
    headline: "Admissions Open for Academic Year 2026–27: Online Applications Invited",
    summary: "Applications are open for B.Sc. Nursing, GNM, P.B. B.Sc., and M.Sc. Nursing batches. Early bird scholarship screening starts next week.",
    readTime: "2 min read",
    isImportant: true
  },
  {
    id: "news-2",
    date: "October 28, 2026",
    category: "Events",
    headline: "21st Annual Lamp Lighting & Florence Nightingale Pledge Ceremony",
    summary: "100 first-year B.Sc. Nursing and 60 GNM inductees received their ceremonial lamps and took the Florence Nightingale pledge in presence of esteemed medical dignitaries.",
    readTime: "3 min read"
  },
  {
    id: "news-3",
    date: "October 14, 2026",
    category: "Clinical",
    headline: "Mega Rural Health & Cancer Screening Camp Organised in Anekal",
    summary: "Our Community Health Nursing department in association with Apex Teaching Hospital screened 1,420 rural villagers for hypertension, diabetes, and cervical cancer.",
    readTime: "4 min read"
  },
  {
    id: "news-4",
    date: "September 29, 2026",
    category: "Academic",
    headline: "INC & RGUHS Inspection Team Commends High-Fidelity Simulation Centre",
    summary: "The annual regulatory inspection team lauded Apex College's newly upgraded neonatal resuscitation units and multi-parameter adult simulation capabilities.",
    readTime: "2 min read"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Admissions",
    question: "Which nursing courses does Apex National College offer?",
    answer: "Apex National College of Nursing offers 5 premier recognized programmes: B.Sc. Nursing (Basic - 4 Years / 8 Semesters), GNM - General Nursing & Midwifery (3 Years), Post Basic B.Sc. Nursing (2 Years), M.Sc. Nursing (2 Years across 5 clinical specialities: Med-Surg, OBG, Paediatrics, Community, Psychiatry), and ANM - Auxiliary Nurse Midwifery (2 Years for female candidates)."
  },
  {
    id: "faq-2",
    category: "Courses",
    question: "What is the eligibility criteria for B.Sc. Nursing admission?",
    answer: "Candidates must have passed 10+2 / PUC II or equivalent examination with Physics, Chemistry, Biology (PCB), and English as core subjects with a minimum of 45% aggregate marks (40% for SC/ST/OBC category). Candidates must have attained 17 years of age on or before 31st December of the admission year."
  },
  {
    id: "faq-3",
    category: "Courses",
    question: "What is the key difference between GNM Diploma and B.Sc. Nursing Degree?",
    answer: "GNM (General Nursing & Midwifery) is a 3-year diploma programme focusing intensively on general bedside nursing and midwifery. B.Sc. Nursing is a 4-year professional university degree under RGUHS incorporating nursing research, statistics, healthcare management, and higher academic advancement. B.Sc. Nursing graduates are directly eligible for M.Sc. Nursing, central government Grade-B Nursing Officer exams (NORCET), and direct international registration."
  },
  {
    id: "faq-4",
    category: "Admissions",
    question: "Is Apex National College approved by the Indian Nursing Council (INC)?",
    answer: "Yes. Apex National College of Nursing & Research is permanently recognized by the Indian Nursing Council (INC) New Delhi, approved by the Karnataka State Nursing Council (KNC), recognized by the Government of Karnataka (Health & Family Welfare Dept), and permanently affiliated with Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru."
  },
  {
    id: "faq-5",
    category: "Clinical & Hostels",
    question: "Where are clinical rotations and practical training conducted?",
    answer: "Clinical training is conducted at our 750-bed parent hospital (Apex Super Specialty Hospital & Research Centre) right on campus, as well as designated affiliated government and tertiary healthcare centers including Bangalore Medical College Associated Hospitals (450 beds), Narayana Health City (cardiac rotations), Kidwai Memorial Institute of Oncology, and designated government Primary Health Centres."
  },
  {
    id: "faq-6",
    category: "Clinical & Hostels",
    question: "Does the college provide safe hostel and mess accommodation?",
    answer: "Yes. We provide separate, highly secure hostels for male and female students with 24x7 CCTV surveillance, resident wardens, biometric entry, RO purified drinking water, hot water facilities, study halls, high-speed Wi-Fi, and a hygienic dining mess providing nutritious, balanced South and North Indian meals."
  },
  {
    id: "faq-7",
    category: "Career & Overseas",
    question: "Does the college assist in international nursing careers (UK, Germany, Australia, USA)?",
    answer: "Yes. Our dedicated Global Nursing Career Advisory Cell provides in-house training for OET (Occupational English Test), IELTS, UK NMC CBT & OSCE preparation, and German language training up to B2 level. Over 400+ Apex alumni are currently practicing in the UK NHS, Ireland, Germany, Australia, and the Middle East."
  },
  {
    id: "faq-8",
    category: "Admissions",
    question: "How can I apply and what documents are required for admission?",
    answer: "You can apply directly online through our website admission portal or visit the campus admissions office. Required documents include: 10th and 12th Marks Cards, Transfer Certificate (TC), Migration Certificate (for non-Karnataka/interstate students), Conduct/Character Certificate, Caste/Income Certificate (if applicable), 6 Passport-size photographs, and Medical Fitness Certificate from a registered medical practitioner."
  }
];

export const INTERNATIONAL_CAREER_TRACKS = [
  {
    country: "United Kingdom (UK)",
    flag: "🇬🇧",
    council: "Nursing and Midwifery Council (NMC)",
    steps: ["IELTS (7.0) or OET (Grade B)", "NMC Computer Based Test (CBT)", "Band 5 NHS Employment Visa Sponsorship", "OSCE Test of Competence at UK University"],
    highlights: "Direct NHS recruitment, salary £28,407 - £34,581/yr, family sponsorship & ILR pathway.",
    collegeSupport: "In-house OET training, OSCE simulator ward matching UK test stations."
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    council: "Deutscher Berufsverband für Pflegeberufe (DBfK)",
    steps: ["German Language Certification (B1 to B2)", "Defizitbescheid (Credential Equivalence Check)", "Hospital Employment Contract & Fast-track Visa", "Adaptation Course (Kenntnisprüfung) in Germany"],
    highlights: "High demand, €3,200 - €4,100/mo salary, zero tuition adaptation, permanent residency in 3 years.",
    collegeSupport: "Goethe-certified German language batches on campus, official hospital interviews."
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    council: "Australian Health Practitioner Regulation Agency (AHPRA)",
    steps: ["PTE Academic (65+) or OET (B)", "Self-Check & Stage 1 Portfolio Assessment", "Outcomes-Based Assessment (NCLEX-RN + Clinical OSCE)", "Full RN Registration & PR Visa (Subclass 189/190)"],
    highlights: "AUD $75,000 - $95,000/yr, world-class healthcare standards, fast-track PR visa pathway.",
    collegeSupport: "Guidance on AHPRA portfolio submission, NCLEX question bank access."
  },
  {
    country: "Gulf Countries (UAE, Saudi, Oman)",
    flag: "🇦🇪",
    council: "DHA (Dubai), DOH/HAAD (Abu Dhabi), MOH (Oman/Kuwait)",
    steps: ["DataFlow Primary Source Verification", "Prometric / DHA Computerized Examination", "Hospital Interview & Offer Letter", "Work Permit & Tax-Free Remuneration"],
    highlights: "Tax-free income, free furnished hospital accommodation, immediate recruitment.",
    collegeSupport: "DataFlow verification guidance, Prometric mock examinations."
  }
];
