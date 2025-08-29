import React, { useEffect, useRef, useState } from 'react';

function Mern() {
  const [isScrolled, setIsScrolled] = useState(false);
  const section = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = section.current.offsetTop;
      if (window.scrollY > sectionTop - 650) {
        setIsScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={section} className={isScrolled ? "skills-content from-left-scroll from-left" : "skills-content from-left"}>
      <h3 className="skills-title">MERN Stack</h3>
      <div className="skills-box">
        
        <div className="skills-group">
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">React.js</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">Node.js</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">Express.js</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">Socket.io</h3></div>
        </div>

        <div className="skills-group">
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">MongoDB</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">MySQL</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">Redis</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">Authentication</h3></div>
        </div>

        <div className="skills-group">
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">HTML / CSS / Sass</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">Tailwind / Bootstrap</h3></div>
          <div className="skills-data"><i className="bx bx-badge-check"></i><h3 className="skill-name">JavaScript / TypeScript</h3></div>
        </div>
      </div>
    </div>
  )
}

export default Mern;
