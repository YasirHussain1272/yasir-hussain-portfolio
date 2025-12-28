import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: "Languages",
        skills: ["Python", "TypeScript", "JavaScript (ES6+)", "C++", "SQL"]
    },
    {
        category: "AI & ML",
        skills: ["Computer Vision & NLP","TensorFlow", "PyTorch", "Scikit-learn", " LangChain & LangGraph (RAG)" ]
    },
    {
        category: "Deployment & Cloud",
        skills: ["React & Django", "Flask & FastAPI", "Docker", "CI/CD (GitHub Actions) ", "Azure"]
    },
    {
        category: "Automation & Integration",
        skills: ["Power Automate", "Zapier", "n8n", "API Automation", "Agent Flow"]
    },
    {
        category: "Data Engineering & Processing",
        skills: ["ETL/ELT Pipelines", "Data Cleaning", "Data Transformation", "Data Integration", "Data Insight"]
    },
    {
        category: "Data & BI",
        skills: ["Power BI", "Tableau", "DAX", "Dataverse", "SQL Server",]
    },
    {
        category: "Databases & Platforms",
        skills: ["SQL (MySQL)", "Dataverse", "SharePoint", "MongoDB", " Power Platform",]
    },
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="skills-content">
                <div className="skills-header">
                    <h2>Technical Skills</h2>
                </div>
                <div className="skills-grid">
                    {skillsData.map((cat, index) => (
                        <div key={index} className="skill-category">
                            <h3>{cat.category}</h3>
                            <ul className="skill-list">
                                {cat.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
