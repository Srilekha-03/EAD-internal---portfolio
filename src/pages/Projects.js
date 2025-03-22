import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "House Price Prediction",
      description: "A machine learning project that utilizes regression algorithms for model building. This model is deployed using Streamlit. This project predicts the price of the house taking in necessary inputs.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      github: "https://github.com/Srilekha-03/house-price-prediction"
    },
    {
      id: 2,
      title: "Crypto-currency Web Application",
      description: "A Responsive web application built for gaining experience on routing and making API calls using React.js and Axios.",
      technologies: ["React.js", "Axios", "API Integration"],
      github: "https://github.com/Srilekha-03/crypto-currency-app"
    },
    {
      id: 3,
      title: "Document Verification - SIH (Ongoing)",
      description: "This project addresses the urgent requirement for an online platform, utilizing artificial intelligence (AI) algorithms to automate document verification for all official purposes. Ultimately, the solution aims to streamline the document verification process, reducing time and resources required for all stakeholders involved in official documentation.",
      technologies: ["AI", "Document Processing", "Verification Systems"],
      github: "https://github.com/Srilekha-03/documentVerification-SIH"
    },
    {
      id: 4,
      title: "WildGuard-AI",
      description: "This project uses ML to classify forest sounds and detect potential poaching activities. It analyzes 2,026 audio files across 27 classes (animal sounds, fire, axe, etc.), converting them into Mel spectrograms and using a CNN model for classification to predict whether a sound is natural or a threat and integrated with Flask for an interface.",
      technologies: ["Machine Learning", "Audio Classification", "CNN", "Flask"],
      github: "https://github.com/Srilekha-03/WildGuard-AI"
    },
    {
      id: 5,
      title: "Constellations-Explorer",
      description: "This project focuses on celestial object classification and exploration, providing an interactive interface for users to learn about and explore various constellations and celestial phenomena.",
      technologies: ["Data Visualization", "Interactive UI", "Astronomy"],
      github: "https://github.com/Srilekha-03/constellations-explorer"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      <p className="page-description">
        Here are some of the projects I've worked on, showcasing my skills in AI, Machine Learning, and Web Development.
      </p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="card project-card" key={project.id}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span className="tech-badge" key={index}>{tech}</span>
              ))}
            </div>
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;