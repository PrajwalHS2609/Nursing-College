import React, { useState } from 'react';
import { 
  Award, BookOpen, GraduationCap, Users, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, Mail
} from 'lucide-react';
import { FACULTY_DATA, FacultyMember } from '../data/collegeData';

export const FacultySection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeFacultyModal, setActiveFacultyModal] = useState<FacultyMember | null>(null);

  const departments = ['All', 'Medical-Surgical Nursing', 'Obstetrics & Gynaecological Nursing', 'Child Health (Paediatric) Nursing', 'Mental Health (Psychiatric) Nursing', 'Community Health Nursing', 'Nursing Foundations'];

  const filteredFaculty = selectedDept === 'All' 
    ? FACULTY_DATA 
    : FACULTY_DATA.filter(f => f.department === selectedDept);

  return (
    <section id="faculty" className="py-16 lg:py-24 bg-[#FAFBFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Leadership & Mentorship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Educators</span> Who Shape Future Healthcare Professionals.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Our faculty comprises distinguished doctorate holders, registered nurse researchers, and certified clinical educators with decades of bedside and pedagogical experience.
          </p>
        </div>

        {/* Department Filter Bar */}
        <div className="flex items-center gap-2 pb-6 border-b border-gray-200 overflow-x-auto mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedDept === dept
                  ? 'bg-[#172B4D] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {dept === 'All' ? 'All Faculty Members' : dept.replace(' Nursing', '')}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Faculty Photo & Badges */}
                <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#2A8C83] text-white">
                      {faculty.experienceYears}+ Years Clinical & Teaching
                    </span>
                    <span className="text-[11px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Faculty Name & Role */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#172B4D] group-hover:text-[#2878A5] transition-colors">
                    {faculty.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#2878A5]">
                    {faculty.designation}
                  </div>
                  <div className="text-xs text-gray-500">
                    Dept: {faculty.department}
                  </div>
                </div>

                {/* Verified Qualifications */}
                <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Academic Qualifications
                  </div>
                  <div className="text-xs text-gray-800 font-medium leading-relaxed">
                    {faculty.qualifications}
                  </div>
                </div>

                {/* Specialization */}
                <div className="mt-3 text-xs text-gray-600">
                  <strong className="text-gray-700">Specialisation:</strong> {faculty.specialization}
                </div>

                {/* Short Bio */}
                <p className="mt-3 text-xs text-gray-500 line-clamp-3 leading-relaxed">
                  {faculty.bio}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveFacultyModal(faculty)}
                  className="text-xs font-bold text-[#2A8C83] hover:text-[#172B4D] flex items-center gap-1 transition-colors"
                >
                  View Profile & Research <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-gray-400">
                  INC Registered
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Deep Dive Profile Modal */}
        {activeFacultyModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-200">
              <div className="bg-[#172B4D] p-6 text-white flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={activeFacultyModal.photo}
                    alt={activeFacultyModal.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white/40"
                  />
                  <div>
                    <h3 className="text-xl font-bold font-heading">{activeFacultyModal.name}</h3>
                    <div className="text-xs text-amber-300 font-medium">{activeFacultyModal.designation}</div>
                    <div className="text-xs text-gray-300">{activeFacultyModal.department}</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveFacultyModal(null)}
                  className="text-white/60 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Qualifications & Credentials</h4>
                  <p className="text-sm text-gray-800 font-medium mt-1">{activeFacultyModal.qualifications}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Biography & Academic Leadership</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{activeFacultyModal.bio}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Professional Affiliations & Council Memberships</h4>
                  <div className="space-y-1.5">
                    {activeFacultyModal.memberships.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-[#2A8C83] shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setActiveFacultyModal(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-[#172B4D] bg-white border border-gray-300 hover:bg-gray-100"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
