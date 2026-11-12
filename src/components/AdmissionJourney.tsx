import React from 'react';
import { 
  CheckCircle2, ArrowRight, FileText, Calendar, 
  HelpCircle, ShieldCheck, Download, AlertCircle, Clock
} from 'lucide-react';

interface AdmissionJourneyProps {
  onOpenApply: () => void;
  onOpenProspectus: () => void;
  onOpenEligibility: () => void;
}

export const AdmissionJourney: React.FC<AdmissionJourneyProps> = ({
  onOpenApply,
  onOpenProspectus,
  onOpenEligibility,
}) => {
  const steps = [
    {
      step: "01",
      title: "Explore Courses",
      desc: "Choose the nursing programme matching your background—B.Sc. Nursing, GNM, Post Basic B.Sc., or M.Sc.",
      badge: "Self-Paced"
    },
    {
      step: "02",
      title: "Check Eligibility",
      desc: "Review programme educational requirements (e.g., 45% PCB in 10+2, min age 17) using our instant assessment tool.",
      badge: "INC Norms"
    },
    {
      step: "03",
      title: "Submit Online Application",
      desc: "Complete the online application form with personal, academic, and contact details with instant registration ID.",
      badge: "Portal Open"
    },
    {
      step: "04",
      title: "Document Verification",
      desc: "Present your original 10th/12th marks cards, transfer certificate, migration, and medical fitness certificates for scrutiny.",
      badge: "Counselling"
    },
    {
      step: "05",
      title: "Admission Confirmation",
      desc: "Receive official provisional admission offer letter and complete enrollment formalities before orientation.",
      badge: "Enrollment"
    },
  ];

  const eligibilityCriteria = [
    {
      programme: "B.Sc. Nursing",
      qualification: "10+2 / PUC II (Physics, Chemistry, Biology & English)",
      minMarks: "45% Aggregate in PCB (40% for SC/ST/OBC)",
      ageLimit: "Minimum 17 years by 31st Dec 2026",
      seats: "100 Approved Seats"
    },
    {
      programme: "GNM (General Nursing)",
      qualification: "10+2 passed in Science / Arts / Commerce with English",
      minMarks: "40% Aggregate",
      ageLimit: "17 to 35 Years",
      seats: "60 Approved Seats"
    },
    {
      programme: "Post Basic B.Sc. Nursing",
      qualification: "Passed GNM Diploma + Registered Nurse & Midwife (RN/RM)",
      minMarks: "Pass in GNM Diploma",
      ageLimit: "No upper age limit for in-service nurses",
      seats: "40 Approved Seats"
    },
    {
      programme: "M.Sc. Nursing",
      qualification: "B.Sc. Nursing / Post Basic B.Sc. + 1 Year Clinical Experience",
      minMarks: "55% Aggregate in B.Sc. Nursing",
      ageLimit: "As per RGUHS norms",
      seats: "25 Approved Seats"
    },
    {
      programme: "ANM (Auxiliary Midwifery)",
      qualification: "10+2 in Arts/Commerce/Science (Female Candidates)",
      minMarks: "40% Aggregate",
      ageLimit: "17 to 35 Years",
      seats: "40 Approved Seats"
    },
  ];

  return (
    <section id="admissions" className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" /> Admissions 2026–27 Academic Cycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Transparent, Student-Friendly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Admission Journey</span>.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            We adhere strictly to merit, Indian Nursing Council guidelines, and state regulatory norms. No capitation fee or hidden charges.
          </p>
        </div>

        {/* Step-by-Step Editorial Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FAFBFC] border border-gray-200/90 flex flex-col justify-between relative group hover:border-[#2878A5]/40 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-heading text-[#2878A5]">
                    {st.step}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E5F1ED] text-[#2A8C83]">
                    {st.badge}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#172B4D] font-heading mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 text-gray-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Eligibility Matrix Table */}
        <div className="bg-[#FAFBFC] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div>
              <span className="text-xs font-bold text-[#2A8C83] uppercase tracking-wider">
                Regulatory Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#172B4D]">
                Verified Programme Eligibility Criteria
              </h3>
            </div>
            <button
              onClick={onOpenEligibility}
              className="text-xs font-bold text-[#2878A5] hover:underline flex items-center gap-1"
            >
              Check Your Personal Eligibility <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-[#172B4D] font-bold text-xs uppercase tracking-wider bg-gray-100/60">
                  <th className="p-3.5 rounded-l-xl">Course Name</th>
                  <th className="p-3.5">Basic Qualification</th>
                  <th className="p-3.5">Minimum Cutoff</th>
                  <th className="p-3.5">Age Rule</th>
                  <th className="p-3.5 rounded-r-xl">Intake</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {eligibilityCriteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="p-3.5 font-bold text-[#172B4D]">{item.programme}</td>
                    <td className="p-3.5">{item.qualification}</td>
                    <td className="p-3.5 font-semibold text-[#2878A5]">{item.minMarks}</td>
                    <td className="p-3.5">{item.ageLimit}</td>
                    <td className="p-3.5 font-medium text-[#2A8C83]">{item.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Strict compliance with Indian Nursing Council circulars. Reservation quota applicable as per Govt. of Karnataka rules.</span>
            </div>
            <button
              onClick={onOpenProspectus}
              className="font-bold text-[#2878A5] hover:underline flex items-center gap-1 shrink-0"
            >
              <Download className="w-3.5 h-3.5" /> Download Admission Handbook
            </button>
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-gradient-to-r from-[#172B4D] via-[#2878A5] to-[#2A8C83] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Direct Online Application
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Ready to Begin Your Nursing Career?
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
              Fill out the 3-minute online application to reserve your seat in the initial merit counselling round.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenApply}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#172B4D] bg-white hover:bg-gray-100 shadow-md transition-all"
            >
              Apply Online Now
            </button>
            <button
              onClick={onOpenProspectus}
              className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Prospectus
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
