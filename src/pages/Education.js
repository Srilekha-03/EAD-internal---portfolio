import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "Engineering",
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      location: "Gandipet, Hyderabad",
      degree: "B.E in Artificial Intelligence and Machine Learning",
      grade: "CGPA: 9.81",
      duration: "2020 - Present"
    },
    {
      id: 2,
      level: "Intermediate",
      institution: "Centre of Excellence",
      location: "Khammam",
      degree: "Intermediate Education",
      grade: "Marks: 985/1000",
      duration: "2018 - 2020"
    },
    {
        id: 3,
        level: "Schooling",
        institution: "St. Alphonsus' High School",
        location: "Nalgonda",
        degree: "Secondary Education",
        grade: "GPA: 10/10",
        duration: "2017 - 2018"
      }
    ];
  
    const certifications = [
      {
        id: 1,
        name: "Meta Front End Developer",
        issuer: "Coursera",
        date: "2023"
      },
      {
        id: 2,
        name: "Machine Learning Foundation Certificate",
        issuer: "IBM",
        date: "2022"
      },
      {
        id: 3,
        name: "Artificial Intelligence Foundation Certificate",
        issuer: "Microsoft",
        date: "2022"
      },
      {
        id: 4,
        name: "Deep Learning",
        issuer: "Udemy",
        date: "Ongoing"
      }
    ];
  
    return (
      <div className="education-container">
        <h1 className="page-title">Education & Certifications</h1>
        
        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {educationData.map(edu => (
              <div className="timeline-item card" key={edu.id}>
                <div className="timeline-content">
                  <h3 className="education-level">{edu.level}</h3>
                  <h4 className="institution">{edu.institution}</h4>
                  <p className="location">{edu.location}</p>
                  <p className="degree">{edu.degree}</p>
                  <p className="grade">{edu.grade}</p>
                  <span className="duration">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map(cert => (
              <div className="card certification-card" key={cert.id}>
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">Issued by: {cert.issuer}</p>
                <p className="certification-date">Date: {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
