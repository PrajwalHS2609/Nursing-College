import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AccreditationSeals } from './components/AccreditationSeals';
import { CollegeIntro } from './components/CollegeIntro';
import { ProgrammesSection } from './components/ProgrammesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CampusFacilities } from './components/CampusFacilities';
import { ClinicalTraining } from './components/ClinicalTraining';
import { FacultySection } from './components/FacultySection';
import { AdmissionJourney } from './components/AdmissionJourney';
import { GlobalPathways } from './components/GlobalPathways';
import { PlacementPartners } from './components/PlacementPartners';
import { StudentLifeGallery } from './components/StudentLifeGallery';
import { NewsAndEvents } from './components/NewsAndEvents';
import { FAQSection } from './components/FAQSection';
import { AdmissionsCtaBanner } from './components/AdmissionsCtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { ApplicationModal } from './components/ApplicationModal';
import { ProspectusModal } from './components/ProspectusModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { EligibilityChecker } from './components/EligibilityChecker';
import { CampusVisitModal } from './components/CampusVisitModal';

import { COURSES_DATA, Course, COLLEGE_INFO } from './data/collegeData';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Modal States
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState<string>('bsc-nursing');
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);

  // Handlers
  const handleOpenApply = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseForApply(courseId);
    }
    setApplyModalOpen(true);
  };

  const handleSelectCourse = (courseId: string) => {
    const found = COURSES_DATA.find((c) => c.id === courseId);
    if (found) {
      setDetailCourse(found);
    }
  };

  const scrollToSection = (id: string, href: string) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#303844] flex flex-col font-body selection:bg-[#2A8C83]/20 selection:text-[#172B4D]">
      {/* Sticky Navigation Header */}
      <Header
        onOpenApply={handleOpenApply}
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onOpenVisit={() => setVisitModalOpen(true)}
        onSelectCourse={handleSelectCourse}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Banner */}
        <Hero
          onOpenApply={handleOpenApply}
          onOpenProspectus={() => setProspectusModalOpen(true)}
          onOpenEligibility={() => setEligibilityModalOpen(true)}
          onScrollToCourses={() => scrollToSection('courses', '#courses')}
        />

        {/* Section 15 Preview: Official Statutory Approvals & Credibility Seals */}
        <AccreditationSeals />

        {/* Section 2: College Introduction */}
        <CollegeIntro
          onOpenApply={() => handleOpenApply()}
          onOpenVisit={() => setVisitModalOpen(true)}
        />

        {/* Section 3: Recognized Nursing Programmes */}
        <ProgrammesSection
          onSelectCourse={handleSelectCourse}
          onApplyCourse={(courseId) => handleOpenApply(courseId)}
          onOpenEligibility={() => setEligibilityModalOpen(true)}
        />

        {/* Section 4: Why Choose Our Nursing College */}
        <WhyChooseUs
          onOpenApply={() => handleOpenApply()}
          onOpenVisit={() => setVisitModalOpen(true)}
        />

        {/* Section 5: Campus & Laboratory Facilities */}
        <CampusFacilities
          onOpenVisit={() => setVisitModalOpen(true)}
        />

        {/* Section 6 & 11: Clinical Training & 1200+ Bed Hospital Network */}
        <ClinicalTraining
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 7: Experienced Faculty & Mentors */}
        <FacultySection />

        {/* Section 8 & 9: Admission Process & Eligibility Matrix */}
        <AdmissionJourney
          onOpenApply={() => handleOpenApply()}
          onOpenProspectus={() => setProspectusModalOpen(true)}
          onOpenEligibility={() => setEligibilityModalOpen(true)}
        />

        {/* Section 13: International Career Guidance (UK, Germany, Australia, Gulf) */}
        <GlobalPathways />

        {/* Section 12 & 14: Career Opportunities, Recruiters & Alumni Testimonials */}
        <PlacementPartners />

        {/* Section 10: Student Life & Campus Experience */}
        <StudentLifeGallery />

        {/* Section 16: News, Events & Circulars */}
        <NewsAndEvents
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 17: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 18: Conversion Admissions CTA Banner */}
        <AdmissionsCtaBanner
          onOpenApply={() => handleOpenApply()}
          onOpenProspectus={() => setProspectusModalOpen(true)}
          onOpenVisit={() => setVisitModalOpen(true)}
        />

        {/* Section 19: Contact & Campus Visit */}
        <ContactSection
          onOpenVisit={() => setVisitModalOpen(true)}
        />
      </main>

      {/* 4-Column Structured Footer */}
      <Footer
        onOpenApply={handleOpenApply}
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onOpenVisit={() => setVisitModalOpen(true)}
        onSelectCourse={handleSelectCourse}
        onNavigateSection={scrollToSection}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* WhatsApp Helpline */}
        <a
          href={`https://wa.me/919482155678?text=Hello%20Apex%20Nursing%20College,%20I%20want%20to%20enquire%20about%20Admissions%202026`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Instant Apply Floating Pill */}
        <button
          onClick={() => handleOpenApply()}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#172B4D] hover:bg-[#2878A5] text-white text-xs font-bold shadow-xl border border-white/20 transition-all hover:scale-105 active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Apply 2026 Batch
        </button>
      </div>

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultCourseId={selectedCourseForApply}
        onOpenProspectus={() => setProspectusModalOpen(true)}
      />

      <ProspectusModal
        isOpen={prospectusModalOpen}
        onClose={() => setProspectusModalOpen(false)}
        onOpenApply={() => handleOpenApply()}
      />

      <CourseDetailModal
        course={detailCourse}
        onClose={() => setDetailCourse(null)}
        onApply={(courseId) => handleOpenApply(courseId)}
        onOpenProspectus={() => setProspectusModalOpen(true)}
      />

      <EligibilityChecker
        isOpen={eligibilityModalOpen}
        onClose={() => setEligibilityModalOpen(false)}
        onApply={(courseId) => handleOpenApply(courseId)}
      />

      <CampusVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />
    </div>
  );
}
