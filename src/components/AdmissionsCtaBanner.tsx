import React from 'react';
import { ArrowRight, Download, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface AdmissionsCtaBannerProps {
  onOpenApply: () => void;
  onOpenProspectus: () => void;
  onOpenVisit: () => void;
}

export const AdmissionsCtaBanner: React.FC<AdmissionsCtaBannerProps> = ({
  onOpenApply,
  onOpenProspectus,
  onOpenVisit,
}) => {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-r from-[#172B4D] via-[#2878A5] to-[#2A8C83] text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Admissions 2026–2027 Open
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Your Journey Towards a <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-200">
                Rewarding Nursing Career
              </span> Starts Here.
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
              Explore our INC-approved nursing programmes, tour our high-fidelity simulation laboratories, and secure your seat in the upcoming academic batch.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={onOpenApply}
              className="w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-bold text-[#172B4D] bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Apply Online Now 2026
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenProspectus}
              className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/30"
            >
              <Download className="w-4 h-4" /> Download Prospectus PDF
            </button>

            <button
              onClick={onOpenVisit}
              className="w-full py-3 px-6 rounded-2xl text-xs font-semibold text-gray-200 hover:text-white transition-colors text-center"
            >
              Or Book a Guided Campus Tour →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
