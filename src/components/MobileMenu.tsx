import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const handleLink = (id: string) => {
    onNavigate(id);
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
    <div id="mobile-navigation" className="hero-mobile-menu fixed inset-0 z-40 flex flex-col">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer Container */}
      <div className="relative z-10 mt-[68px] w-full bg-[#0a0f1d] border-b border-emerald-500/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            Navigation Menu
          </span>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white"
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLink(item.id)}
              className={`text-left py-3 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
              }`}
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
          className="w-full mt-2 py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-[#04100c] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
        >
          <FaPaperPlane size={13} />
          <span>Contact Engr. Yasir</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
