import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, 
  Send, CheckCircle2, Calendar, Building2, ExternalLink
} from 'lucide-react';
import { COLLEGE_INFO, COURSES_DATA } from '../data/collegeData';

interface ContactSectionProps {
  onOpenVisit: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenVisit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'B.Sc. Nursing (Basic)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Campus Location & Admissions Office
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Contact Us & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Plan Your Campus Visit</span>.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Our admissions counselors and academic coordinators are here to assist with course selection, eligibility verification, hostel queries, and documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="p-6 rounded-3xl bg-[#FAFBFC] border border-gray-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#E5F1ED] text-[#2A8C83] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#172B4D] font-heading">
                    Campus Address
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {COLLEGE_INFO.address}
                  </p>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Near Electronic City Phase-II • Accessible via Metro & BMTC Bus Lines
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2878A5] shrink-0" />
                  <div>
                    <div className="text-[11px] text-gray-400 font-semibold uppercase">Helpline Numbers</div>
                    <a href={`tel:${COLLEGE_INFO.mobileHelpline}`} className="text-xs sm:text-sm font-bold text-[#172B4D] hover:text-[#2878A5]">
                      {COLLEGE_INFO.mobileHelpline} / {COLLEGE_INFO.phoneNumbers[0]}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#2A8C83] shrink-0" />
                  <div>
                    <div className="text-[11px] text-gray-400 font-semibold uppercase">Official Admissions Email</div>
                    <a href={`mailto:${COLLEGE_INFO.admissionsEmail}`} className="text-xs sm:text-sm font-bold text-[#172B4D] hover:text-[#2878A5]">
                      {COLLEGE_INFO.admissionsEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C5A45D] shrink-0" />
                  <div>
                    <div className="text-[11px] text-gray-400 font-semibold uppercase">Office Working Hours</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700">
                      {COLLEGE_INFO.officeHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp & Call Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/919482155678?text=Hello%20Apex%20Nursing%20College,%20I%20would%20like%20to%20enquire%20about%20Admissions%202026`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Chat
                </a>

                <a
                  href={`tel:${COLLEGE_INFO.mobileHelpline}`}
                  className="py-2.5 px-3 rounded-xl bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" /> Instant Call
                </a>
              </div>
            </div>

            {/* Google Map Mock/Embed preview */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 aspect-[16/9] relative group">
              <iframe
                title="Apex Nursing College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124443.34444569566!2d77.58!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e55555555%3A0x123456789!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-md border border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#172B4D]">Apex Health City Campus</div>
                  <div className="text-[10px] text-gray-500">Sarjapur - Electronic City Corridor</div>
                </div>
                <button
                  onClick={onOpenVisit}
                  className="px-2.5 py-1 rounded-lg bg-[#172B4D] text-white text-[11px] font-bold"
                >
                  Book Visit
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Admission Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAFBFC] rounded-3xl p-6 sm:p-9 border border-gray-200 shadow-sm">
            <div className="mb-6">
              <div className="text-xs font-bold text-[#2A8C83] uppercase tracking-wider">
                Fast-Track Enquiry Form
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#172B4D] mt-1">
                Request Course Information or Call Back
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill this simple form and our admissions advisor will contact you within 2 working hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for your interest in Apex National College of Nursing. An admissions advisor has been assigned to assist you with curriculum, hostel details, and fee structure.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', course: 'B.Sc. Nursing (Basic)', message: '' });
                    }}
                    className="text-xs font-bold text-emerald-700 underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                      Programme of Interest *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Questions / Additional Enquiry (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about hostel accommodation, scholarships, clinical rotations, or transport..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-800 focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
                  />
                </div>

                <div className="text-[11px] text-gray-500">
                  🔒 Your contact information will strictly be used for academic counseling in compliance with student data privacy laws.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#172B4D] to-[#2878A5] hover:from-[#2878A5] hover:to-[#2A8C83] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Admission Enquiry
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
              <span>Looking for immediate admission guidance?</span>
              <button
                onClick={onOpenVisit}
                className="font-bold text-[#2878A5] hover:underline flex items-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5" /> Book Official Campus Walk-Through
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
