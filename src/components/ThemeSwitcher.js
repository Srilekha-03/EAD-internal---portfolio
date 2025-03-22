import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ currentTheme, changeTheme }) => {
  return (
    <div className="theme-switcher">
      <div className="theme-options">
        <button 
          className={`theme-btn ${currentTheme === 'light' ? 'active' : ''}`}
          onClick={() => changeTheme('light')}
        >
          Light
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'dark' ? 'active' : ''}`}
          onClick={() => changeTheme('dark')}
        >
          Dark
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'pastel' ? 'active' : ''}`}
          onClick={() => changeTheme('pastel')}
        >
          Pastel
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'high-contrast' ? 'active' : ''}`}
          onClick={() => changeTheme('high-contrast')}
        >
          High Contrast
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
