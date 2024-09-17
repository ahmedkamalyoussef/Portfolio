import React from 'react';

function Info({ isScrolled }) {
  return (
    <div className="about-info grid">
      <div className={`about-box ${isScrolled ? 'animate-delay-1' : ''}`}>
        <i className='bx bx-award about-icon'></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">1 Year</span>
      </div>
      <div className={`about-box ${isScrolled ? 'animate-delay-2' : ''}`}>
        <i className='bx bx-briefcase-alt about-icon'></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">9 + Projects</span>
      </div>
      <div className={`about-box ${isScrolled ? 'animate-delay-3' : ''}`}>
        <i className='bx bx-support about-icon'></i>
        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Online 24 / 7</span>
      </div>
    </div>
  );
}

export default Info;
