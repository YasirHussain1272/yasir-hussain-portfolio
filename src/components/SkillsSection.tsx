import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Cloud, 
  Workflow, 
  Database, 
  BarChart2, 
  Server, 
  Radio, 
  Layers,
  Sparkles
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: <Code2 size={18} className="text-emerald-400" />,
      skills: ["Python", "TypeScript", "JavaScript (ES6+)", "C++", "SQL"],
      focus: "High-performance data manipulation, scripting & systems code"
    },
    {
      category: "AI & ML",
      icon: <BrainCircuit size={18} className="text-cyan-400" />,
      skills: ["Computer Vision & NLP", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain & LangGraph (RAG)"],
      focus: "Deep learning models, GANs, RAG pipelines & vision systems"
    },
    {
      category: "Deployment & Cloud",
      icon: <Cloud size={18} className="text-blue-400" />,
      skills: ["React & Django", "Flask & FastAPI", "Docker", "CI/CD (GitHub Actions)", "Azure"],
      focus: "Containerization, API endpoints, microservices & cloud deployment"
    },
    {
      category: "Automation & Integration",
      icon: <Workflow size={18} className="text-purple-400" />,
      skills: ["Power Automate", "Zapier", "n8n", "API Automation", "Agent Flow"],
      focus: "Enterprise workflow automation, webhook flows & LLM agents"
    },
    {
      category: "Data Engineering & Processing",
      icon: <Database size={18} className="text-amber-400" />,
      skills: ["ETL/ELT Pipelines", "Data Cleaning", "Data Transformation", "Data Integration", "Data Insight"],
      focus: "Automated batch processing, feature stores & data quality assurance"
    },
    {
      category: "Data & BI",
      icon: <BarChart2 size={18} className="text-rose-400" />,
      skills: ["Power BI", "Tableau", "DAX", "Dataverse", "SQL Server"],
      focus: "Executive dashboards, financial and demographic data modeling"
    },
    {
      category: "Databases & Platforms",
      icon: <Server size={18} className="text-teal-400" />,
      skills: ["SQL (MySQL)", "Dataverse", "SharePoint", "MongoDB", "Power Platform"],
      focus: "Relational, document, and enterprise content repositories"
    },
    {
      category: "Avionics & Autonomous UAV",
      icon: <Radio size={18} className="text-emerald-300" />,
      skills: ["ArduPilot (QuadPlane/Copter)", "Mission Planner & QGC", "Betaflight 4.5 & RPM Notch", "Cube Orange+ / Pixhawk", "MAVLink Telemetry & RTK"],
      focus: "Multirotor, fixed-wing & VTOL flight controller integration"
    }
  ];

  return (
    <section id="skills" className="hero-details-strip" style={{ paddingTop: '0' }}>
      <div className="hero-section-card">
        {/* Section Header */}
        <div className="hero-section-header">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2 mb-1.5">
              <Layers size={14} />
              <span>Full Engineering Matrix</span>
            </div>
            <h2 className="hero-section-title">Technical Skills & Toolchain</h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            LANGUAGES · AI & ML · DATA & BI · AUTOMATION · AVIONICS
          </div>
        </div>

        {/* 8-Category Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {skillsData.map((cat, index) => (
            <div 
              key={index} 
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-400 mb-3.5 leading-relaxed">
                  {cat.focus}
                </p>

                {/* Clean unboxed bullet list adhering to anti-slop guidelines */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-mono text-[10px] mt-0.5">▸</span>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                PROVEN EXPERTISE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
