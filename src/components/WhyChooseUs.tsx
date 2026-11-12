import React from 'react';
import { 
  HeartHandshake, Building2, Stethoscope, Award, 
  Globe2, ShieldCheck, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenApply, onOpenVisit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Institutional Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            An Education That Prepares You for <span className="font-editorial italic font-normal text-[#2878A5]">Real Healthcare</span> Challenges.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            At Apex, student training goes far beyond memorising textbooks. We sculpt resilient, ethical clinicians capable of rapid triage, delicate bedside empathy, and high-pressure ICU interventions.
          </p>
        </div>

        {/* Distinctive Asymmetric Layout (Anti-repetitive design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Large Featured Card with Hospital Exposure */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#172B4D] to-[#2878A5] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-amber-300">
                <Building2 className="w-3.5 h-3.5" /> Parent Teaching Hospital
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-heading leading-tight">
                1,200+ Teaching Hospital Beds for Unmatched Bedside Exposure
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl">
                Students are not mere observers. Under dedicated faculty preceptors, you rotate through Trauma & Emergency, Coronary Care Units (CCU), Labour & Delivery Suites, Neonatal Intensive Care, and Advanced Surgical Wards.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-heading">750</div>
                <div className="text-xs text-gray-300">Campus Hospital Beds</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">1:1</div>
                <div className="text-xs text-gray-300">ICU Preceptor Ratio</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2A8C83] text-emerald-300 font-heading">100%</div>
                <div className="text-xs text-gray-300">NABH Standards</div>
              </div>
            </div>
          </div>

          {/* Card 2: Simulation & Practical Skills */}
          <div className="lg:col-span-5 bg-[#FAFBFC] border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F1ED] text-[#2A8C83] flex items-center justify-center font-bold">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#172B4D]">
                High-Fidelity Simulation Before Human Contact
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                6 specialized laboratories equipped with computer-interfaced manikins (SimMan, Noelle birthing simulator). Practice CPR, airway intubation, and postpartum haemorrhage response without patient risk.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2A8C83]">
                <CheckCircle2 className="w-4 h-4" />
                OSCE Structured Stations for Precision Scoring
              </div>
            </div>
          </div>

          {/* Card 3: International Pathway & Language Training */}
          <div className="lg:col-span-4 bg-[#FAFBFC] border border-gray-200 rounded-3xl p-7 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#172B4D]">
                Global Nursing Career Advisory Cell
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Campus-based coaching for OET, IELTS, UK NMC CBT/OSCE, and German B2 language training. Over 400+ graduates placed across NHS UK, Ireland, Germany and Australia.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#2878A5]">
              Zero-Agent Transparency Guarantee →
            </div>
          </div>

          {/* Card 4: Experienced Faculty & Mentorship */}
          <div className="lg:col-span-4 bg-[#FAFBFC] border border-gray-200 rounded-3xl p-7 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2878A5] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#172B4D]">
                Educators Who Are Practising Clinical Mentors
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                100% full-time faculty holding M.Sc. and Ph.D. degrees with an average 14+ years of clinical teaching experience, ensuring rigorous bedside demonstration.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#2878A5]">
              1:10 Teacher-to-Student Mentorship →
            </div>
          </div>

          {/* Card 5: Safe Residential Campus & Disciplined Environment */}
          <div className="lg:col-span-4 bg-[#E5F1ED]/50 border border-[#2A8C83]/30 rounded-3xl p-7 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#2A8C83] flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#172B4D]">
                Disciplined & Safe Residential Campus
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Zero-tolerance anti-ragging cell, 24x7 security surveillance, hygienic separate hostels, and parent-connect updates for peace of mind.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#2A8C83]">
              100% Ragging-Free Campus Guarantee →
            </div>
          </div>

        </div>

        {/* Action Group */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenApply}
            className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#172B4D] to-[#2878A5] hover:shadow-lg transition-all"
          >
            Start Your Admission Application
          </button>
          <button
            onClick={onOpenVisit}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold text-[#172B4D] bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Visit Campus & Experience Our Labs
          </button>
        </div>

      </div>
    </section>
  );
};
