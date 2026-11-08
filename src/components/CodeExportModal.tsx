import React, { useState } from 'react';
import { FileCode, Copy, Check, X, GitBranch, Layers, Smartphone } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'navbar' | 'mobile' | 'footer' | 'workflow' | 'package'>('navbar');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const packageJsonCode = `{
  "name": "yasir-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "react-icons": "^5.7.0",
    "vite": "^8.3.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "tailwindcss": "^4.3.3",
    "typescript": "^7.0.2"
  }
}
`;

  const navbarCode = `// src/components/Navbar.jsx
import React, { useState } from 'react';
import { VscCode } from 'react-icons/vsc';
import { FaPaperPlane } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

export const Navbar = ({ activeSection = 'home', onNavigate, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const name = "Engr. Yasir Hussain";

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'avionics', label: 'Avionics & UAV' },
    { id: 'ai-automation', label: 'AI & Data' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  const handleLink = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="hero-header">
        <a href="#home" className="hero-brand" onClick={(e) => handleLink(e, 'home')}>
          <div className="hero-brand-badge">
            <VscCode size={20} />
          </div>
          <span>{name}</span>
        </a>

        <nav className="hero-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={\`#\${link.id}\`}
              className={\`hero-nav-link \${activeSection === link.id ? 'active' : ''}\`}
              onClick={(e) => handleLink(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hero-header-action">
          <button className="hero-btn-cta" onClick={onOpenContact}>
            <FaPaperPlane size={13} />
            <span>Contact Me</span>
          </button>
          <button className="hero-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={onNavigate}
        onOpenContact={onOpenContact}
      />
    </>
  );
};

export default Navbar;
`;

  const mobileMenuCode = `// src/components/MobileMenu.jsx
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export const MobileMenu = ({ isOpen, onClose, activeSection, onNavigate, onOpenContact }) => {
  if (!isOpen) return null;

  const handleLink = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About Me & Journey' },
    { id: 'avionics', label: 'Avionics & UAV' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'projects', label: 'Featured Projects' },
    { id: 'skills', label: 'Technical Skills' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full bg-[#0a0f1d] border-b border-emerald-500/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Navigation Menu</span>
          <button onClick={onClose} className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLink(item.id)}
              className={\`text-left py-3 px-3 rounded-lg text-sm font-medium flex items-center justify-between \${
                activeSection === item.id
                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }\`}
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-slate-500">#{item.id}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => {
            onClose();
            onOpenContact();
          }}
          className="w-full mt-2 py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-[#04100c] flex items-center justify-center gap-2"
        >
          <FaPaperPlane size={13} />
          <span>Contact Engr. Yasir</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
`;

  const footerCode = `// src/components/Footer.jsx
import React, { useState } from 'react';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { SiKaggle } from 'react-icons/si';
import { Copy, Check } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const userEmail = "Yasirhussain6190@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleLink = (id) => {
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
        <div>
          <div className="text-lg font-bold text-white tracking-tight">Engr. Yasir Hussain</div>
          <p className="text-xs text-slate-400 mt-1 max-w-md">
            AI, Data & Avionics Engineer · Specialized in UAV Flight Controller Integration, Machine Learning, LLMs, and Intelligent Automation.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-400">
          <button onClick={() => handleLink('home')}>Overview</button>
          <button onClick={() => handleLink('about')}>About</button>
          <button onClick={() => handleLink('avionics')}>Avionics</button>
          <button onClick={() => handleLink('ai-automation')}>AI & Data</button>
          <button onClick={() => handleLink('projects')}>Projects</button>
          <button onClick={() => handleLink('skills')}>Skills</button>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/YasirHussain1272" target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <RiGithubFill size={20} />
          </a>
          <a href="https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <RiLinkedinFill size={20} />
          </a>
          <a href="https://www.kaggle.com/mryasirturi" target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <SiKaggle size={18} />
          </a>
          <button onClick={copyEmail} className="hero-copy-email">
            {emailCopied ? <Check size={12} color="#34d399" /> : <Copy size={12} />}
            <span>{emailCopied ? "Copied" : "Copy Email"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`;

  const workflowCode = `# .github/workflows/deploy.yml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const getActiveCode = () => {
    switch (activeTab) {
      case 'navbar': return navbarCode;
      case 'mobile': return mobileMenuCode;
      case 'footer': return footerCode;
      case 'workflow': return workflowCode;
      case 'package': return packageJsonCode;
      default: return navbarCode;
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero-modal-overlay" onClick={onClose}>
      <div 
        className="hero-modal-content" 
        style={{ maxWidth: '860px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="hero-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <FileCode size={16} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Modular Architecture & GitHub CI/CD</h3>
              <p className="text-xs text-slate-400">Separate components (Navbar, MobileMenu, Footer, Workflow, package.json)</p>
            </div>
          </div>

          <button
            onClick={() => copyCode(getActiveCode())}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-500/30 transition-all"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? "Copied!" : "Copy Active File"}</span>
          </button>
        </div>

        {/* Component Tabs */}
        <div className="flex items-center gap-1.5 mb-3 overflow-x-auto scrollbar-none pb-1">
          <button
            onClick={() => setActiveTab('package')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'package'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            package.json (Fixed)
          </button>
          <button
            onClick={() => setActiveTab('navbar')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'navbar'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            Navbar.jsx
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'mobile'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            MobileMenu.jsx
          </button>
          <button
            onClick={() => setActiveTab('footer')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'footer'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            Footer.jsx
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'workflow'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            .github/workflows/deploy.yml
          </button>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-y-auto bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200">
          <pre className="text-emerald-300 leading-relaxed whitespace-pre-wrap">{getActiveCode()}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeExportModal;
