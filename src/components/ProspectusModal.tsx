import React, { useState } from 'react';
import { 
  X, Download, BookOpen, CheckCircle2, ShieldCheck, 
  Printer, ArrowRight, Sparkles, Building, Award, Phone
} from 'lucide-react';
import { COLLEGE_INFO, COURSES_DATA } from '../data/collegeData';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenApply,
}) => {
  const [studentName, setStudentName] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 my-6 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#172B4D] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C5A45D] text-[#172B4D] text-[11px] font-bold uppercase tracking-wider">
              Official Publication
            </span>
            <span className="text-xs text-gray-300">
              Session 2026–2027
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Download Institutional Prospectus & Information Bulletin
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Apex National College of Nursing & Research Sciences (INC / RGUHS)
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-[#303844]">
          
          {/* Prospectus Preview Card */}
          <div className="p-5 rounded-2xl bg-[#FAFBFC] border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-48 bg-gradient-to-br from-[#172B4D] via-[#2878A5] to-[#2A8C83] rounded-xl shadow-lg p-3 text-white flex flex-col justify-between shrink-0 border border-white/20">
              <div className="text-[9px] uppercase tracking-widest text-[#C5A45D] font-bold">
                PROSPECTUS 2026
              </div>
              <div className="text-center space-y-1">
                <div className="text-xs font-bold leading-tight">APEX NATIONAL</div>
                <div className="text-[8px] text-gray-300 uppercase">College of Nursing</div>
                <div className="w-8 h-0.5 bg-[#C5A45D] mx-auto my-1" />
                <div className="text-[7px] text-gray-200">INC File No. 18-12/2004</div>
              </div>
              <div className="text-[7px] text-center text-gray-300">
                1200+ Bed Hospital • Simulation Suites
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <h4 className="font-bold text-[#172B4D] text-base">
                What's Inside the Official Prospectus?
              </h4>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                  <span>Approved intake capacity & course regulations for all 5 programmes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                  <span>Detailed 4-year B.Sc. Nursing curriculum & semester credit breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                  <span>Fee schedule, scholarship eligibility, and instalment structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                  <span>Clinical rotation hospital agreements & Bed allocation charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A8C83]" />
                  <span>Hostel rules, mess menu guidelines & code of student conduct</span>
                </li>
              </ul>
            </div>
          </div>

          {downloadSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-emerald-900">
                Prospectus Prepared for {studentName || 'Applicant'}!
              </h4>
              <p className="text-xs text-emerald-700">
                The comprehensive 24-page PDF document has been synthesized for your review.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-100 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" /> View / Print Prospectus
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenApply();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2878A5] hover:bg-[#172B4D] flex items-center gap-1.5"
                >
                  Proceed to Online Application <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Enter Details to Access Digital Prospectus
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D]">
                    Student / Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Mathew"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D]">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-md flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Official College Prospectus (PDF)
              </button>
            </form>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <span>Official Helpline: <strong>+91 94821 55678</strong></span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
