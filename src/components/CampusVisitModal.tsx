import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MapPin, Users, Phone, ArrowRight } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface CampusVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVisitModal: React.FC<CampusVisitModalProps> = ({ isOpen, onClose }) => {
  const [visitedSubmitted, setVisitedSubmitted] = useState(false);
  const [visitData, setVisitData] = useState({
    name: '',
    phone: '',
    date: '2026-11-20',
    timeSlot: '10:30 AM - 12:00 PM',
    attendees: '2 Persons (Student + Parent)',
    programme: 'B.Sc. Nursing',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitedSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 my-6 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#172B4D] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#2A8C83] text-white text-[11px] font-bold uppercase tracking-wider">
              Guided Tour
            </span>
            <span className="text-xs text-gray-300">
              Personalized Counselor Escort
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Schedule a Guided Campus & Lab Visit
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Experience our 1200-bed hospital, high-fidelity simulation suites, and student hostels firsthand.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-[#303844]">
          {visitedSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-900">
                Campus Visit Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                We look forward to welcoming you, <strong>{visitData.name}</strong>, on <strong>{visitData.date}</strong> at <strong>{visitData.timeSlot}</strong>.
              </p>
              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-gray-700 text-left space-y-1">
                <div><strong>Location:</strong> Apex Health City Campus, Sarjapur-Electronic City Road</div>
                <div><strong>Counselor Desk:</strong> Block A, Admissions Reception</div>
                <div><strong>Helpline:</strong> {COLLEGE_INFO.mobileHelpline}</div>
              </div>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                  Visitor Name (Student / Parent) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Mathew"
                  value={visitData.name}
                  onChange={(e) => setVisitData({ ...visitData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                  Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={visitData.phone}
                  onChange={(e) => setVisitData({ ...visitData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={visitData.date}
                    onChange={(e) => setVisitData({ ...visitData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Time Window *
                  </label>
                  <select
                    value={visitData.timeSlot}
                    onChange={(e) => setVisitData({ ...visitData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  >
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                    <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                    <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM</option>
                    <option value="03:30 PM - 05:00 PM">03:30 PM - 05:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Course of Primary Interest
                  </label>
                  <select
                    value={visitData.programme}
                    onChange={(e) => setVisitData({ ...visitData, programme: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  >
                    <option value="B.Sc. Nursing">B.Sc. Nursing (Basic)</option>
                    <option value="GNM">GNM (General Nursing)</option>
                    <option value="Post Basic B.Sc.">Post Basic B.Sc. Nursing</option>
                    <option value="M.Sc. Nursing">M.Sc. Nursing (Specialties)</option>
                    <option value="ANM">ANM</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Number of Attendees
                  </label>
                  <select
                    value={visitData.attendees}
                    onChange={(e) => setVisitData({ ...visitData, attendees: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  >
                    <option value="1 Person (Student)">1 Person (Student)</option>
                    <option value="2 Persons (Student + Parent)">2 Persons (Student + Parent)</option>
                    <option value="3+ Family Members">3+ Family Members</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2878A5] shrink-0" />
                <span>Complimentary parking and counselor consultation included.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-md flex items-center justify-center gap-2"
              >
                Confirm Campus Visit Booking <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center">
          Office Hours: Monday – Saturday, 8:30 AM to 5:30 PM (IST)
        </div>

      </div>
    </div>
  );
};
