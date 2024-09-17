import React, { useState,useEffect, useRef } from "react";
import "./Qualifications.css";
function Qualifications() {
  const [toggleActive, setToggleActive] = useState(1);
  const section = useRef();
  const toggleTab = (tab) => {
    setToggleActive(tab);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = section.current.offsetTop;
      if (window.scrollY > sectionTop -250) {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section ref={section} className="qualification section" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Personal Journey</span>
      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              toggleActive === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleActive === 2
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification-sections">
          <div
            className={
              toggleActive === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className={isScrolled?"qualification-title from-left-scroll from-left":"qualification-title from-left"}>South Vally Unitversity</h3>
                <span className={isScrolled?"qualification-subtitle from-left-scroll from-left":"qualification-subtitle from-left"}>Computer Science</span>
                <div className={isScrolled?"qualification-calendar from-left-scroll from-left":"qualification-calendar from-left"}>
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            {/* ---------------------------------------------------- */}
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className={isScrolled?"qualification-title from-right-scroll from-right":"qualification-title from-right"}>Tiec</h3>
                <span className={isScrolled?"qualification-subtitle from-right-scroll from-right":"qualification-subtitle from-right"}>
                  Basics of programming
                </span>
                <div className={isScrolled?"qualification-calendar from-right-scroll from-right":"qualification-calendar from-right"}>
                  <i className="uil uil-calendar-alt">Oct 2021 - Oct 2021</i>
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h3 className={isScrolled?"qualification-title from-left-scroll from-left":"qualification-title from-left"}>Tiec</h3>
                <span className={isScrolled?"qualification-subtitle from-left-scroll from-left":"qualification-subtitle from-left"}>React.js</span>
                <div className={isScrolled?"qualification-calendar from-left-scroll from-left":"qualification-calendar from-left"}>
                  <i className="uil uil-calendar-alt"></i>Mar 2024 - Aug 2024
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            {/* ---------------------------------------------------- */}
            
          </div>
          <div
            className={
              toggleActive === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className={isScrolled?"qualification-title from-left-scroll from-left":"qualification-title from-left"}>Instructor </h3>
                <span className={isScrolled?"qualification-subtitle from-left-scroll from-left":"qualification-subtitle from-left"}>at Cairo Code</span>
                <div className={isScrolled?"qualification-calendar from-left-scroll from-left":"qualification-calendar from-left"}>
                  <i className="uil uil-calendar-alt"></i>2024 - present
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            {/* ---------------------------------------------------- */}
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className={isScrolled?"qualification-title from-right-scroll from-right":"qualification-title from-right"}>Mentor</h3>
                <span className={isScrolled?"qualification-subtitle from-right-scroll from-right":"qualification-subtitle from-right"}>SVU Support</span>
                <div className={isScrolled?"qualification-calendar from-right-scroll from-right":"qualification-calendar from-right"}>
                  <i className="uil uil-calendar-alt">2024 - present</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
