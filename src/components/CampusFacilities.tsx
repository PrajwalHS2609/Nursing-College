import React, { useState } from 'react';
import { 
  Building, Microscope, Users, Sparkles, CheckCircle2, 
  ArrowRight, ShieldCheck, Cpu, Library, Home
} from 'lucide-react';
import { LABORATORIES_DATA, Laboratory } from '../data/collegeData';

interface CampusFacilitiesProps {
  onOpenVisit: () => void;
}

export const CampusFacilities: React.FC<CampusFacilitiesProps> = ({ onOpenVisit }) => {
  const [selectedLabId, setSelectedLabId] = useState<string>(LABORATORIES_DATA[0].id);

  const currentLab = LABORATORIES_DATA.find(lab => lab.id === selectedLabId) || LABORATORIES_DATA[0];

  return (
    <section id="campus-facilities" className="py-16 lg:py-24 bg-[#FAFBFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" /> Campus & Simulation Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight">
            Modern Campus & Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Laboratories</span>.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Our 12.5-acre green campus houses 6 specialized simulation suites, digital anatomy theatres, and smart classrooms designed strictly in accordance with Indian Nursing Council (INC) spatial norms.
          </p>
        </div>

        {/* Interactive Lab Showcase Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Laboratory Navigation Selector */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
              Select Simulation Center / Facility
            </div>
            {LABORATORIES_DATA.map((lab) => {
              const isSelected = lab.id === selectedLabId;
              return (
                <button
                  key={lab.id}
                  onClick={() => setSelectedLabId(lab.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-start gap-3.5 group ${
                    isSelected
                      ? 'bg-white border-[#2878A5] shadow-lg shadow-[#2878A5]/10 -translate-r-1'
                      : 'bg-white/60 hover:bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-[#2878A5] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-[#E5F1ED] group-hover:text-[#2A8C83]'
                  }`}>
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold font-heading leading-snug transition-colors ${
                      isSelected ? 'text-[#2878A5]' : 'text-[#172B4D]'
                    }`}>
                      {lab.name}
                    </h4>
                    <span className="text-xs text-gray-500 mt-0.5 block">
                      {lab.capacity}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Quick Tour Booking Box */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#172B4D] to-[#2878A5] text-white">
              <h4 className="text-sm font-bold font-heading">
                Experience Our Labs in Person
              </h4>
              <p className="text-xs text-gray-200 mt-1 mb-3">
                Parents and candidates are welcome for a guided walk-through of our simulation suites and hostels.
              </p>
              <button
                onClick={onOpenVisit}
                className="w-full py-2.5 px-3 rounded-xl bg-white text-[#172B4D] hover:bg-gray-100 text-xs font-bold transition-colors"
              >
                Schedule Campus Walk-Through
              </button>
            </div>
          </div>

          {/* Right Column: Active Laboratory In-Depth Showcase */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
            
            {/* Main Lab Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 shadow-inner group">
              <img
                src={currentLab.photo}
                alt={currentLab.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2A8C83] text-white">
                  INC Standard Facility
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mt-1.5">
                  {currentLab.name}
                </h3>
              </div>
            </div>

            {/* Description & Learning Benefit */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Facility Overview
                </h4>
                <p className="mt-1 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {currentLab.shortDesc}
                </p>
              </div>

              {/* Learning Benefit Highlight Box */}
              <div className="p-4 rounded-2xl bg-[#E5F1ED] border border-[#2A8C83]/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#2A8C83] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2A8C83]">
                    Core Clinical Learning Benefit
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 font-medium mt-0.5">
                    {currentLab.keyBenefit}
                  </p>
                </div>
              </div>

              {/* Equipment Highlights */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                  Advanced Equipment & Teaching Resources Installed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentLab.equipmentHighlights.map((eq, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2878A5] shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Campus Perks Row */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-gray-50">
                <div className="text-xs font-bold text-[#172B4D]">24x7 Wi-Fi</div>
                <div className="text-[10px] text-gray-500">Digital Library</div>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50">
                <div className="text-xs font-bold text-[#172B4D]">RO Purified</div>
                <div className="text-[10px] text-gray-500">Hostel Water</div>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50">
                <div className="text-xs font-bold text-[#172B4D]">CCTV Monitored</div>
                <div className="text-[10px] text-gray-500">Secure Campus</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
