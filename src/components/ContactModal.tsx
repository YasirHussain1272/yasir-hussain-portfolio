import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import { ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const userEmail = "Yasirhussain6190@gmail.com";

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="hero-modal-overlay" onClick={onClose}>
      <div 
        className="hero-modal-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className="hero-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FiX />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <FaPaperPlane size={14} />
          </div>
          <h3 className="text-xl font-bold text-white">Contact Engr. Yasir Hussain</h3>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
          Available for autonomous flight systems engineering, UAV avionics integration, 
          Python data automation, and machine learning collaborations.
        </p>

        <div className="space-y-3">
          {/* Direct Email */}
          <a 
            href={`mailto:${userEmail}?subject=Engineering Collaboration - Engr. Yasir Hussain`}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 text-slate-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <FaPaperPlane size={15} />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">DIRECT INBOX</div>
                <div className="text-sm font-mono text-white truncate max-w-[200px] sm:max-w-none">{userEmail}</div>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-400 shrink-0" />
          </a>

          {/* LinkedIn Network */}
          <a 
            href="https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <RiLinkedinFill size={18} />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">LINKEDIN PROFILE</div>
                <div className="text-sm font-semibold text-white">Engr. Yasir Hussain</div>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-400 shrink-0" />
          </a>

          {/* GitHub Repos */}
          <a 
            href="https://github.com/YasirHussain1272"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 text-slate-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-white">
                <RiGithubFill size={18} />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">OPEN SOURCE CODE</div>
                <div className="text-sm font-mono text-white">YasirHussain1272</div>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-400 shrink-0" />
          </a>
        </div>

        {/* Location & Quick Action */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Location: Islamabad · Global Remote</span>
          <button 
            onClick={copyToClipboard}
            className="text-emerald-400 hover:underline flex items-center gap-1 font-medium"
          >
            {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
            <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
