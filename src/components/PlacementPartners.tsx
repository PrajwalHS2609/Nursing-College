import React from 'react';
import { 
  Building2, Briefcase, Award, CheckCircle2, 
  Quote, ExternalLink, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/collegeData';

export const PlacementPartners: React.FC = () => {
  const corporateRecruiters = [
    { name: "Apollo Hospitals", type: "JCI Accredited Multi-Specialty", hq: "Pan-India" },
    { name: "Manipal Hospitals", type: "Tertiary Quaternary Care", hq: "Bengaluru" },
    { name: "Fortis Healthcare", type: "Super Specialty Network", hq: "Pan-India" },
    { name: "Narayana Health", type: "Cardiac & Multi-Specialty", hq: "Bengaluru" },
    { name: "Aster DM Healthcare", type: "India & Middle East", hq: "Bengaluru / Dubai" },
    { name: "Max Healthcare", type: "Super Specialty Hospitals", hq: "Delhi NCR" },
    { name: "St. John's Medical College Hospital", type: "Premier Academic Medical Centre", hq: "Bengaluru" },
    { name: "AIIMS & Central Govt. Hospitals", type: "Public Healthcare (NORCET Exam)", hq: "New Delhi" },
  ];

  const careerRoles = [
    { role: "Staff Nurse (ICU/Ward)", salary: "₹3.6 - ₹5.4 Lakhs/yr (India)", desc: "Immediate clinical absorption in tertiary hospitals." },
    { role: "Central Govt. Nursing Officer", salary: "₹9.5 - ₹12.5 Lakhs/yr (Level 7 Pay)", desc: "AIIMS, JIPMER, ESI, Railway Hospitals." },
    { role: "Global Registered Nurse (UK/EU)", salary: "£28,000 - £35,000 / €38,000+", desc: "Direct recruitment with relocation allowance." },
    { role: "Clinical Nurse Specialist / In-Charge", salary: "₹5.5 - ₹8.0 Lakhs/yr", desc: "Supervising specialty units like Dialysis, CCU, OT." },
    { role: "Nursing Tutor / Lecturer", salary: "₹4.5 - ₹7.0 Lakhs/yr", desc: "Teaching undergraduate students in nursing colleges." },
    { role: "Community Health Officer (CHO)", salary: "₹4.8 - ₹6.5 Lakhs/yr", desc: "Leading Health & Wellness Centres under NHM." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Career Pathways & Recruiter Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Preparing Students for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Meaningful Careers</span> in Healthcare.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Our placement support cell connects graduates with top-tier healthcare institutions, provides mock viva sessions, resume critiques, and competitive exam coaching.
          </p>
        </div>

        {/* Roles & Pathways Matrix */}
        <div className="mb-16">
          <h3 className="text-lg font-bold font-heading text-[#172B4D] mb-4">
            Diverse Career Horizons for Our Nursing Graduates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerRoles.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#172B4D] font-heading">{item.role}</h4>
                  <div className="text-xs font-semibold text-[#2878A5] mt-1">{item.salary}</div>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Network Cards */}
        <div className="p-8 rounded-3xl bg-[#FAFBFC] border border-gray-200 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-2 mb-6">
            <div>
              <span className="text-xs font-bold text-[#2A8C83] uppercase tracking-wider">
                Hospital Network
              </span>
              <h3 className="text-xl font-bold font-heading text-[#172B4D]">
                Premier Healthcare Recruiters
              </h3>
            </div>
            <span className="text-xs text-gray-500">
              Campus placement drives held annually
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {corporateRecruiters.map((rec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-[#2878A5]/40 transition-colors">
                <div className="font-bold text-sm text-[#172B4D]">{rec.name}</div>
                <div className="text-[11px] text-[#2878A5] mt-0.5">{rec.type}</div>
                <div className="text-[10px] text-gray-400 mt-1">{rec.hq}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 14: Student Testimonials & Alumni Stories */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#2A8C83] uppercase tracking-wider">
              Documented Alumni Success
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#172B4D] mt-1">
              Stories of Learning, Growth & Achievement
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Read real accounts of our alumni excelling in premier NHS hospitals, AIIMS, and international research universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-3xl bg-[#FAFBFC] border border-gray-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#E5F1ED] text-[#2A8C83]">
                      {t.verifiedBadge}
                    </span>
                    <Quote className="w-8 h-8 text-gray-200" />
                  </div>

                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center gap-3.5">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#2878A5]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#172B4D]">{t.name}</h4>
                    <div className="text-xs font-medium text-[#2878A5]">{t.role}</div>
                    <div className="text-[11px] text-gray-500">{t.organization} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
