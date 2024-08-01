import React, { useEffect, useRef, useState } from 'react';

function Frontend() {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={section} className={isScrolled?"skills-content from-left-scroll from-left":"skills-content from-left"}>
      <h3 className="skills-title">Frontend Developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">HTML</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">Css</h3>

            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">Sass</h3>

            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">Tailwind</h3>

            </div>
          </div>
        </div>
        <div className="skills-group">
        <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">Bootstrap</h3>
              
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">JavaScript</h3>

            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">TypeScript</h3>

            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skill-name front">React.js</h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
