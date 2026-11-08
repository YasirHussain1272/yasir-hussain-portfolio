import React, { useState } from 'react';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { SiKaggle } from 'react-icons/si';
import { ArrowUp, Copy, Check, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const userEmail = "Yasirhussain6190@gmail.com";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleLink = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md pt-14 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Specialty */}
        <div className="text-center md:text-left">
          <div className="text-lg font-bold text-white tracking-tight">
            Engr. Yasir Hussain
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-md">
            AI, Data & Avionics Engineer · Specialized in UAV Flight Controller Integration, 
            Machine Learning, LLMs, and Intelligent Automation.
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-400">
          <button onClick={() => handleLink('home')} className="hover:text-emerald-400 transition-colors">Overview</button>
          <button onClick={() => handleLink('about')} className="hover:text-emerald-400 transition-colors">About & Journey</button>
          <button onClick={() => handleLink('avionics')} className="hover:text-emerald-400 transition-colors">Avionics & UAV</button>
          <button onClick={() => handleLink('ai-automation')} className="hover:text-emerald-400 transition-colors">AI & Data</button>
          <button onClick={() => handleLink('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
          <button onClick={() => handleLink('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
        </nav>

        {/* Socials & Email Copy */}
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/YasirHussain1272" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            title="GitHub Profile"
          >
            <RiGithubFill size={20} />
          </a>

          <a 
            href="https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            title="LinkedIn Profile"
          >
            <RiLinkedinFill size={20} />
          </a>

          <a 
            href="https://www.kaggle.com/mryasirturi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            title="Kaggle Profile"
          >
            <SiKaggle size={18} />
          </a>

          <button
            onClick={copyEmail}
            className="text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
            title="Copy email address"
          >
            {emailCopied ? <Check size={12} color="#34d399" /> : <Copy size={12} />}
            <span>{emailCopied ? "Copied" : "Copy Email"}</span>
          </button>
        </div>
      </div>

      {/* Bottom Sub-strip */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} Engr. Yasir Hussain · Built with React, Tailwind & Vite
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] text-slate-500">
          <span>CI/CD: GitHub Pages Automated</span>
          <span>·</span>
          <span>ArduPilot · Betaflight · Python</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
