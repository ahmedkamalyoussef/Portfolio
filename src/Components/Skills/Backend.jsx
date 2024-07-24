import React, { useEffect, useState } from 'react';

function Backend() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1280) {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled?"skills-content from-right-scroll from-right":"skills-content from-right"}>
      <h3 className="skills-title">Backend Developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">ASP.NET Web API</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              ASP.NET MVC</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              Blazor</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              .NET Framework</h3>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              linq</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              Microsoft SQL Server</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              signal R</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name">
              Object-Oriented Programming (OOP)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend
