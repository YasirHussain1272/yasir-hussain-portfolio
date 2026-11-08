import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { FaPaperPlane, FaCode } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import { 
  Compass, 
  Cpu, 
  Radio, 
  Activity, 
  Terminal, 
  Check, 
  Copy, 
  Upload, 
  ShieldCheck,
  Zap,
  Navigation,
  Download
} from 'lucide-react';

import defaultAvatar from './assets/profile-avatar.svg';
import profilePhoto from './assets/My-profile-pic.png';
import resumePdf from './assets/Resume/Yasir_Hussain_CV_PowerPlatform_Architect.pdf?url';

const Hero = ({ onNavigate, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCockpitTab, setActiveCockpitTab] = useState('profile');

  // Custom photo upload support
  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);
  const fileInputRef = useRef(null);

  // Dynamic Typewriter Roles
  const roles = [
    "Data & Automation Engineer",
    "AI & Machine Learning Specialist",
    "UAV Avionics & Flight-Controller Integrator",
    "Autonomous Multirotor, Fixed-Wing & VTOL Systems"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Simulated live telemetry numbers
  const [telemetry, setTelemetry] = useState({
    pitch: -2.4,
    roll: 1.8,
    heading: 328,
    altitude: 142.5,
    speed: 48.2,
    voltage: 24.8,
    satellites: 19,
    flightMode: "AUTO (WP-04)",
    armed: true
  });

  const name = "Engr. Yasir Hussain";
  const userEmail = "Yasirhussain6190@gmail.com";
  const tagline = "Results-driven AI, Data & Avionics Engineer with expertise spanning Python, machine learning, LLMs, and intelligent automation. Experienced in UAV avionics integration, flight-controller configuration, and troubleshooting across multirotor, fixed-wing, and VTOL platforms using ArduPilot, Mission Planner, and Betaflight. Passionate about bridging AI, automation, and autonomous flight systems to engineer intelligent, reliable, and scalable real-world solutions.";

  // Typewriter effect
  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentFullText.substring(0, displayedRole.length + 1));
        if (displayedRole.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayedRole(currentFullText.substring(0, displayedRole.length - 1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  // Telemetry fluctuation simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        pitch: +(prev.pitch + (Math.random() * 0.8 - 0.4)).toFixed(1),
        roll: +(prev.roll + (Math.random() * 0.8 - 0.4)).toFixed(1),
        heading: (prev.heading + Math.floor(Math.random() * 3 - 1) + 360) % 360,
        altitude: +(prev.altitude + (Math.random() * 0.4 - 0.2)).toFixed(1),
        speed: +(prev.speed + (Math.random() * 0.6 - 0.3)).toFixed(1),
        voltage: +(24.8 - (Math.random() * 0.05)).toFixed(2)
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhotoUrl(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="hero-container" id="home">
      <div className="hero-ambient-grid" />
      <div className="hero-radar-glow" />

      <main className="hero-main">
        <div className="hero-text-content">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" />
            <span>Autonomous Flight & AI Automation Engineer</span>
          </div>

          <h1 className="hero-title-name">
            <span className="hero-title-gradient">{name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <p className="hero-title-role">
              <span>{displayedRole}</span>
              <span className="hero-typing-caret" />
            </p>
          </div>

          <p className="hero-description">
            Results-driven <strong>AI, Data & Avionics Engineer</strong> with expertise spanning 
            Python, machine learning, LLMs, and intelligent automation. Experienced in UAV 
            avionics integration, flight-controller configuration, and troubleshooting across 
            multirotor, fixed-wing, and VTOL platforms using <strong>ArduPilot, Mission Planner, and Betaflight</strong>. 
            Passionate about bridging AI, automation, and autonomous flight systems to engineer 
            intelligent, reliable, and scalable real-world solutions.
          </p>

          <div className="hero-actions">
            <a 
              href="#projects" 
              className="hero-btn hero-btn-primary"
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              <FaCode size={15} />
              View Engineering Projects
            </a>

            <a
              href={resumePdf}
              download="Yasir_Hussain_CV_PowerPlatform_Architect.pdf"
              className="hero-btn hero-btn-resume"
              aria-label="Download Yasir Hussain's resume as a PDF"
              title="Download Yasir Hussain's resume (PDF)"
            >
              <Download size={15} />
              Download My Resume
            </a>
            
            <button 
              className="hero-btn hero-btn-secondary"
              onClick={onOpenContact}
            >
              <FaPaperPlane size={14} />
              Contact Me
            </button>

            <a 
              href="#avionics" 
              className="hero-btn hero-btn-outline"
              onClick={(e) => handleLinkClick(e, 'avionics')}
            >
              <Navigation size={15} />
              Flight Workbench
            </a>
          </div>

          <div className="hero-stats-strip">
            <div className="hero-stat-item">
              <span className="hero-stat-value">3+ Platforms</span>
              <span className="hero-stat-label">
                Multirotor · Fixed-Wing · <span>VTOL Hybrid</span>
              </span>
            </div>

            <div className="hero-stat-item">
              <span className="hero-stat-value">100% Autonomy</span>
              <span className="hero-stat-label">
                ArduPilot · Mission Planner · <span>Betaflight</span>
              </span>
            </div>

            <div className="hero-stat-item">
              <span className="hero-stat-value">AI & Automation</span>
              <span className="hero-stat-label">
                Python · ML Pipelines · <span>LLM Agents</span>
              </span>
            </div>
          </div>

          <div className="hero-social-bar">
            <a 
              href="https://github.com/YasirHussain1272" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
              title="GitHub Profile"
            >
              <RiGithubFill />
            </a>

            <a 
              href="https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
              title="LinkedIn Profile"
            >
              <RiLinkedinFill />
            </a>

            <a 
              href="https://www.kaggle.com/mryasirturi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
              title="Kaggle Profile"
            >
              <SiKaggle size={22} />
            </a>

            <button 
              className="hero-copy-email"
              onClick={copyToClipboard}
              title="Click to copy email address"
            >
              {copiedEmail ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              <span>{copiedEmail ? "Email Copied!" : userEmail}</span>
            </button>
          </div>
        </div>

        <div className="hero-visual-card">
          <div className="hero-card-bracket top-left" />
          <div className="hero-card-bracket top-right" />
          <div className="hero-card-bracket bottom-left" />
          <div className="hero-card-bracket bottom-right" />

          <div className="hero-cockpit-tabs">
            <button 
              className={`hero-cockpit-tab ${activeCockpitTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveCockpitTab('profile')}
            >
              <ShieldCheck size={14} />
              Engineer Profile
            </button>

            <button 
              className={`hero-cockpit-tab ${activeCockpitTab === 'hud' ? 'active' : ''}`}
              onClick={() => setActiveCockpitTab('hud')}
            >
              <Radio size={14} />
              Avionics HUD
            </button>

            <button 
              className={`hero-cockpit-tab ${activeCockpitTab === 'pipeline' ? 'active' : ''}`}
              onClick={() => setActiveCockpitTab('pipeline')}
            >
              <Zap size={14} />
              AI Automation
            </button>
          </div>

          {activeCockpitTab === 'profile' && (
            <div>
              <div className="hero-image-stage">
                <div className="hero-stage-ring" />
                <div className="hero-stage-ring-inner" />
                <img
                  src={customPhotoUrl || profilePhoto}
                  alt={`${name} Profile`}
                  className="hero-profile-img"
                  onError={(e) => {
                    e.target.src = profilePhoto;
                  }}
                  referrerPolicy="no-referrer"
                />

                <div className="hero-stage-badge">
                  <span className="hero-kicker-dot" />
                  <span>ARMED · FC READY</span>
                </div>
              </div>

              <div className="hero-hud-telemetry" style={{ marginTop: '16px' }}>
                <div className="hero-hud-row">
                  <span>DISCIPLINE:</span>
                  <span className="hero-hud-val emerald">AVIONICS & AUTOMATION</span>
                </div>
                <div className="hero-hud-row">
                  <span>FLIGHT STACK:</span>
                  <span className="hero-hud-val">ARDUPILOT / MISSION PLANNER</span>
                </div>
                <div className="hero-hud-row">
                  <span>AI & DATA STACK:</span>
                  <span className="hero-hud-val">PYTHON / ML / LLMS</span>
                </div>
              </div>
            </div>
          )}

          {activeCockpitTab === 'hud' && (
            <div className="hero-hud-telemetry">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Activity size={13} />
                  SIMULATED MAVLINK TELEMETRY
                </span>
                <span className="text-[11px] text-slate-400">SYS_ID: 1 · COMP_ID: 1</span>
              </div>

              <div className="hero-artificial-horizon">
                <div 
                  className="hero-horizon-line"
                  style={{
                    transform: `translateY(${telemetry.pitch * 3}px) rotate(${telemetry.roll}deg)`
                  }}
                />
                <Compass className="hero-aircraft-reticle" />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="hero-hud-row">
                  <span>ALTITUDE:</span>
                  <span className="hero-hud-val emerald">{telemetry.altitude} m</span>
                </div>
                <div className="hero-hud-row">
                  <span>GROUND SPEED:</span>
                  <span className="hero-hud-val">{telemetry.speed} km/h</span>
                </div>
                <div className="hero-hud-row">
                  <span>HEADING:</span>
                  <span className="hero-hud-val">{telemetry.heading}° NW</span>
                </div>
                <div className="hero-hud-row">
                  <span>GPS 3D LOCK:</span>
                  <span className="hero-hud-val emerald">{telemetry.satellites} SATS</span>
                </div>
                <div className="hero-hud-row">
                  <span>MAIN BATTERY:</span>
                  <span className="hero-hud-val emerald">{telemetry.voltage} V (6S)</span>
                </div>
                <div className="hero-hud-row">
                  <span>FLIGHT MODE:</span>
                  <span className="hero-hud-val">{telemetry.flightMode}</span>
                </div>
              </div>
            </div>
          )}

          {activeCockpitTab === 'pipeline' && (
            <div className="hero-hud-telemetry">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Terminal size={13} />
                  INTELLIGENT AUTONOMY PIPELINE
                </span>
                <span className="text-[11px] text-emerald-400">ACTIVE LOOP</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px]">01. SENSOR INGESTION & DATA ETL</div>
                  <div className="text-emerald-400 font-medium">IMU + GPS + Optical Flow via MAVLink / Python</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px]">02. MACHINE LEARNING & TELEMETRY ANOMALY DETECTION</div>
                  <div className="text-cyan-400 font-medium">Predictive Motor Vibration & Current Draw Models</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px]">03. LLM / HEURISTIC DECISION ENGINE</div>
                  <div className="text-purple-300 font-medium">Automated Mission Re-routing & Fail-Safe Directives</div>
                </div>
              </div>
            </div>
          )}

          <div className="hero-card-footer">
            <span className="flex items-center gap-1.5">
              <Cpu size={13} />
              <span>Avionics Testbed Status: Online</span>
            </span>

            <div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handlePhotoUpload} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
              <button 
                className="hero-photo-switch-btn"
                onClick={() => fileInputRef.current?.click()}
                title="Preview your actual photo directly in the browser"
              >
                <Upload size={12} />
                <span>Upload/Preview Photo</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
