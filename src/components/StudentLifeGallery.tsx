import React, { useState } from 'react';
import { 
  Heart, Sparkles, Award, Users2, Calendar, 
  MapPin, CheckCircle2, ChevronRight, Image as ImageIcon
} from 'lucide-react';

export const StudentLifeGallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Ceremonial' | 'Community' | 'Hostel' | 'Sports'>('All');

  const galleryItems = [
    {
      id: 1,
      title: "Annual Lamp Lighting & Oath Ceremony",
      category: "Ceremonial",
      desc: "First-year nursing students receiving the ceremonial lamp and taking the Florence Nightingale pledge.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      date: "October 2026",
    },
    {
      id: 2,
      title: "Rural Health & Immunization Outreach",
      category: "Community",
      desc: "Door-to-door child health assessment and maternal nutrition drive in Sarjapur rural villages.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=80",
      date: "September 2026",
    },
    {
      id: 3,
      title: "Pediatric Simulation & OSCE Workshop",
      category: "Ceremonial",
      desc: "Interactive hands-on clinical skills demonstration in the child health simulation center.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&auto=format&fit=crop&q=80",
      date: "August 2026",
    },
    {
      id: 4,
      title: "Safe Hostel Life & Dining Facilities",
      category: "Hostel",
      desc: "Separate high-security residential wings with Wi-Fi study halls and nutritious meal mess.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80",
      date: "Year-Round",
    },
    {
      id: 5,
      title: "Inter-College Sports & Athletics Meet",
      category: "Sports",
      desc: "Annual athletic tournament emphasizing physical endurance, teamwork, and student wellness.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
      date: "July 2026",
    },
    {
      id: 6,
      title: "World Health Day Awareness Rally",
      category: "Community",
      desc: "Student Nurses Association (SNA) street-play and rally raising hypertension awareness.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80",
      date: "April 2026",
    },
  ];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="student-life" className="py-16 lg:py-24 bg-[#FAFBFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Users2 className="w-3.5 h-3.5" /> Campus Life & Student Development
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Grow Academically. Build Confidence. <br />
            <span className="font-editorial italic font-normal text-[#2878A5]">Create Lifelong Connections.</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Student life at Apex balances academic rigor with vibrant cultural celebrations, community public health initiatives, active sports, and the prestigious Student Nurses Association (SNA).
          </p>
        </div>

        {/* Gallery Filter Navigation */}
        <div className="flex items-center gap-2 pb-6 border-b border-gray-200 overflow-x-auto mb-8">
          {[
            { id: 'All', label: 'All Campus Moments' },
            { id: 'Ceremonial', label: 'Lamp Lighting & Ceremonies' },
            { id: 'Community', label: 'Rural Health Camps' },
            { id: 'Hostel', label: 'Hostel & Residential Life' },
            { id: 'Sports', label: 'Sports & Cultural Fests' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                filter === tab.id
                  ? 'bg-[#172B4D] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#172B4D] shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] text-gray-400 font-medium">{item.date}</div>
                  <h4 className="text-base font-bold text-[#172B4D] font-heading mt-0.5 group-hover:text-[#2878A5] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Welfare & Anti-Ragging Assurance Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#172B4D] font-heading">
              100% Anti-Ragging Compliant Campus
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
              Strict compliance with Supreme Court of India directives and UGC/INC Anti-Ragging regulations. Monitored 24x7 by dedicated faculty wardens and CCTV systems.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              Zero Tolerance Policy
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
