import React, { useState } from 'react';
import { 
  HeartHandshake, Building2, Stethoscope, ShieldCheck, 
  Activity, Users2, AlertTriangle, ArrowRight, CheckCircle2, BedDouble
} from 'lucide-react';
import { CLINICAL_PARTNERS_DATA } from '../data/collegeData';

interface ClinicalTrainingProps {
  onOpenApply: () => void;
}

export const ClinicalTraining: React.FC<ClinicalTrainingProps> = ({ onOpenApply }) => {
  const [activeSpecialty, setActiveSpecialty] = useState<number>(0);

  const clinicalRotations = [
    {
      title: "Medical-Surgical & Intensive Care (ICU/CCU)",
      hours: "1,100 Hours",
      skills: ["Multi-parameter cardiac monitoring", "Ventilator mechanics & tracheostomy suctioning", "Arterial blood gas (ABG) sampling & triage", "Post-operative surgical wound asepsis"],
      departments: ["Medical ICU", "Surgical ICU", "Burns Unit", "Cardiothoracic OT"],
    },
    {
      title: "Obstetrics, Midwifery & Newborn Care",
      hours: "650 Hours",
      skills: ["Supervised normal vaginal deliveries (minimum 20 cases)", "Episiotomy suturing & active third stage management", "Cardiotocography (CTG) foetal heart tracing", "Neonatal APGAR scoring and resuscitation"],
      departments: ["Labour Room", "Post-Natal Ward", "Antenatal OPD", "Neonatal ICU (NICU)"],
    },
    {
      title: "Child Health & Paediatrics (PICU)",
      hours: "450 Hours",
      skills: ["Pediatric body-surface area drug calculation", "Neonatal phototherapy and incubator management", "Growth and development milestone charting", "Pediatric intravenous cannulation"],
      departments: ["Paediatric Medical Ward", "Paediatric Surgical ICU", "Immunization Clinic"],
    },
    {
      title: "Community Health & Rural Field Postings",
      hours: "600 Hours",
      skills: ["Door-to-door epidemiological health surveys", "Primary maternal & child health counseling", "Pulse polio & national health program execution", "School health check-up and hygiene camps"],
      departments: ["Primary Health Centre (PHC)", "Community Health Centre (CHC)", "Rural Outreach"],
    },
    {
      title: "Mental Health & Psychiatric Nursing",
      hours: "350 Hours",
      skills: ["Mental status examination (MSE) administration", "Therapeutic nurse-patient relationship building", "De-escalation of acute psychiatric agitation", "Electro-convulsive therapy (ECT) pre/post care"],
      departments: ["Psychiatric Inpatient Ward", "De-Addiction Centre", "Crisis Intervention OPD"],
    },
  ];

  return (
    <section id="clinical-training" className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1ED] text-[#2A8C83] text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5" /> Hands-On Clinical Immersion
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#172B4D] tracking-tight leading-tight">
            Learn Beyond the Classroom. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878A5] to-[#2A8C83]">
              Experience Real Healthcare Environments.
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Nursing excellence cannot be forged on chalkboards alone. Our students train across 1,200+ multi-specialty beds under direct bedside clinical supervisors, cultivating patient safety consciousness and ethical composure.
          </p>
        </div>

        {/* 6 Key Clinical Competencies Students Master */}
        <div className="mb-14">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Core Professional Competencies You Will Develop
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: "Direct Patient Care", desc: "Empathetic, compassionate bedside attention" },
              { title: "Clinical Observation", desc: "Early warning detection of critical deterioration" },
              { title: "Patient Safety & Asepsis", desc: "Strict adherence to NABH & WHO infection control" },
              { title: "Emergency Triage", desc: "Calm rapid response in crash situations" },
              { title: "Clear Communication", desc: "Doctor-nurse-patient therapeutic rapport" },
              { title: "Professional Ethics", desc: "Preserving patient confidentiality & dignity" },
            ].map((comp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                <CheckCircle2 className="w-5 h-5 text-[#2A8C83]" />
                <h4 className="text-xs sm:text-sm font-bold text-[#172B4D] pt-1">{comp.title}</h4>
                <p className="text-[11px] text-gray-500 leading-tight">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Rotations Interactive Tab System */}
        <div className="bg-[#FAFBFC] border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div>
              <span className="text-xs font-bold text-[#2878A5] uppercase tracking-wider">
                Prescribed INC Rotational Postings
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#172B4D]">
                Specialty Clinical Rotation Modules
              </h3>
            </div>
            <div className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-xl border border-gray-200">
              Total Clinical Training: <strong>3,200+ Hours</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            {/* Rotation Selector */}
            <div className="lg:col-span-5 space-y-2">
              {clinicalRotations.map((rot, idx) => {
                const isActive = activeSpecialty === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSpecialty(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-white border-[#2878A5] shadow-md text-[#2878A5] font-bold'
                        : 'bg-white/60 hover:bg-white border-gray-200 text-[#172B4D]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{rot.title}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 font-semibold shrink-0 ml-2">
                      {rot.hours}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Rotation Deep-Dive Info */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base sm:text-lg font-bold text-[#172B4D] font-heading">
                  {clinicalRotations[activeSpecialty].title}
                </h4>
                <span className="text-xs font-bold text-[#2A8C83] bg-[#E5F1ED] px-3 py-1 rounded-full">
                  {clinicalRotations[activeSpecialty].hours}
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Hands-On Clinical Skills Mastered
                </div>
                <div className="space-y-2">
                  {clinicalRotations[activeSpecialty].skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2A8C83] mt-1.5 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Designated Clinical Postings
                </div>
                <div className="flex flex-wrap gap-2">
                  {clinicalRotations[activeSpecialty].departments.map((dept, dIdx) => (
                    <span key={dIdx} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 11: Hospital Affiliations & Clinical Network */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#2A8C83] uppercase tracking-wider">
              Documented Hospital Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#172B4D] mt-1">
              Affiliated Teaching Hospitals & Training Centres
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Verified clinical partnerships ensuring students experience high patient footfalls across tertiary, government, oncology, and rural health networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLINICAL_PARTNERS_DATA.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAFBFC] border border-gray-200/90 hover:border-[#2878A5]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#172B4D] text-white text-[11px] font-bold">
                      {partner.logoText}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2A8C83]">
                      <BedDouble className="w-3.5 h-3.5" /> {partner.beds} Beds
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#172B4D] font-heading">
                    {partner.name}
                  </h4>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {partner.type} • {partner.location}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Speciality Clinical Exposures
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded text-[11px] bg-white border border-gray-200 text-gray-600">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 text-[11px] text-gray-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified MoU & INC Clinical Affiliation
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
