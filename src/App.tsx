import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero';
import AboutSection from './components/AboutSection';
import AvionicsSection from './components/AvionicsSection';
import AIAutomationSection from './components/AIAutomationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CodeExportModal from './components/CodeExportModal';
import { FileCode, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col">
      {/* 1. Modular Navbar Component (Desktop & Mobile) */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* 2. Main Hero Section */}
      <Hero 
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* 3. About & Career Journey Section */}
      <AboutSection />

      {/* 4. Avionics Hardware & Flight Systems Section */}
      <AvionicsSection />

      {/* 5. AI, ML & Intelligent Automation Section */}
      <AIAutomationSection />

      {/* 6. Featured Projects Section */}
      <ProjectsSection />

      {/* 7. Technical Skills Matrix Section */}
      <SkillsSection />

      {/* 8. Modular Executive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 9. Separate Contact Modal Component */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* 10. Code Export & Architecture Inspection Modal */}
      <CodeExportModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />

      {/* Floating Action Controls */}
      <aside aria-label="Floating quick tools" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* <button
          onClick={() => setCodeModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 shadow-xl shadow-black/60 text-xs font-semibold backdrop-blur-md transition-all hover:scale-105"
          title="Inspect and copy modular component code"
        >
          <FileCode size={16} />
          <span>Copy Component Code</span>
        </button> */}

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 shadow-xl backdrop-blur-md transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </aside>
    </div>
  );
}
