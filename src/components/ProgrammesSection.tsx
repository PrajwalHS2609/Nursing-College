import React, { useState } from 'react';
import { 
  GraduationCap, Clock, Users, ArrowRight, CheckCircle2, 
  Sparkles, BookOpen, Download, HelpCircle, ShieldCheck
} from 'lucide-react';
import { Course, COURSES_DATA } from '../data/collegeData';

interface ProgrammesSectionProps {
  onSelectCourse: (courseId: string) => void;
  onApplyCourse: (courseId: string) => void;
  onOpenEligibility: () => void;
}

export const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({
  onSelectCourse,
  onApplyCourse,
  onOpenEligibility,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Undergraduate' | 'Diploma' | 'Postgraduate'>('All');

  const filteredCourses = selectedFilter === 'All' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.level === selectedFilter);

  return (
    <section id="courses" className="py-16 lg:py-24 bg-[#FAFBFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" /> Academic Catalog 2026–27
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight">
              Recognized Nursing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Programmes</span>.
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Every course is approved by the <strong>Indian Nursing Council (INC) New Delhi</strong>, recognized by the <strong>Karnataka State Nursing Council (KNC)</strong>, and affiliated to <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong>.
            </p>
          </div>

          {/* Quick Eligibility Tool Button */}
          <button
            onClick={onOpenEligibility}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#2A8C83] bg-white border border-[#2A8C83]/30 shadow-sm hover:bg-[#E5F1ED]/50 transition-colors shrink-0"
          >
            <Sparkles className="w-4 h-4 text-[#C5A45D]" />
            Eligibility Assessment Calculator
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 pb-6 border-b border-gray-200 overflow-x-auto">
          {[
            { id: 'All', label: 'All Programmes (5)' },
            { id: 'Undergraduate', label: 'Undergraduate Degrees (B.Sc. & P.B. B.Sc.)' },
            { id: 'Diploma', label: 'Diploma Courses (GNM & ANM)' },
            { id: 'Postgraduate', label: 'Postgraduate (M.Sc. Nursing)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedFilter === tab.id
                  ? 'bg-[#172B4D] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {filteredCourses.map((course) => {
            const isDegree = course.level === 'Undergraduate';
            const isMSc = course.level === 'Postgraduate';

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {/* Badge if present */}
                {course.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#C5A45D]/15 text-[#9a7d39] border border-[#C5A45D]/30">
                      {course.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category & Code */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      isDegree ? 'bg-blue-50 text-[#2878A5]' : isMSc ? 'bg-purple-50 text-purple-700' : 'bg-emerald-50 text-[#2A8C83]'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-semibold text-gray-500">
                      INC Approved
                    </span>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#172B4D] group-hover:text-[#2878A5] transition-colors leading-snug">
                    {course.name}
                  </h3>

                  {/* Overview snippet */}
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {course.overview}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-gray-100">
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-[11px] text-gray-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#2878A5]" /> Duration
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#172B4D] mt-0.5">
                        {course.duration}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-[11px] text-gray-500 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#2A8C83]" /> Intake Capacity
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#172B4D] mt-0.5">
                        {course.intakeCapacity} Seats / Year
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Quick Snippet */}
                  <div className="mt-4 p-3 rounded-xl bg-[#E5F1ED]/50 border border-[#2A8C83]/20">
                    <div className="text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                      Eligibility Requirement
                    </div>
                    <div className="text-xs text-gray-600 line-clamp-2">
                      {course.eligibility}
                    </div>
                  </div>

                  {/* Clinical Hours */}
                  <div className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2A8C83]" />
                    <span>{course.clinicalHours}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-[#172B4D] bg-gray-100 hover:bg-gray-200 transition-colors text-center"
                  >
                    Curriculum & Details
                  </button>

                  <button
                    onClick={() => onApplyCourse(course.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E5F1ED] text-[#2A8C83] flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#172B4D]">
                Looking for Detailed Year-Wise Syllabus & Regulations?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">
                Download the official RGUHS & INC approved academic curriculum with clinical rotation matrices.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectCourse('bsc-nursing')}
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#2878A5] bg-[#E5F1ED] hover:bg-[#d4ece3] transition-colors"
          >
            Explore B.Sc. Nursing Syllabus
          </button>
        </div>

      </div>
    </section>
  );
};
