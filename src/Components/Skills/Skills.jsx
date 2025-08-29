import React from 'react';
import './Skills.css';
import Mern from './Mern';
import Dotnet from './Dotnet';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Level</span>
      <div className="skills-container container grid">
        <Mern />
        <Dotnet />
      </div>
    </section>
  )
}

export default Skills;
