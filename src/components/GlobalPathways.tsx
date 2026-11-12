import React, { useState } from 'react';
import { 
  Globe2, CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Award, ExternalLink, HelpCircle, FileCheck
} from 'lucide-react';
import { INTERNATIONAL_CAREER_TRACKS } from '../data/collegeData';

export const GlobalPathways: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<number>(0);

  const activeTrack = INTERNATIONAL_CAREER_TRACKS[selectedCountry];

  return (
    <section id="placements" className="py-16 lg:py-24 bg-[#FAFBFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5" /> Global Mobility & Career Advisory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            International Nursing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Career Guidance</span>.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Registered nursing is one of the world's most sought-after professions. Our in-house Global Advisory Cell prepares students for foreign language benchmarks, credential evaluations, and clinical licensing exams—free from dubious commercial recruitment agencies.
          </p>
        </div>

        {/* Realistic Advisory Notice */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-10 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Institutional Transparency Advisory:</strong> Graduation from an INC-approved institution provides the foundational eligibility. Overseas practice requires passing destination-specific licensing assessments (e.g. UK NMC CBT/OSCE, German Kenntnisprüfung, NCLEX-RN) and official language tests. Apex provides structured coaching to clear these milestones.
          </div>
        </div>

        {/* Country Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {INTERNATIONAL_CAREER_TRACKS.map((track, idx) => {
            const isSelected = selectedCountry === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCountry(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-[#2878A5] shadow-lg shadow-[#2878A5]/10 font-bold'
                    : 'bg-white/60 hover:bg-white border-gray-200 text-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{track.flag}</div>
                <div className={`text-sm sm:text-base font-bold font-heading ${
                  isSelected ? 'text-[#2878A5]' : 'text-[#172B4D]'
                }`}>
                  {track.country}
                </div>
                <div className="text-[11px] text-gray-500 truncate mt-0.5">
                  {track.council}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Country Deep-Dive Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-gray-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeTrack.flag}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#172B4D]">
                  Nursing Pathway: {activeTrack.country}
                </h3>
                <div className="text-xs text-gray-500">
                  Regulatory Body: <strong className="text-gray-700">{activeTrack.council}</strong>
                </div>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E5F1ED] text-[#2A8C83] w-fit">
              Official Licensing Framework
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left: Step-by-Step Licensing Flow */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Mandatory Step-by-Step Licensure Procedure
              </h4>
              <div className="space-y-3">
                {activeTrack.steps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#172B4D] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {sIdx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-800 font-medium pt-0.5">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {/* Remuneration & Highlights */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Remuneration & Residence Perks
                </div>
                <p className="text-xs sm:text-sm text-[#172B4D] font-semibold mt-1">
                  {activeTrack.highlights}
                </p>
              </div>
            </div>

            {/* Right: How Apex College Prepares You */}
            <div className="lg:col-span-5 bg-[#E5F1ED]/50 border border-[#2A8C83]/30 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2A8C83]">
                  <Sparkles className="w-4 h-4" />
                  Apex College Campus Support
                </div>
                <h4 className="text-lg font-bold font-heading text-[#172B4D]">
                  Structured In-House Preparatory Modules
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {activeTrack.collegeSupport}
                </p>

                <div className="pt-2 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                    <span>Free library access to NMC CBT & NCLEX Q-Banks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                    <span>Mock OSCE stations mimicking UK test centres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                    <span>Document verification and transcript attestation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A8C83]/20">
                <div className="text-[11px] text-gray-600">
                  Apex Alumni Overseas Registry: <strong>400+ Active Nurses</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
