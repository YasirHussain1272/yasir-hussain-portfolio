import React from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  Building2, 
  Layers, 
  ArrowRight,
  BrainCircuit,
  Database
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const experiences = [
    {
      role: "Avionic & System Engineer",
      company: "Beta",
      period: "04/2026 - Present",
      status: "Current",
      description: "Leading UAV avionics integration, flight-controller tuning (ArduPilot/Betaflight), sensor calibration (RTK GNSS, Pitot-static airspeed, CAN compass), and fail-safe autonomous systems across multirotor, fixed-wing, and VTOL platforms.",
      skills: ["ArduPilot", "Mission Planner", "VTOL Avionics", "Betaflight", "Telemetry Ingestion"]
    },
    {
      role: "Model Training (Content Analyst)",
      company: "Turing (Meta)",
      period: "05/2025 - 08/2025",
      status: "Completed",
      description: "Fine-tuned and evaluated cutting-edge large language models (LLMs) with high-quality alignment data, prompt engineering, RLHF scoring, and semantic reasoning evaluation.",
      skills: ["LLM Alignment", "RLHF", "NLP", "Prompt Engineering", "Data Quality"]
    },
    {
      role: "Power Platform & SharePoint Developer",
      company: "Numrex",
      period: "11/2024 - 12/2025",
      status: "Completed",
      description: "Architected enterprise automated workflows, Power Apps solutions, SharePoint data architectures, and automated business process integration using Dataverse and Power Automate.",
      skills: ["Power Automate", "Power Apps", "SharePoint", "Dataverse", "API Integration"]
    },
    {
      role: "Power BI Dashboard Developer",
      company: "Activision",
      period: "06/2024 - 08/2024",
      status: "Completed",
      description: "Engineered high-performance interactive executive business intelligence dashboards, DAX calculations, and cross-functional telemetry tracking for large-scale user datasets.",
      skills: ["Power BI", "DAX", "Data Modeling", "ETL", "Tableau"]
    },
    {
      role: "Data Science Intern",
      company: "CodSoft",
      period: "05/2023 - 08/2023",
      status: "Completed",
      description: "Developed machine learning predictive models, exploratory data analysis (EDA), data cleaning pipelines, and predictive algorithms in Python.",
      skills: ["Python", "Scikit-Learn", "Data Cleaning", "Pandas", "Matplotlib"]
    }
  ];

  return (
    <section id="about" className="hero-details-strip">
      <div className="hero-section-card">
        {/* Section Header */}
        <div className="hero-section-header">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2 mb-1.5">
              <User size={14} />
              <span>Background & Career Timeline</span>
            </div>
            <h2 className="hero-section-title">About Engr. Yasir Hussain</h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            COMPUTER SYSTEMS ENGINEER · 2+ YEARS IN DATA & AI
          </div>
        </div>

        {/* 2-Column Split: Detailed Bio on Left, Journey Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Left Column: Bio Prose & Focus Areas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                I am <strong className="text-white font-semibold">Engr. Yasir Hussain</strong>, a Computer Systems Engineer with strong expertise in 
                <strong className="text-emerald-300 font-medium"> Data Science, Machine Learning, Deep Learning, NLP, Computer Vision, and Data Engineering</strong>. 
                With hands-on experience in Python, SQL, TensorFlow/Keras, Power BI, Tableau, and end-to-end ML pipelines, I have engineered real-world solutions including 
                face sketch–to–image generation using GANs, fake news detection using BERT, audio emotion recognition, OCR-based feature extraction, and RAG-based legal chatbots.
              </p>

              <p>
                I have <strong className="text-white font-medium">2+ years of experience as a Data Analyst and Data Scientist</strong>, with skills in statistical analysis, 
                data visualization, ETL pipelines, and building AI-powered applications. I am also experienced with 
                <strong className="text-cyan-300 font-medium"> LangChain, LangGraph, and building RAG systems using vector databases like Pinecone and Weaviate</strong>.
              </p>

              <p>
                My passion lies in solving complex problems, exploring data deeply, and building scalable AI/ML solutions. I am continuously learning, 
                contributing to open engineering projects, and working toward opportunities in data, AI engineering, avionics autonomy, and cloud-based systems.
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-emerald-400 font-medium text-sm">
                <Sparkles size={16} />
                <span>Let's build something exceptional together.</span>
              </div>
            </div>

            {/* Quick Experience Badges (Clean unboxed figures) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="font-mono text-xl font-bold text-white">2+</div>
                <div className="text-[11px] text-slate-400 mt-1">Years Data & AI</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="font-mono text-xl font-bold text-emerald-400">9+</div>
                <div className="text-[11px] text-slate-400 mt-1">Projects Built</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="font-mono text-xl font-bold text-cyan-400">3+</div>
                <div className="text-[11px] text-slate-400 mt-1">UAV Platforms</div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase size={16} className="text-emerald-400" />
                <span>My Journey</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">CHRONOLOGICAL RECORD</span>
            </div>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-emerald-400 before:via-cyan-400/50 before:to-slate-800">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node on Timeline */}
                  <div className={`absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    exp.status === 'Current' 
                      ? 'bg-emerald-400 border-[#080c14] ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/50' 
                      : 'bg-slate-900 border-slate-600 group-hover:border-emerald-400'
                  }`} />

                  {/* Timeline Card */}
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-emerald-400">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                      <Building2 size={13} className="text-slate-500" />
                      <span>{exp.company}</span>
                      {exp.status === 'Current' && (
                        <>
                          <span>·</span>
                          <span className="text-emerald-400 font-mono text-[10px] uppercase">Active Role</span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-800/60">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[11px] font-mono text-cyan-300/90">
                          {s}{sIdx < exp.skills.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
