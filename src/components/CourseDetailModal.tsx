import React, { useState } from 'react';
import { 
  X, CheckCircle2, Clock, Users, BookOpen, Award, 
  Briefcase, ArrowRight, ShieldCheck, FileText, ChevronRight
} from 'lucide-react';
import { Course } from '../data/collegeData';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (courseId: string) => void;
  onOpenProspectus: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onApply,
  onOpenProspectus,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'eligibility' | 'careers'>('overview');

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 my-8 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#172B4D] via-[#2878A5] to-[#2A8C83] p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C5A45D] text-[#172B4D] text-xs font-bold uppercase tracking-wider">
              {course.level}
            </span>
            <span className="text-xs text-white/80">
              {course.affiliation}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
            {course.name}
          </h3>
          <p className="text-sm text-gray-200 mt-1">
            Duration: {course.duration} • Approved Seats: {course.intakeCapacity} Students / Year
          </p>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50/80 px-6 gap-2 sm:gap-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Programme Overview' },
            { id: 'curriculum', label: 'Curriculum & Subjects' },
            { id: 'eligibility', label: 'Eligibility & Documents' },
            { id: 'careers', label: 'Career Outcomes & Roles' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-2 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-[#2878A5] text-[#2878A5]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#303844]">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-[#172B4D] mb-2">About the Course</h4>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  {course.overview}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs text-gray-500">Duration</div>
                  <div className="text-sm font-bold text-[#172B4D] mt-0.5">{course.duration}</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs text-gray-500">Approved Intake</div>
                  <div className="text-sm font-bold text-[#172B4D] mt-0.5">{course.intakeCapacity} Seats</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs text-gray-500">Clinical Training</div>
                  <div className="text-sm font-bold text-[#2A8C83] mt-0.5">Supervised Beds</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs text-gray-500">Annual Tuition Est.</div>
                  <div className="text-sm font-bold text-[#C5A45D] mt-0.5">{course.annualTuitionApprox}</div>
                </div>
              </div>

              {/* Clinical Hours Highlight */}
              <div className="p-4 rounded-2xl bg-[#E5F1ED] border border-[#2A8C83]/30 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2A8C83] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#172B4D]">Clinical Training Commitment</div>
                  <p className="text-xs sm:text-sm text-gray-700 mt-0.5">
                    {course.clinicalHours} across NABH multi-specialty partner hospitals, critical care ICUs, and rural primary health sub-centers.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-base font-bold text-[#172B4D] mb-3">Key Focus Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.keySubjects.slice(0, 6).map((sub, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 p-2 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-[#2A8C83] shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Curriculum */}
          {activeTab === 'curriculum' && (
            <div className="space-y-5">
              <div className="text-xs sm:text-sm text-gray-600">
                Syllabus structured as per the prescribed guidelines of Indian Nursing Council (INC) & Rajiv Gandhi University of Health Sciences:
              </div>

              <div className="space-y-4">
                {course.curriculum.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-gray-200">
                      <span className="font-bold text-[#172B4D] text-sm sm:text-base font-heading">
                        {item.year}
                      </span>
                      <span className="text-xs font-semibold text-[#2878A5] bg-[#E5F1ED] px-2.5 py-0.5 rounded-full w-fit">
                        {item.focus}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-700">
                      {item.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2A8C83] mt-1.5 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Eligibility */}
          {activeTab === 'eligibility' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <strong>Verified Regulatory Requirements:</strong> Only candidates fulfilling the statutory educational criteria established by the Indian Nursing Council (INC) are eligible for seat admission.
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#172B4D] uppercase tracking-wider">Educational Qualification</h4>
                <p className="text-sm text-gray-700 font-medium">
                  {course.eligibility}
                </p>

                <div className="pt-2 space-y-2">
                  {course.eligibilityBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Checklist */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <h4 className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Mandatory Documents Required At Admission</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 pt-1">
                  <div>• 10th / SSLC Marks Card (DOB Proof)</div>
                  <div>• 12th / Pre-University (PUC) Marks Card</div>
                  <div>• Transfer Certificate (TC) from School/College</div>
                  <div>• Migration Certificate (for Non-Karnataka boards)</div>
                  <div>• Conduct / Character Certificate</div>
                  <div>• 6 Passport Size Recent Colour Photographs</div>
                  <div>• Medical Fitness Certificate from Civil Surgeon</div>
                  <div>• Caste & Income Certificate (if claiming reservation)</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Careers */}
          {activeTab === 'careers' && (
            <div className="space-y-5">
              <div className="text-xs sm:text-sm text-gray-600">
                Graduates of {course.name} enjoy high employability across government health services, premier private healthcare networks, and international hospitals.
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#172B4D] uppercase tracking-wider">Career Roles & Opportunities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careerPathways.map((path, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#2878A5] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800">{path}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#E5F1ED] border border-[#2A8C83]/30">
                <div className="text-xs font-bold text-[#2A8C83] uppercase tracking-wider">Overseas Pathways</div>
                <p className="text-xs sm:text-sm text-gray-700 mt-1">
                  Our International Placement Cell provides tailored OET/IELTS preparation and UK NMC CBT / OSCE simulations right on campus for final year candidates.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Need guidance? Call admission counselor: <span className="font-bold text-[#172B4D]">+91 94821 55678</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenProspectus();
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#2878A5] bg-white border border-gray-300 hover:bg-gray-100 flex-1 sm:flex-initial"
            >
              Get Prospectus PDF
            </button>

            <button
              onClick={() => {
                onClose();
                onApply(course.id);
              }}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-md flex-1 sm:flex-initial flex items-center justify-center gap-2"
            >
              Apply for {course.shortCode} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
