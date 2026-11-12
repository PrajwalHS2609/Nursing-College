import React, { useState } from 'react';
import { 
  X, CheckCircle, AlertCircle, ArrowRight, Sparkles, 
  BookOpen, GraduationCap, ShieldCheck, HelpCircle
} from 'lucide-react';
import { COURSES_DATA } from '../data/collegeData';

interface EligibilityCheckerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (courseId: string) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [qualification, setQualification] = useState<'12th-pcb' | '12th-other' | 'gnm' | 'bsc-nursing'>('12th-pcb');
  const [percentage, setPercentage] = useState<number>(55);
  const [category, setCategory] = useState<'General' | 'OBC' | 'SC/ST'>('General');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [age, setAge] = useState<number>(18);
  const [workExp, setWorkExp] = useState<number>(0);

  if (!isOpen) return null;

  // Compute eligibility for each course
  const results = COURSES_DATA.map((course) => {
    let eligible = false;
    let reason = "";

    const isReserved = category === 'SC/ST' || category === 'OBC';
    const minBscCutoff = isReserved ? 40 : 45;

    if (course.id === 'bsc-nursing') {
      if (qualification === '12th-pcb') {
        if (age < 17) {
          reason = "Must be at least 17 years old by Dec 31st of admission year.";
        } else if (percentage >= minBscCutoff) {
          eligible = true;
          reason = `Eligible! Your ${percentage}% in 10+2 (PCB) meets the minimum cutoff of ${minBscCutoff}%.`;
        } else {
          reason = `Requires minimum ${minBscCutoff}% in Physics, Chemistry & Biology.`;
        }
      } else {
        reason = "Requires 10+2 with Physics, Chemistry, Biology & English.";
      }
    } else if (course.id === 'gnm') {
      if (qualification === '12th-pcb' || qualification === '12th-other') {
        if (percentage >= 40) {
          eligible = true;
          reason = `Eligible! 10+2 passed with 40%+ marks qualifies for GNM diploma.`;
        } else {
          reason = "Minimum 40% aggregate in 10+2 required.";
        }
      } else {
        reason = "Candidates who completed 10+2 are eligible.";
      }
    } else if (course.id === 'pb-bsc-nursing') {
      if (qualification === 'gnm') {
        eligible = true;
        reason = "Eligible! Registered GNM diploma nurses qualify directly for Post Basic B.Sc.";
      } else {
        reason = "Requires completion of GNM Diploma and State Nursing Council registration.";
      }
    } else if (course.id === 'msc-nursing') {
      if (qualification === 'bsc-nursing') {
        if (percentage >= 55) {
          if (workExp >= 1) {
            eligible = true;
            reason = "Eligible! B.Sc. Nursing with 55%+ marks and 1+ year clinical experience qualifies.";
          } else {
            reason = "Minimum 1 year of clinical/teaching experience is required for M.Sc. Nursing.";
          }
        } else {
          reason = "Requires minimum 55% aggregate in B.Sc. Nursing.";
        }
      } else {
        reason = "Requires B.Sc. Nursing or Post Basic B.Sc. Nursing qualification.";
      }
    } else if (course.id === 'anm') {
      if (gender !== 'female') {
        reason = "ANM is restricted to female candidates as per INC guidelines.";
      } else if (qualification === '12th-pcb' || qualification === '12th-other') {
        if (percentage >= 40) {
          eligible = true;
          reason = "Eligible! 10+2 passed with 40%+ marks qualifies for ANM.";
        } else {
          reason = "Minimum 40% aggregate in 10+2 required.";
        }
      } else {
        reason = "10+2 candidates in any stream qualify.";
      }
    }

    return { course, eligible, reason };
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 my-6 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#172B4D] to-[#2878A5] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Interactive Assessment
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Nursing Course Eligibility Checker
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 mt-1">
            Verified as per Indian Nursing Council (INC) & RGUHS official admission criteria.
          </p>
        </div>

        {/* Inputs Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Form Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#FAFBFC] border border-gray-200">
            {/* Qualification */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                1. Your Highest Educational Qualification
              </label>
              <select
                value={qualification}
                onChange={(e) => setQualification(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
              >
                <option value="12th-pcb">10+2 / PUC II (Physics, Chemistry, Biology + English)</option>
                <option value="12th-other">10+2 / PUC II (Commerce / Arts / Non-PCB Streams)</option>
                <option value="gnm">GNM Diploma (Registered Nurse & Midwife - RN/RM)</option>
                <option value="bsc-nursing">B.Sc. Nursing / Post Basic B.Sc. Nursing Graduate</option>
              </select>
            </div>

            {/* Percentage Marks Slider/Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                <span>2. Aggregate Marks %</span>
                <span className="text-sm font-bold text-[#2878A5] bg-[#E5F1ED] px-2 py-0.5 rounded-md">
                  {percentage}%
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="98"
                value={percentage}
                onChange={(e) => setPercentage(Number(e.target.value))}
                className="w-full accent-[#2878A5]"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>35%</span>
                <span>Pass Cutoff (40-45%)</span>
                <span>98%</span>
              </div>
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                3. Category (Reservation Quota)
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
              >
                <option value="General">General Merit (GM)</option>
                <option value="OBC">OBC (Cat-1, 2A, 2B, 3A, 3B)</option>
                <option value="SC/ST">SC / ST Categories</option>
              </select>
            </div>

            {/* Candidate Age */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                4. Candidate Age (in Years)
              </label>
              <input
                type="number"
                min="16"
                max="45"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
              />
            </div>

            {/* Gender Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                5. Candidate Gender
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    gender === 'female' ? 'bg-[#2A8C83] text-white border-[#2A8C83]' : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  Female
                </button>
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    gender === 'male' ? 'bg-[#2A8C83] text-white border-[#2A8C83]' : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  Male
                </button>
              </div>
            </div>

            {/* Work experience if B.Sc. */}
            {qualification === 'bsc-nursing' && (
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                  Clinical / Teaching Experience (Years) - Required for M.Sc.
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={workExp}
                  onChange={(e) => setWorkExp(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800"
                />
              </div>
            )}
          </div>

          {/* Results Section */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Assessment Results for Your Profile
            </h4>
            
            <div className="space-y-3">
              {results.map(({ course, eligible, reason }) => (
                <div
                  key={course.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    eligible
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : 'bg-gray-50/80 border-gray-200 opacity-70'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {eligible ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                      <span className="font-bold text-[#172B4D] text-sm sm:text-base">
                        {course.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({course.duration})
                      </span>
                    </div>
                    <p className={`text-xs pl-7 ${eligible ? 'text-emerald-800 font-medium' : 'text-gray-500'}`}>
                      {reason}
                    </p>
                  </div>

                  {eligible && (
                    <button
                      onClick={() => {
                        onClose();
                        onApply(course.id);
                      }}
                      className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-sm flex items-center justify-center gap-1.5"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Official helpline: <strong className="text-[#172B4D]">+91 94821 55678</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
          >
            Close Calculator
          </button>
        </div>

      </div>
    </div>
  );
};
