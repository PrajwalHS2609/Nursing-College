import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Phone, Mail, ArrowRight } from 'lucide-react';
import { FAQ_DATA, FAQItem, COLLEGE_INFO } from '../data/collegeData';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_DATA[0].id);

  const categories = ['All', 'Admissions', 'Courses', 'Clinical & Hostels', 'Career & Overseas'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAFBFC] border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#172B4D] tracking-tight">
            Clear Answers for Students & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">Parents</span>.
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Find answers regarding INC recognition, B.Sc. vs GNM differences, eligibility criteria, hostels, and overseas registration.
          </p>
        </div>

        {/* Search Input & Category Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search any query (e.g., eligibility, hostel, UK placement, fees)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm text-[#172B4D] placeholder-gray-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2878A5]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#172B4D] text-white shadow-xs'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-gray-200 text-gray-500 text-sm">
              No matching answers found for "{searchQuery}". Please call our admissions counselor at {COLLEGE_INFO.mobileHelpline}.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                      isExpanded ? 'text-[#2878A5]' : 'text-[#172B4D] group-hover:text-[#2878A5]'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#2878A5]' : ''
                    }`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-[#FAFBFC]/50 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Help Banner Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div className="space-y-0.5">
            <h4 className="text-sm sm:text-base font-bold text-[#172B4D]">
              Have a specific question not addressed above?
            </h4>
            <p className="text-xs text-gray-500">
              Our academic advisors are available on call and WhatsApp throughout the week.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COLLEGE_INFO.mobileHelpline}`}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#172B4D] hover:bg-[#2878A5] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Call Helpline
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
