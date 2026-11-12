import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Building2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const AccreditationSeals: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2A8C83]">
            Official Institutional Credibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#172B4D] mt-1">
            Statutory Approvals & University Affiliations
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Every programme is fully recognized under the Indian Nursing Council Act of 1947 and state health university regulations.
          </p>
        </div>

        {/* 4 Official Seals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLEGE_INFO.approvals.map((app, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FAFBFC] border border-gray-200/90 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E5F1ED] text-[#2A8C83] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {app.status}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#172B4D] font-heading leading-snug">
                  {app.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/80">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Registration / File Code
                </div>
                <div className="text-xs font-mono font-semibold text-gray-700 mt-0.5">
                  {app.code}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 text-center text-xs text-gray-400">
          * Prospective students and parents may independently verify our approved intake capacity directly on the official Indian Nursing Council (INC) portal (<a href="https://indiannursingcouncil.org" target="_blank" rel="noopener noreferrer" className="underline text-gray-500 hover:text-[#2878A5]">indiannursingcouncil.org</a>) and RGUHS website.
        </div>

      </div>
    </section>
  );
};
