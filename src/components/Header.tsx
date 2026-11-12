import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Search, Download, GraduationCap, 
  Menu, X, ChevronRight, Award, ShieldCheck, HeartHandshake,
  Calendar, Clock, CheckCircle2, ArrowRight
} from 'lucide-react';
import { COLLEGE_INFO, COURSES_DATA } from '../data/collegeData';

interface HeaderProps {
  onOpenApply: (courseId?: string) => void;
  onOpenProspectus: () => void;
  onOpenVisit: () => void;
  onSelectCourse: (courseId: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  onOpenProspectus,
  onOpenVisit,
  onSelectCourse,
  activeSection,
  setActiveSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Courses', href: '#courses', id: 'courses', hasDropdown: true },
    { name: 'Clinical Training', href: '#clinical-training', id: 'clinical-training' },
    { name: 'Campus & Labs', href: '#campus-facilities', id: 'campus-facilities' },
    { name: 'Admissions', href: '#admissions', id: 'admissions' },
    { name: 'Faculty', href: '#faculty', id: 'faculty' },
    { name: 'Placements & Global', href: '#placements', id: 'placements' },
    { name: 'Student Life', href: '#student-life', id: 'student-life' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCourses = COURSES_DATA.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#172B4D] text-white text-xs py-2 px-4 border-b border-[#2878A5]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#C5A45D] text-[#172B4D] font-semibold text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#172B4D] animate-ping" />
              Admissions Open 2026–27
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="text-gray-200">
              Approved by <strong>Indian Nursing Council (INC)</strong>, Govt. of India & RGUHS
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-300 text-xs">
            <a 
              href={`tel:${COLLEGE_INFO.mobileHelpline}`} 
              className="hover:text-white flex items-center gap-1.5 transition-colors font-medium text-emerald-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Helpline: {COLLEGE_INFO.mobileHelpline}
            </a>
            <span className="hidden sm:inline text-gray-500">•</span>
            <button 
              onClick={onOpenVisit} 
              className="hover:text-amber-300 hidden sm:flex items-center gap-1 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Book Campus Visit
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Institution Brand & Crest */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick('home', '#home'); }}
              className="flex items-center gap-3.5 group text-left"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#172B4D] via-[#2878A5] to-[#2A8C83] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <div className="relative flex flex-col items-center justify-center">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/90">ANCN</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-bold font-heading text-[#172B4D] tracking-tight leading-tight group-hover:text-[#2878A5] transition-colors">
                    APEX NATIONAL
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#E5F1ED] text-[#2A8C83]">
                    <ShieldCheck className="w-3 h-3" /> INC Approved
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#2878A5] uppercase tracking-wider">
                  College of Nursing & Research Sciences
                </div>
                <div className="text-[10px] text-gray-500 hidden sm:block">
                  Affiliated to RGUHS Bengaluru • Established 2004
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <div key={link.id} className="relative group">
                  {link.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setCoursesDropdownOpen(true)}
                      onMouseLeave={() => setCoursesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick(link.id, link.href)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                          activeSection === link.id
                            ? 'text-[#2878A5] bg-[#E5F1ED]/60 font-semibold'
                            : 'text-[#303844] hover:text-[#2878A5] hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                        <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-60" />
                      </button>

                      {/* Dropdown Menu for Courses */}
                      {coursesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Approved Nursing Programmes
                          </div>
                          <div className="divide-y divide-gray-100">
                            {COURSES_DATA.map((course) => (
                              <button
                                key={course.id}
                                onClick={() => {
                                  onSelectCourse(course.id);
                                  setCoursesDropdownOpen(false);
                                }}
                                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#E5F1ED]/40 transition-colors flex items-start gap-2.5 group"
                              >
                                <div className="mt-1 w-2 h-2 rounded-full bg-[#2A8C83] group-hover:scale-125 transition-transform" />
                                <div>
                                  <div className="text-sm font-semibold text-[#172B4D] group-hover:text-[#2878A5]">
                                    {course.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {course.duration} • {course.level}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                            <button
                              onClick={() => {
                                handleNavClick('courses', '#courses');
                                setCoursesDropdownOpen(false);
                              }}
                              className="text-xs font-semibold text-[#2A8C83] hover:underline flex items-center gap-1"
                            >
                              Compare all courses & curricula <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.id, link.href)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === link.id
                          ? 'text-[#2878A5] bg-[#E5F1ED]/60 font-semibold'
                          : 'text-[#303844] hover:text-[#2878A5] hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search courses and campus"
                className="p-2 text-gray-600 hover:text-[#172B4D] hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenProspectus}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2878A5] bg-[#E5F1ED] hover:bg-[#d6e9e3] rounded-lg transition-colors border border-[#2A8C83]/20"
              >
                <Download className="w-3.5 h-3.5" />
                Prospectus
              </button>

              <button
                onClick={() => onOpenApply()}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                Apply Now 2026
              </button>

              {/* Mobile hamburger menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#172B4D] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-[#E5F1ED] text-[#2878A5] font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProspectus();
                }}
                className="w-full py-2.5 px-4 text-sm font-semibold text-[#2878A5] bg-[#E5F1ED] rounded-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download 2026 College Prospectus
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisit();
                }}
                className="w-full py-2.5 px-4 text-sm font-semibold text-[#172B4D] bg-gray-100 rounded-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Campus & Simulation Tour
              </button>

              <a
                href={`tel:${COLLEGE_INFO.mobileHelpline}`}
                className="w-full py-2.5 px-4 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Admissions Helpline: {COLLEGE_INFO.mobileHelpline}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search courses (B.Sc., GNM, M.Sc.), eligibility, facilities, hostel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm sm:text-base outline-none text-[#172B4D] placeholder-gray-400"
              />
              <button
                onClick={() => { setSearchModalOpen(false); setSearchQuery(''); }}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Available Courses ({filteredCourses.length})
              </div>
              <div className="space-y-2">
                {filteredCourses.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onSelectCourse(c.id);
                      setSearchModalOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-3 rounded-xl hover:bg-[#E5F1ED]/50 cursor-pointer border border-transparent hover:border-[#2A8C83]/30 transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-[#172B4D] text-sm">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.duration} • {c.level} • {c.intakeCapacity} Seats</div>
                    </div>
                    <span className="text-xs font-semibold text-[#2878A5] flex items-center gap-1">
                      View Syllabus <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Popular Queries
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Eligibility 12th PCB', 'Hostel Fees', 'UK NHS Placement', 'Clinical Training Hospitals', 'RGUHS Affiliation'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
