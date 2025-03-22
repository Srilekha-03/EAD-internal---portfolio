import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Srilekha Kasha</h1>
          <h2 className="hero-subtitle">AI & Machine Learning Student</h2>
          <p className="hero-description">
            Enthusiastic and consistently high achieving 3rd year (Artificial Intelligence
            and Machine Learning) student with a strong foundation in Python
            programming language, complemented by a passion for collaborative
            teamwork and driven by a zealous pursuit of excellence in every aspect of
            my academic journey.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
      </div>
      
      <div className="home-section">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p>
            Eager to leverage technical skills and problem-solving abilities to contribute in building innovative projects. 
            With growing passion for AI, ML, Prompt engineering and development I am excited to apply data-driven insights to real-world challenges.
          </p>
        </div>
      </div>
      
      <div className="home-section">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          <div className="card achievement-card">
            <h3>Silver Medal</h3>
            <p>For topping the department</p>
          </div>
          <div className="card achievement-card">
            <h3>COSC</h3>
            <p>Junior Developer at CBIT Open Source Community</p>
          </div>
          <div className="card achievement-card">
            <h3>GDSC</h3>
            <p>Junior team Google Developer Student Clubs</p>
          </div>
          <div className="card achievement-card">
            <h3>Toastmasters CBIT</h3>
            <p>Junior Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;