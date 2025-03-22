import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Me</h1>
      <p className="page-description">
        Feel free to reach out to me for collaboration, questions, or just to say hello.
      </p>
      
      <div className="contact-content">
        <div className="contact-info card">
          <h2 className="contact-section-title">Contact Information</h2>
          
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <div className="contact-details">
              <h3>Email</h3>
              <p>srilekhakasha47@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-phone contact-icon"></i>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>7416939873</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <div className="contact-details">
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Srilekha-03" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/srilekha-kasha" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/srilekha_kasha" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="contact-form card">
          <h2 className="contact-section-title">Send Me a Message</h2>
          
          {submitted ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Your message has been sent successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;