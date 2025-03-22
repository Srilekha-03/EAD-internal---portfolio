// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Education from './pages/Education';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <Router>
      <div className={`app ${theme}-theme`}>
        <Navbar />
        <ThemeSwitcher currentTheme={theme} changeTheme={changeTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;