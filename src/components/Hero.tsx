import React from 'react';
import { 
  ArrowRight, ShieldCheck, Award, HeartPulse, CheckCircle2, 
  Download, Calendar, Sparkles, Building2, Users2, Globe2, BookOpen
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface HeroProps {
  onOpenApply: (courseId?: string) => void;
  onOpenProspectus: () => void;
  onOpenEligibility: () => void;
  onScrollToCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApply,
  onOpenProspectus,
  onOpenEligibility,
  onScrollToCourses,
}) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#FAFBFC] via-[#FAFBFC] to-[#F0F3F6] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-gray-200">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2A8C83]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#2878A5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Conversion Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Regulatory Accreditations Ribbon */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white border border-[#2A8C83]/20 shadow-sm text-xs font-semibold text-[#172B4D]">
              <span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-[#2A8C83] text-white text-[11px] font-bold">
                INC NEW DELHI
              </span>
              <span className="text-gray-600">Permanently Affiliated to RGUHS • Govt. Approved</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-[1.12]">
                Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Next Generation</span> of Skilled Nursing Professionals.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#303844]/90 font-normal leading-relaxed max-w-2xl">
                Discover quality nursing education, hands-on clinical learning, and professional development opportunities designed to prepare students for rewarding careers in healthcare across India and worldwide.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => onOpenApply()}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#172B4D] via-[#2878A5] to-[#2A8C83] hover:shadow-xl hover:shadow-[#2878A5]/25 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Apply for Admission 2026
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCourses}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#172B4D] bg-white hover:bg-gray-50 border border-gray-300 shadow-sm transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-[#2878A5]" />
                Explore Nursing Courses
              </button>

              <button
                onClick={onOpenProspectus}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#2878A5] hover:text-[#172B4D] transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Prospectus
              </button>
            </div>

            {/* Quick Eligibility Floating Trigger */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#2A8C83]/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5F1ED] flex items-center justify-center text-[#2A8C83] shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#172B4D]">
                    Unsure which nursing programme fits you?
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500">
                    Check your eligibility for B.Sc. Nursing, GNM or Post Basic in 30 seconds.
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenEligibility}
                className="shrink-0 text-xs font-bold text-[#2A8C83] hover:text-[#172B4D] underline underline-offset-4 flex items-center gap-1"
              >
                Check Eligibility Now <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Institutional Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] font-heading">
                  1,200+
                </div>
                <div className="text-xs text-gray-600 font-medium">Hospital Beds Training</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2878A5] font-heading">
                  20+ Yrs
                </div>
                <div className="text-xs text-gray-600 font-medium">Academic Heritage</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2A8C83] font-heading">
                  98.4%
                </div>
                <div className="text-xs text-gray-600 font-medium">Documented Placements</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C5A45D] font-heading">
                  400+
                </div>
                <div className="text-xs text-gray-600 font-medium">Alumni in UK & Abroad</div>
              </div>
            </div>

          </div>

          {/* Right Column: Asymmetric Image Showcase & Live Status Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image: Authentic Indian Nursing Students in Clinical Environment */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80"
                  alt="Indian nursing students in professional uniforms in modern healthcare clinical training at Apex College"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/80 via-transparent to-black/20" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    NABH Accredited Teaching Hospital
                  </div>
                  <h3 className="text-lg font-bold font-heading">
                    Hands-On Simulation & Real Bedside Care
                  </h3>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    Supervised clinical training across Trauma ICU, Midwifery birthing suites, and Advanced Paediatric Care.
                  </p>
                </div>
              </div>

              {/* Floating Live Admissions Notification Card */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs animate-in fade-in duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5 text-[#C5A45D]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A45D]">
                      Admissions Schedule
                    </div>
                    <div className="text-xs font-bold text-[#172B4D]">
                      Batch 2026–2027 Registration
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500">Seats Allotment:</span>
                  <span className="font-semibold text-emerald-600">Round 1 Ongoing</span>
                </div>
              </div>

              {/* Floating Global Opportunities Pill */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2A8C83]/10 text-[#2A8C83] flex items-center justify-center">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#172B4D]">
                      Global Career Cell
                    </div>
                    <div className="text-[11px] text-gray-500">
                      NMC UK • Germany • Australia
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-gray-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A8C83]" />
                  In-house OET, IELTS & OSCE Prep
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
