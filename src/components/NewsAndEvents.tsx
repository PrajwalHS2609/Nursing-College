import React, { useState } from 'react';
import { Calendar, Bell, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { NEWS_DATA, NewsItem } from '../data/collegeData';

interface NewsAndEventsProps {
  onOpenApply: () => void;
}

export const NewsAndEvents: React.FC<NewsAndEventsProps> = ({ onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = ['All', 'Admissions', 'Academic', 'Clinical', 'Events'];

  const filteredNews = selectedCategory === 'All' 
    ? NEWS_DATA 
    : NEWS_DATA.filter(n => n.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
              <Bell className="w-3.5 h-3.5" /> Campus Bulletins & Activities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight">
              News, Announcements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">College Events</span>.
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Stay informed with official examination calendars, admission dates, clinical camps, and academic breakthroughs.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#172B4D] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="p-6 rounded-3xl bg-[#FAFBFC] border border-gray-200/90 hover:border-[#2878A5]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    item.category === 'Admissions' ? 'bg-amber-100 text-amber-800' : 'bg-[#E5F1ED] text-[#2A8C83]'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.readTime}
                  </span>
                </div>

                <div className="text-xs text-gray-400 font-medium mb-1">
                  {item.date}
                </div>

                <h3 className="text-base font-bold font-heading text-[#172B4D] group-hover:text-[#2878A5] transition-colors leading-snug">
                  {item.headline}
                </h3>

                <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold text-[#2878A5] group-hover:text-[#172B4D]">
                <span>Read Full Circular</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Article Detail */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#E5F1ED] text-[#2A8C83]">
                  {activeArticle.category} • {activeArticle.date}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-gray-400 hover:text-gray-700 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl font-bold font-heading text-[#172B4D] mt-4 leading-snug">
                {activeArticle.headline}
              </h3>

              <div className="mt-4 text-sm text-gray-600 leading-relaxed space-y-3">
                <p>{activeArticle.summary}</p>
                <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  Issued by the Academic Dean & Office of the Principal, Apex National College of Nursing & Research Sciences. For further clarifications, please contact the institutional registrar desk.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  Close
                </button>
                {activeArticle.category === 'Admissions' && (
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenApply();
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2878A5] hover:bg-[#172B4D]"
                  >
                    Proceed to Application
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
