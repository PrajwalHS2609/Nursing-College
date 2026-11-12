import React, { useState } from 'react';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, 
  FileText, Upload, Printer, Download, User, BookOpen, HeartHandshake
} from 'lucide-react';
import { COURSES_DATA, COLLEGE_INFO } from '../data/collegeData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
  onOpenProspectus: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId,
  onOpenProspectus,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'Female',
    email: '',
    phone: '',
    parentName: '',
    parentPhone: '',
    state: 'Karnataka',
    city: 'Bengaluru',
    courseId: defaultCourseId || 'bsc-nursing',
    highestQual: '10+2 (Science - PCB)',
    marksPercentage: '68',
    requiresHostel: 'yes',
    transportRequired: 'no',
    declarationChecked: true,
  });

  const [applicationId, setApplicationId] = useState<string>('');

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Generate unique application ID
      const randomId = `ANCN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setApplicationId(randomId);
      setCurrentStep(4);
    }
  };

  const selectedCourse = COURSES_DATA.find(c => c.id === formData.courseId) || COURSES_DATA[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 my-6 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#172B4D] via-[#2878A5] to-[#2A8C83] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close form"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C5A45D] text-[#172B4D] text-[11px] font-bold uppercase tracking-wider">
              Academic Year 2026–2027
            </span>
            <span className="text-xs text-white/80">
              Direct Institutional Merit Admission
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold font-heading">
            Official Nursing Admission Application
          </h3>
          <p className="text-xs text-gray-200 mt-0.5">
            Apex National College of Nursing & Research Sciences (INC Code: 18-12/2004)
          </p>

          {/* Stepper Bar */}
          {currentStep < 4 && (
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/20 text-xs">
              {[
                { s: 1, title: 'Personal & Guardian' },
                { s: 2, title: 'Course & Academics' },
                { s: 3, title: 'Hostel & Verification' },
              ].map((st) => (
                <div key={st.s} className="flex items-center gap-1.5 flex-1">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    currentStep >= st.s ? 'bg-amber-300 text-[#172B4D]' : 'bg-white/20 text-white'
                  }`}>
                    {st.s}
                  </div>
                  <span className={`hidden sm:inline font-medium text-[11px] ${
                    currentStep === st.s ? 'text-white font-bold' : 'text-white/60'
                  }`}>
                    {st.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 text-[#303844]">
          
          {/* STEP 1: Personal & Guardian Details */}
          {currentStep === 1 && (
            <form id="app-step-1" onSubmit={handleNext} className="space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Step 1 of 3: Applicant & Parent Information
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                  Candidate Full Name (As per 10th/SSLC Marks Card) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Mathew"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Candidate Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Candidate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Father / Mother Name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Parent Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    State of Domicile *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>
              </div>
            </form>
          )}

          {/* STEP 2: Course & Academics */}
          {currentStep === 2 && (
            <form id="app-step-2" onSubmit={handleNext} className="space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Step 2 of 3: Academic Qualifications & Course Selection
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                  Select Nursing Programme for 2026–27 Admission *
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#2878A5] text-sm font-bold text-[#172B4D] bg-[#E5F1ED]/30"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.duration} - {c.intakeCapacity} Seats)
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Overview Mini Box */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600">
                <div className="font-bold text-[#172B4D]">{selectedCourse.name}</div>
                <div className="mt-0.5">{selectedCourse.eligibility}</div>
                <div className="text-[#2A8C83] font-semibold mt-1">
                  Approx. Tuition: {selectedCourse.annualTuitionApprox}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Highest Educational Exam Passed *
                  </label>
                  <select
                    value={formData.highestQual}
                    onChange={(e) => setFormData({ ...formData, highestQual: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  >
                    <option value="10+2 (Science - PCB)">10+2 / Pre-University (PCB)</option>
                    <option value="10+2 (Arts/Commerce)">10+2 / Pre-University (Arts/Commerce)</option>
                    <option value="GNM Diploma">GNM Diploma in Nursing & Midwifery</option>
                    <option value="B.Sc. Nursing">B.Sc. Nursing Graduate</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider">
                    Aggregate Marks / Percentage % *
                  </label>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    required
                    value={formData.marksPercentage}
                    onChange={(e) => setFormData({ ...formData, marksPercentage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2878A5]"
                  />
                </div>
              </div>

              {/* Document upload simulation */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-300 text-center space-y-2">
                <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                <div className="text-xs font-bold text-gray-700">
                  Upload 10+2 / Marksheet Copy (Optional for initial provisional screening)
                </div>
                <div className="text-[11px] text-gray-400">
                  PDF or JPG format (Max 5MB). You may also bring originals during campus verification.
                </div>
                <button
                  type="button"
                  onClick={() => alert("Document attached for verification.")}
                  className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Choose File
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Hostel & Declaration */}
          {currentStep === 3 && (
            <form id="app-step-3" onSubmit={handleNext} className="space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Step 3 of 3: Hostel Accommodation & Candidate Declaration
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider block">
                    Do you require on-campus Hostel & Mess accommodation?
                  </label>
                  <div className="flex gap-4 text-xs font-semibold">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="hostel"
                        checked={formData.requiresHostel === 'yes'}
                        onChange={() => setFormData({ ...formData, requiresHostel: 'yes' })}
                        className="accent-[#2878A5]"
                      />
                      <span>Yes (Separate Boys/Girls Hostel)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="hostel"
                        checked={formData.requiresHostel === 'no'}
                        onChange={() => setFormData({ ...formData, requiresHostel: 'no' })}
                        className="accent-[#2878A5]"
                      />
                      <span>No (Day Scholar)</span>
                    </label>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <label className="text-xs font-bold text-[#172B4D] uppercase tracking-wider block">
                    College Bus Transportation Required?
                  </label>
                  <div className="flex gap-4 text-xs font-semibold">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        checked={formData.transportRequired === 'yes'}
                        onChange={() => setFormData({ ...formData, transportRequired: 'yes' })}
                        className="accent-[#2878A5]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        checked={formData.transportRequired === 'no'}
                        onChange={() => setFormData({ ...formData, transportRequired: 'no' })}
                        className="accent-[#2878A5]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 text-xs text-amber-900">
                <div className="font-bold">Applicant Declaration & Terms:</div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.declarationChecked}
                    onChange={(e) => setFormData({ ...formData, declarationChecked: e.target.checked })}
                    className="accent-[#2878A5] mt-0.5"
                  />
                  <span>
                    I hereby declare that all entries made in this application are correct to the best of my knowledge and I satisfy the eligibility conditions laid down by the Indian Nursing Council (INC) & Rajiv Gandhi University of Health Sciences (RGUHS).
                  </span>
                </label>
              </div>
            </form>
          )}

          {/* STEP 4: Success Confirmation Slip */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Provisional Application Registered
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#172B4D] mt-2">
                  Congratulations, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-md mx-auto">
                  Your admission enquiry and merit enrollment for <strong>{selectedCourse.name}</strong> has been logged in our academic database.
                </p>
              </div>

              {/* Printable Acknowledgement Card */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Application Number:</span>
                  <span className="font-mono font-bold text-base text-[#2878A5]">{applicationId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Candidate Name:</span>
                  <span className="font-semibold text-gray-800">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Course Applied:</span>
                  <span className="font-semibold text-gray-800">{selectedCourse.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Contact Mobile:</span>
                  <span className="font-semibold text-gray-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Hostel Requested:</span>
                  <span className="font-semibold text-gray-800">{formData.requiresHostel === 'yes' ? 'Yes' : 'No'}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" /> Print Registration Slip
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenProspectus();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2878A5] hover:bg-[#172B4D] flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" /> Download Prospectus
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {currentStep < 4 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((currentStep - 1) as any)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <span className="text-xs text-gray-500">
                Helpline: <strong>+91 94821 55678</strong>
              </span>
            )}

            <button
              type="submit"
              form={`app-step-${currentStep}`}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2878A5] to-[#2A8C83] hover:from-[#172B4D] hover:to-[#2878A5] shadow-md flex items-center gap-1.5"
            >
              {currentStep === 3 ? 'Submit Application' : 'Continue to Next Step'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
