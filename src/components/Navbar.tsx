import React, { useState } from 'react';
import { VscCode } from 'react-icons/vsc';
import { FaPaperPlane } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = 'home',
  onNavigate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const name = "Engr. Yasir Hussain";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
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

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'avionics', label: 'Avionics & UAV' },
    { id: 'ai-automation', label: 'AI & Data' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <>
      <header className="hero-header">
        {/* Brand Zone */}
        <a 
          href="#home" 
          className="hero-brand" 
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <div className="hero-brand-badge">
            <VscCode size={20} />
          </div>
          <span>{name}</span>
        </a>

        {/* Desktop Nav Links (Zone 2) */}
        <nav className="hero-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hero-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone (Zone 3) */}
        <div className="hero-header-action">
          <button 
            className="hero-btn-cta"
            onClick={onOpenContact}
          >
            <FaPaperPlane size={13} />
            <span>Contact Me</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="hero-menu-toggle" 
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label="Open Mobile Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Dedicated Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={(id) => {
          if (onNavigate) {
            onNavigate(id);
          } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenContact={onOpenContact}
      />
    </>
  );
};

export default Navbar;
