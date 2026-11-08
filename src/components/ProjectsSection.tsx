import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Plane, 
  Cpu, 
  BrainCircuit, 
  Terminal, 
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  X,
  BarChart3,
  Search,
  Eye
} from 'lucide-react';
import { RiGithubLine } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

export interface ProjectItem {
  id: string;
  category: 'cv-ml' | 'genai' | 'bi' | 'avionics';
  title: string;
  discipline: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  metrics?: string;
  highlights?: string[];
}

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cv-ml' | 'genai' | 'bi' | 'avionics'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projectsData: ProjectItem[] = [
    {
      id: "bike-entry-system",
      category: "cv-ml",
      discipline: "Computer Vision & Security",
      title: "Security System for Bike Entry",
      description: "Deployed an automated computer vision system using YOLOv8 and OpenCV for real-time motorcycle and bike entry detection. Achieved 91% detection accuracy and dramatically improved campus and facility security surveillance monitoring.",
      tags: ["Python", "Computer Vision", "YOLOv8", "OpenCV", "Flask", "Google Colab"],
      github: "https://github.com/YasirHussain1272/-IUB-Security-System-for-bike-entry-or-not",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_ml-ai-campusabrsecurity-activity-7206202284526022656-nwJV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "91% Detection Accuracy",
      highlights: [
        "Trained custom YOLOv8 model for two-wheeler vehicular detection",
        "OpenCV pipeline for license plate and bounding box tracking",
        "Lightweight Flask API endpoint for camera feed ingestion"
      ]
    },
    {
      id: "forensic-art-enhancement",
      category: "genai",
      discipline: "Generative AI & Deep Learning",
      title: "Forensic Art Enhancement",
      description: "Implemented Deep Convolutional Generative Adversarial Networks (DCGAN) to reconstruct and photorealistically enhance forensic facial composites from pencil sketches, improving image resolution for criminal identification processes.",
      tags: ["Gen AI", "Computer Vision", "Python", "GANs (DCGAN)", "TensorFlow", "PyTorch"],
      github: "https://github.com/YasirHussain1272/Sketch-to-real-image-",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_deeplearning-ai-forensicscience-activity-7235254081911480322-KmtM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "Photorealistic Sketch Reconstruction",
      highlights: [
        "DCGAN generator-discriminator adversarial training loop",
        "Facial landmark feature preservation during upscaling",
        "Assists law enforcement with high-resolution suspect composites"
      ]
    },
    {
      id: "legal-chatbot-kpk",
      category: "genai",
      discipline: "NLP & Retrieval-Augmented Generation",
      title: "Legal Chatbot for KPK Police",
      description: "Engineered a production RAG-based Legal Chatbot using LangChain and OpenAI API to assist KPK Police officers with instant legal statute lookups. Indexed extensive legal codes and penal documents into a vector database, reducing legal query resolution time by 50%.",
      tags: ["Gen AI", "NLP", "Python", "RAG", "LangChain", "Vector DB (Pinecone)", "FastAPI"],
      github: "https://github.com/YasirHussain1272",
      live: "https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/",
      metrics: "50% Query Resolution Reduction",
      highlights: [
        "Chunking and embedding of criminal procedure codes and statutes",
        "Semantic similarity search using high-dimensional vector embeddings",
        "Context-grounded prompt engineering preventing hallucinated legal advice"
      ]
    },
    {
      id: "uav-vtol-platform",
      category: "avionics",
      discipline: "Autonomous Flight Systems",
      title: "Autonomous Hybrid VTOL Mapping & Telemetry Platform",
      description: "Configured, wired, and flight-tested an autonomous VTOL UAV platform utilizing ArduPilot QuadPlane firmware and Mission Planner. Engineered automated waypoint navigation, pitot-static airspeed sensor calibration, and fail-safe RTL routines.",
      tags: ["ArduPilot", "Mission Planner", "VTOL Avionics", "Betaflight", "MAVLink", "RTK-GNSS"],
      github: "https://github.com/YasirHussain1272",
      live: "https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/",
      metrics: "60+ Min Autonomous Cruise",
      highlights: [
        "Cube Orange+ flight-controller architecture with dual CAN compasses",
        "Total Energy Control System (TECS) pitch-throttle tuning",
        "In-flight MAVLink telemetry streaming and vibration log analysis"
      ]
    },
    {
      id: "life-expectancy-ml",
      category: "cv-ml",
      discipline: "Predictive Machine Learning",
      title: "Life Expectancy Prediction Models",
      description: "Implemented and compared regression and ensemble machine learning algorithms to model and predict global life expectancy indicators, noting key demographic insights including Pakistan's life expectancy rate of 66.10 years (2021).",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Flask", "Jupyter Notebook", "Pandas"],
      github: "https://github.com/YasirHussain1272/Life-expectancy-prediction-using-Machine-learning-",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_machinelearning-datascience-lifeexpectancy-activity-7207274298053476352-g2Ws?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "Multi-Model Comparative Analysis",
      highlights: [
        "Feature correlation with healthcare expenditure, GDP, and mortality",
        "Interactive Flask web interface for parameter input predictions",
        "Rigorous statistical validation and cross-validation testing"
      ]
    },
    {
      id: "psx-dashboard",
      category: "bi",
      discipline: "Financial Telemetry & Data Insight",
      title: "Pakistan Stock Exchange (PSX) Dashboard",
      description: "Developed a real-time interactive analytical dashboard to monitor stock performance across PSX indices, highlighting historical equity fluctuations between 60% and 90% with automated trend indicators.",
      tags: ["Python", "Streamlit", "Plotly", "Data Insight", "Pandas", "ETL"],
      github: "https://github.com/YasirHussain1272/Pakistan-Stock-Exchange-Dashboard-",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_psx-stockmarket-dataanalysis-activity-7173336592260947969-Uz5N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "60%–90% Volatility Tracking",
      highlights: [
        "Automated scrapers for closing stock indices and volume metrics",
        "Interactive candlestick and moving average technical charts",
        "Instant performance filtering by sector and market capitalization"
      ]
    },
    {
      id: "psl-analytics",
      category: "bi",
      discipline: "Sports Analytics & Telemetry",
      title: "Pakistan Super League (PSL) Analytics Dashboard",
      description: "Established an advanced cricket statistics dashboard analyzing PSL player performances, notably tracking Babar Azam's strike rate increase from 118.6 to 145.4 with boundary rate and phase-of-play breakdowns.",
      tags: ["Python", "Streamlit", "Plotly", "Data Insight", "Cricket Analytics"],
      github: "https://github.com/YasirHussain1272",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_psl-cricketanalytics-datadrivendecisions-activity-7190753735751458817-mtKs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "Strike Rate 118.6 ➔ 145.4 Tracking",
      highlights: [
        "Innings-by-innings ball tracking data modeling",
        "Wagon wheel and wagon zone stroke play distribution visualization",
        "Comparative radar charts across tournament editions"
      ]
    },
    {
      id: "supermarket-bi",
      category: "bi",
      discipline: "Business Intelligence & Retail",
      title: "Supermarket Executive BI Dashboard",
      description: "Generated an enterprise retail BI dashboard visualizing extensive sales and inventory distributions, displaying total sales of 1.87M and net profit of 248.26K with customer demographic segmentation.",
      tags: ["Power BI", "Data Collection", "Data Cleaning", "DAX", "Data Modeling"],
      github: "https://github.com/YasirHussain1272/Supermarket-dashboard-using-PowerBI",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_powerbi-dataanalytics-businessintelligence-activity-7172527936233750528-V1YE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "1.87M Sales · 248.26K Profit",
      highlights: [
        "Complex DAX formulas for Year-over-Year profit margin KPIs",
        "Product line profitability and branch inventory turnover matrix",
        "Interactive cross-filtering by payment method and customer rating"
      ]
    },
    {
      id: "life-expectancy-bi",
      category: "bi",
      discipline: "Global Health Informatics",
      title: "Life Expectancy Power BI Dashboard",
      description: "Constructed a comprehensive analysis dashboard for global life expectancy trends from 2000 to 2015, highlighting socioeconomic indicators, immunization rates, and adult mortality ratios.",
      tags: ["Power BI", "Data Collection", "Data Cleaning", "DAX", "Tableau"],
      github: "https://github.com/YasirHussain1272/Life-expectancy-dashboard-using-Power-Bi",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_machinelearning-datascience-lifeexpectancy-activity-7207274298053476352-g2Ws?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "2000–2015 Longitudinal Study",
      highlights: [
        "World health geographical map layers with drill-through details",
        "Socioeconomic factor elasticity regression curves",
        "Dynamic slicers for continent, income classification, and decade"
      ]
    },
    {
      id: "amazon-sales-bi",
      category: "bi",
      discipline: "E-Commerce Intelligence",
      title: "Amazon Sales Performance Dashboard 2024",
      description: "Using advanced data visualization and statistical ETL techniques, built an executive analytical dashboard providing a comprehensive view of Amazon's sales performance, fulfillment channels, and product margins.",
      tags: ["Excel", "Data Collection", "Data Cleaning", "DAX", "E-Commerce Analytics"],
      github: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_datascience-dataanalytics-datavisualization-activity-7221791563335520256-VTLM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_datascience-dataanalytics-datavisualization-activity-7221791563335520256-VTLM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
      metrics: "Channel Fulfillment Analytics",
      highlights: [
        "Fulfillment by Amazon (FBA) vs Merchant (FBM) return rate analysis",
        "Seasonal peak demand forecasts and inventory stocking alerts",
        "SKU-level gross margin contribution ranking"
      ]
    }
  ];

  const filteredProjects = projectsData.filter((proj) => {
    const matchesCategory = activeFilter === 'all' || proj.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="hero-details-strip">
      <div className="hero-section-card">
        {/* Section Header */}
        <div className="hero-section-header">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2 mb-1.5">
              <FolderGit2 size={14} />
              <span>Verified Portfolios & Real-World Deployments</span>
            </div>
            <h2 className="hero-section-title">Featured Projects ({projectsData.length})</h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            GITHUB REPOS & LIVE LINKEDIN CASE STUDIES INCLUDED
          </div>
        </div>

        {/* Filter Controls & Search Bar (Mobile responsive flex) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4 mb-6">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === 'all'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({projectsData.length})
            </button>
            <button
              onClick={() => setActiveFilter('cv-ml')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === 'cv-ml'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & Vision
            </button>
            <button
              onClick={() => setActiveFilter('genai')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === 'genai'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GenAI & RAG
            </button>
            <button
              onClick={() => setActiveFilter('bi')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === 'bi'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data & BI
            </button>
            <button
              onClick={() => setActiveFilter('avionics')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === 'avionics'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Avionics & UAV
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[200px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search tech, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>
        </div>

        {/* Responsive Projects Grid (1 col on mobile, 2 col on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata (anti-slop rule) */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono mb-2">
                  <span className="text-emerald-400 font-medium">{project.discipline}</span>
                  {project.metrics && (
                    <span className="text-cyan-300 font-semibold">{project.metrics}</span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags as clean unboxed text with separators */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-cyan-300 font-mono mt-4 pt-3 border-t border-slate-800/60">
                  {project.tags.map((tag, i) => (
                    <React.Fragment key={i}>
                      <span>{tag}</span>
                      {i < project.tags.length - 1 && <span className="text-slate-600">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-slate-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <Eye size={14} />
                  <span>Inspect Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white flex items-center gap-1 hover:underline"
                    >
                      <RiGithubLine size={15} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 hover:underline font-medium"
                    >
                      <FiExternalLink size={13} />
                      <span>Live Case</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="hero-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="hero-modal-content" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <button
              className="hero-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <span>{selectedProject.discipline}</span>
              {selectedProject.metrics && (
                <>
                  <span>·</span>
                  <span className="text-cyan-300 font-semibold">{selectedProject.metrics}</span>
                </>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2.5">
              {selectedProject.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {selectedProject.description}
            </p>

            {/* Highlights */}
            {selectedProject.highlights && selectedProject.highlights.length > 0 && (
              <div className="space-y-2 mb-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Engineering Contributions:
                </span>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags Strip */}
            <div className="text-xs font-mono text-cyan-300 mb-6">
              Stack: {selectedProject.tags.join(" · ")}
            </div>

            {/* Modal Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500 font-mono">Engr. Yasir Hussain</span>
              <div className="flex items-center gap-2">
                {selectedProject.github && selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-secondary text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
                  >
                    <RiGithubLine size={15} />
                    <span>View GitHub</span>
                  </a>
                )}
                {selectedProject.live && selectedProject.live !== "#" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
                  >
                    <FiExternalLink size={14} />
                    <span>Live Post / Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
