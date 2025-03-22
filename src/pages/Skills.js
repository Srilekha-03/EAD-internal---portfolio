import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Programming Languages",
      skills: ["Python (OOPS)", "JavaScript", "HTML/CSS"]
    },
    {
      id: 2,
      category: "Problem-Solving",
      skills: ["Data Structures & Algorithms", "LeetCode"]
    },
    {
      id: 3,
      category: "Software & Tools",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      id: 4,
      category: "Data Science",
      skills: ["Machine Learning", "Deep Learning", "Data Analysis"]
    },
    {
      id: 5,
      category: "Database Management",
      skills: ["PostgreSQL"]
    },
    {
      id: 6,
      category: "Front-end Development",
      skills: ["React.js", "Next.js", "CSS Frameworks"]
    },
    {
      id: 7,
      category: "Back-end Development",
      skills: ["Node.js"]
    }
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/srilekha_kasha/",
      icon: "fas fa-code"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/srilekhatdyg/",
      icon: "fas fa-laptop-code"
    },
    {
      name: "TakeYouForward",
      url: "https://takeuforward.org/profile/srilekhakasha47@gmail.com",
      icon: "fas fa-arrow-right"
    },
    {
      name: "GitHub",
      url: "https://github.com/Srilekha-03",
      icon: "fab fa-github"
    }
  ];

  return (
    <div className="skills-container">
      <h1 className="page-title">My Skills</h1>
      <p className="page-description">
        Here's an overview of my technical skills and areas of expertise.
      </p>
      
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div className="card skill-card" key={category.id}>
            <h2 className="skill-category">{category.category}</h2>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <span className="skill-bullet">•</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="coding-profiles">
        <h2 className="section-title">Coding Profiles</h2>
        <div className="profiles-container">
          {codingProfiles.map((profile, index) => (
            <a 
              href={profile.url} 
              className="profile-link card"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <i className={`profile-icon ${profile.icon}`}></i>
              <span className="profile-name">{profile.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;