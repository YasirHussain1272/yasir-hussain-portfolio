import React from 'react';
import './Projects.css';
import { RiGithubLine } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

const projectsData = [
    {
        title: "Security System for Bike Entry",
        description: `Deployed a computer vision system using YOLOv8 and
OpenCV for automated bike entry detection. achieved 91% detection accuracy and improved
facility security monitoring.`,
        tags: ["Python", "Machine Learing", "Flask", "Google Colab"],
        github: "https://github.com/YasirHussain1272/-IUB-Security-System-for-bike-entry-or-not",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_ml-ai-campusabrsecurity-activity-7206202284526022656-nwJV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
    {
        title: "Life Expectancy Prediction Models",
        description: ` Implemented various algorithms to predict life
expectancy; noted that life expectancy in Pakistan was 66.10 years (2021).`,
        tags: ["Python", "Machine Learing", "Flask", "Jupyter notebook"],
        github: "https://github.com/YasirHussain1272/Life-expectancy-prediction-using-Machine-learning-",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_machinelearning-datascience-lifeexpectancy-activity-7207274298053476352-g2Ws?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
    {
        title: "Forensic Art Enhancement",
        description: `Implemented Deep Convolutional GANs (DCGAN) to reconstruct
and enhance forensic facial composites, improving image resolution for criminal identification
processes.`,
        tags: ["Gen AI", "Computer Vision", "Python", "GANs (DCGAN)"],
        github: "https://github.com/YasirHussain1272/Sketch-to-real-image-",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_deeplearning-ai-forensicscience-activity-7235254081911480322-KmtM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
    {
        title: "Legal Chatbot for KPK Police",
        description: `Engineered a RAG-based Legal Chatbot using LangChain and
OpenAI API to assist KPK Police. Indexed legal documents into a vector database, reducing
legal query resolution time by 50%.`,
        tags: ["Gen AI", "NLP", "Python", "RAG"],
        github: "#",
        live: "#"
    },
    {
        title: "Life Expectancy Dashboard",
        description: `Make a comprehensive analysis dashboard for life expectancy
data from 2000-2015.`,
        tags: ["Power BI", "Data Collection", "Data Cleaning", "DAX"],
        github: "https://github.com/YasirHussain1272/Life-expectancy-dashboard-using-Power-Bi",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_machinelearning-datascience-lifeexpectancy-activity-7207274298053476352-g2Ws?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
    {
        title: "Supermarket Dashboard",
        description: `Generated a dashboard to visualize sales and inventory data,
displaying total sales of 1.87M and total profit of 248.26K.`,
        tags: ["Power BI", "Data Collection", "Data Cleaning", "DAX"],
        github: "https://github.com/YasirHussain1272/Supermarket-dashboard-using-PowerBI",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_powerbi-dataanalytics-businessintelligence-activity-7172527936233750528-V1YE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
     {
        title: "Amazon Sales Dashboard 2024",
        description: `Using advanced data visualization techniques, I've created this dashboard to provide a comprehensive view of Amazon's sales performance.`,
        tags: ["Excel", "Data Collection", "Data Cleaning", "DAX"],
        github: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_datascience-dataanalytics-datavisualization-activity-7221791563335520256-VTLM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_datascience-dataanalytics-datavisualization-activity-7221791563335520256-VTLM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
    {
        title: "Pakistan Stock Exchange Dashboard",
        description: `Improved a dashboard to monitor stock performance,
highlighting fluctuations of 60% to 90%.`,
        tags: ["Python", "Streamlit", "Plotly", "Data Insight"],
        github: "https://github.com/YasirHussain1272/Pakistan-Stock-Exchange-Dashboard-",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_psx-stockmarket-dataanalysis-activity-7173336592260947969-Uz5N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
     {
        title: "Pakistan Super League (PSL) Analytics Dashboard",
        description: ` Established a dashboard to analyze
PSL statistics, showcasing Babar's strike rate increase from 118.6 to 145.4.`,
        tags: ["Python", "Streamlit", "Plotly", "Data Insight"],
        github: "#",
        live: "https://www.linkedin.com/posts/engr-yasir-hussain-24b5b1254_psl-cricketanalytics-datadrivendecisions-activity-7190753735751458817-mtKs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68fxsBrs0RuGYfV4yTD-0kT0HzsbIrzKQ"
    },
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-content">
                <div className="projects-header">
                    <h2>Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <RiGithubLine /> GitHub
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <FiExternalLink /> Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;