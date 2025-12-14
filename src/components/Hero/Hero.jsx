import React, { useState } from 'react';
import './Hero.css';
import { VscCode } from 'react-icons/vsc'; // Logo Icon
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'; // Social Icons
import { FaPaperPlane, FaCode } from 'react-icons/fa'; // Button Icons
import profilePic from '../../assets/profile-pic.png'; // Import your image
import { SiKaggle } from 'react-icons/si';
import { FiMenu, FiX } from 'react-icons/fi';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const name = "Engr. Yasir Hussain";
    const role = "Data & Automation Engineer";
    const tagline = `Results-driven Data & Automation Engineer with 2+ years of experience integrating Large Language
Models (LLMs) and predictive analytics into enterprise workflows. Expert in Python, TensorFlow, and
PyTorch, with specialized proficiency in deploying AI agents using LangChain and Power Platform for
scalable business automation.`;
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="hero-container">
            {/* --- Header --- */}
            <header className="header">
                <div className="logo">
                    <VscCode className="logo-icon" />
                    {name}
                </div>
                {/* --- Hamburger Button (Visible on Mobile) --- */}
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}> 
                    <a href="#home" onClick={handleLinkClick}>Home</a>
                    <a href="#about" onClick={handleLinkClick}>About</a>
                    <a href="#projects" onClick={handleLinkClick}>Projects</a>
                    <a href="#skills" onClick={handleLinkClick}>Skills</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                </nav>
            </header>

            {/* --- Main Content --- */}
            <main className="hero-main">
                <div className="text-content">
                    <h1 className="title-name">{name}</h1>
                    <p className="title-role">{role}</p>
                    <p className="description">{tagline}</p>

                    <div className="action-buttons">
                        {/* Note: In a real app, these would be React Router <Link>s */}
                        <a href="#projects" className="btn btn-primary">
                            <FaCode className="btn-icon" />
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <FaPaperPlane className="btn-icon" />
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/YasirHussain1272" target="_blank" rel="noopener noreferrer"><RiGithubFill /></a>
                        <a href="https://www.linkedin.com/in/engr-yasir-hussain-24b5b1254/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill /></a>
                        <a href="https://www.kaggle.com/mryasirturi" target="_blank" rel="noopener noreferrer"><SiKaggle size="3.2rem" className='kaggle' /></a>
                    </div>
                </div>

                <div className="image-container">
                    <img
                        src={profilePic}
                        alt={`${name} Profile`}
                        className="profile-image"
                    />
                </div>
            </main>
        </div>
    );
};

export default Hero;