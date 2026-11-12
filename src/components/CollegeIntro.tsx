import React, { useState } from 'react';
import { 
  Heart, Shield, BookOpen, Target, Sparkles, Award, 
  CheckCircle, ArrowRight, Stethoscope, Microscope, Users
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface CollegeIntroProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
}

export const CollegeIntro: React.FC<CollegeIntroProps> = ({ onOpenApply, onOpenVisit }) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'vision' | 'values'>('philosophy');

  const corePillars = [
    {
      title: "Clinical Rigour & Bedside Mastery",
      desc: "3,200+ supervised hours at our 750-bed parent hospital, ensuring early patient familiarity and clinical confidence.",
      icon: Stethoscope,
    },
    {
      title: "Evidence-Based Pedagogy",
      desc: "INC-aligned competency curriculum integrated with high-fidelity robotic simulations and research dissertation opportunities.",
      icon: Microscope,
    },
    {
      title: "Professional Ethics & Compassion",
      desc: "Instilling deep respect for patient dignity, empathetic communication, and uncompromised medical safety.",
      icon: Heart,
    },
    {
      title: "Global Licensure & Leadership",
      desc: "Structured training tracks for UK NMC OSCE, German B2 healthcare adaptation, and Indian Central Govt. NORCET examinations.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Institutional Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Where <span className="font-editorial italic font-normal text-[#2878A5]">Compassion</span> Meets Professional Nursing Education.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#303844] leading-relaxed">
            Established in 2004 under the Aegis of Apex Educational & Health Trust, Apex National College of Nursing & Research has grown into one of South India's premier centers of nursing sciences, blending ethical medical humanism with high-technology clinical training.
          </p>
        </div>

        {/* Split Screen Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Campus & Clinical Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80"
                    alt="Nursing skills simulation lab at Apex College"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-[#E5F1ED]/80 border border-[#2A8C83]/20">
                  <div className="text-xl font-bold text-[#172B4D] font-heading">12.5 Acres</div>
                  <div className="text-xs text-gray-600 font-medium">Integrated Green Health Campus</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-[#172B4D] text-white">
                  <div className="text-xs font-semibold text-[#C5A45D] uppercase tracking-wider">Accreditation</div>
                  <div className="text-base font-bold mt-1">INC File No. 18-12/2004-INC</div>
                  <div className="text-xs text-gray-300 mt-0.5">Permanent Recognition</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80"
                    alt="Clinical observation at partner hospital"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Principal Signature Card */}
            <div className="mt-6 p-5 rounded-2xl bg-[#FAFBFC] border border-gray-200 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&auto=format&fit=crop&q=80"
                alt="Prof. Dr. Sr. Philomena Mathew, Principal"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#2878A5]"
              />
              <div>
                <p className="text-xs text-gray-600 italic">
                  "Nursing is both an exacting clinical science and a noble calling of human mercy. We sculpt leaders who excel at both."
                </p>
                <div className="mt-1 text-xs font-bold text-[#172B4D]">
                  Prof. Dr. Sr. Philomena Mathew, Ph.D. <span className="text-gray-500 font-normal">| Principal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Content & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Tab Selector */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'philosophy'
                    ? 'border-[#2878A5] text-[#2878A5]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Our Philosophy
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'vision'
                    ? 'border-[#2878A5] text-[#2878A5]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Vision & Mission
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'values'
                    ? 'border-[#2878A5] text-[#2878A5]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Institutional Approvals
              </button>
            </div>

            {/* Tab 1: Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We believe that modern healthcare demands far more than theoretical rote learning. Our pedagogy bridges physiological science, pharmacological mastery, high-fidelity patient simulation, and empathetic bedside communication.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {corePillars.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                        <div className="flex items-center gap-2 text-[#2878A5] font-bold text-sm">
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{p.title}</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-normal">{p.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 2: Vision & Mission */}
            {activeTab === 'vision' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-2xl bg-[#E5F1ED]/50 border border-[#2A8C83]/30">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2A8C83]">Our Vision</div>
                  <p className="mt-1 text-sm text-[#172B4D] font-medium leading-relaxed">
                    "To be recognized nationally and globally as a beacon of academic excellence in nursing education, innovative clinical research, and compassionate healthcare leadership."
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2878A5]">Our Mission</div>
                  <ul className="mt-2 space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2A8C83] shrink-0 mt-0.5" />
                      <span>Deliver rigorous, evidence-based nursing curricula conforming to the highest national and international regulatory standards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2A8C83] shrink-0 mt-0.5" />
                      <span>Impart transformative clinical training across multi-specialty tertiary hospitals and rural community outposts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2A8C83] shrink-0 mt-0.5" />
                      <span>Empower students with career readiness, foreign language proficiency, and global licensing pathways.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: Values & Approvals */}
            {activeTab === 'values' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <p className="text-xs text-gray-500">
                  Every degree and diploma awarded by our college carries full statutory and legal validation:
                </p>
                <div className="space-y-2.5">
                  {COLLEGE_INFO.approvals.map((app, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#172B4D]">{app.title}</div>
                        <div className="text-xs text-gray-500">{app.code}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Group */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenVisit}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#172B4D] hover:bg-[#2878A5] transition-colors"
              >
                Plan a Guided Campus Tour
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#2878A5] bg-[#E5F1ED] hover:bg-[#d5eae3] transition-colors"
              >
                Admissions Enquiry
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
