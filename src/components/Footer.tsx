import React from 'react';
import { 
  GraduationCap, Phone, Mail, MapPin, Clock, 
  ShieldCheck, ArrowRight, Download, Calendar, HeartHandshake, CheckCircle2
} from 'lucide-react';
import { COLLEGE_INFO, COURSES_DATA } from '../data/collegeData';

interface FooterProps {
  onOpenApply: (courseId?: string) => void;
  onOpenProspectus: () => void;
  onOpenVisit: () => void;
  onSelectCourse: (courseId: string) => void;
  onNavigateSection: (id: string, href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenProspectus,
  onOpenVisit,
  onSelectCourse,
  onNavigateSection,
}) => {
  return (
    <footer className="bg-[#172B4D] text-white pt-16 pb-8 border-t border-[#2878A5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Structured Grid as specified in Design Document Section 10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: College Information (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2878A5] to-[#2A8C83] flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading tracking-tight block">
                  APEX NATIONAL
                </span>
                <span className="text-xs font-semibold text-[#2A8C83] uppercase tracking-wider block">
                  College of Nursing & Research
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              A premier nursing education institution in India approved by the Indian Nursing Council (INC), New Delhi and permanently affiliated to Rajiv Gandhi University of Health Sciences (RGUHS). Dedicated to sculpting compassionate, clinically competent healthcare leaders.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2A8C83] shrink-0 mt-0.5" />
                <span>{COLLEGE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2878A5] shrink-0" />
                <span>Helpline: <a href={`tel:${COLLEGE_INFO.mobileHelpline}`} className="hover:text-white font-semibold text-amber-300">{COLLEGE_INFO.mobileHelpline}</a></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A45D] shrink-0" />
                <span><a href={`mailto:${COLLEGE_INFO.officialEmail}`} className="hover:text-white">{COLLEGE_INFO.officialEmail}</a></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>{COLLEGE_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academics (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 font-heading">
              Academics & Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="hover:text-white hover:underline transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A8C83]" />
                    <span>{course.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigateSection('courses', '#courses')}
                  className="text-xs font-bold text-[#2A8C83] hover:text-white flex items-center gap-1"
                >
                  View All Programmes & Curriculum <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 font-heading">
              Admissions 2026
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigateSection('admissions', '#admissions')}
                  className="hover:text-white transition-colors"
                >
                  Admission Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('admissions', '#admissions')}
                  className="hover:text-white transition-colors"
                >
                  Eligibility Criteria
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenApply()}
                  className="hover:text-white font-semibold text-emerald-300 transition-colors"
                >
                  Online Application Form
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProspectus}
                  className="hover:text-white transition-colors"
                >
                  Download Prospectus PDF
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVisit}
                  className="hover:text-white transition-colors"
                >
                  Book Campus Visit
                </button>
              </li>
              <li>
                <a
                  href="#admissions"
                  onClick={(e) => { e.preventDefault(); onNavigateSection('admissions', '#admissions'); }}
                  className="hover:text-white transition-colors"
                >
                  Admission FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Institutional Statutory (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 font-heading">
              Quick Links & Governance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <button onClick={() => onNavigateSection('about', '#about')} className="hover:text-white transition-colors">
                  About the College & Vision
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('faculty', '#faculty')} className="hover:text-white transition-colors">
                  Faculty & Mentors Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('campus-facilities', '#campus-facilities')} className="hover:text-white transition-colors">
                  Simulation & Nursing Labs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('clinical-training', '#clinical-training')} className="hover:text-white transition-colors">
                  1200+ Bed Hospital Affiliations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('placements', '#placements')} className="hover:text-white transition-colors">
                  Placements & Global Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('student-life', '#student-life')} className="hover:text-white transition-colors">
                  Student Life & Hostels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contact', '#contact')} className="hover:text-white transition-colors">
                  Contact Admissions Office
                </button>
              </li>
            </ul>

            {/* Statutory Compliance Note */}
            <div className="pt-2 text-[11px] text-gray-400 bg-white/5 p-2.5 rounded-xl border border-white/10">
              <span className="font-semibold text-gray-200">Statutory Approvals:</span>
              <div>INC File No. 18-12/2004-INC</div>
              <div>RGUHS Affiliation Code: N142</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Anti-Ragging & Privacy */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Apex National College of Nursing & Research Sciences. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Anti-Ragging Compliant
            </span>
            <span>•</span>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavigateSection('about', '#about'); }} className="hover:text-white">
              Institutional Approvals
            </a>
            <span>•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigateSection('contact', '#contact'); }} className="hover:text-white">
              Privacy Policy & Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
