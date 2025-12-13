
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <div className="about-header">
                    <h2>About Me</h2>
                </div>
                <div className="about-intro">
                    <div className="about-text">
                        <p>I am Engr. Yasir Hussain, a Computer Systems Engineer with strong expertise in Data Science, Machine Learning, Deep Learning, NLP, Computer Vision, and Data Engineering. With hands-on experience in Python, SQL, TensorFlow/Keras, Power BI, Tableau, and end-to-end ML pipelines, I have worked on real-world projects including face sketch–to–image generation using GANs, fake news detection using BERT, audio emotion recognition, OCR-based feature extraction, and RAG-based legal chatbots.</p>
                        <p>I have 2+ years of experience as a Data Analyst and Data Scientist, with skills in statistical analysis, data visualization, ETL pipelines, and building AI-powered applications. I am also experienced with LangChain, LangGraph, and building RAG systems using vector databases like Pinecone and Weaviate.</p>
                        <p>My passion lies in solving complex problems, exploring data deeply, and building scalable AI/ML solutions. I am continuously learning, contributing to projects, and working toward opportunities in data, AI engineering, and cloud-based development.</p>
                        <p><span className="highlight">Let's build something exceptional together.</span></p>
                    </div>

                    <div className="timeline">
                        <h3>My Journey</h3>
                        <div className="timeline-item">
                            <h4>Power Platform & SharePoint Developer</h4>
                            <p>Numrex | 11/2024 - Present</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Model Training (Content Analyst)</h4>
                            <p>Turing (Meta) | 05/2025 – 08/2025 </p>
                        </div>
                        <div className="timeline-item">
                            <h4>Power BI Dashboard Developer</h4>
                            <p>Activision | 6/2024 – 08/2024 </p>
                        </div>
                        <div className="timeline-item">
                            <h4>Data Science Intern</h4>
                            <p>CodSoft | 05/2023 – 08/2023  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;