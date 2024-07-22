import React, { useState } from "react";
import "./Qualifications.css";
function Qualifications() {
  const [toggleActive, setToggleActive] = useState(1);
  const toggleTab = (tab) => {
    setToggleActive(tab);
  };
  return (
    <section className="qualification section">
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
                <h3 className="qualification-title">South Vally Unitversity</h3>
                <span className="qualification-subtitle">Computer Science</span>
                <div className="qualification-calendar">
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
                <h3 className="qualification-title">
                  Information Technology Institute(ITI)
                </h3>
                <span className="qualification-subtitle">ASP.Net</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt">2023</i>
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Tiec</h3>
                <span className="qualification-subtitle">React.js</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>Mar 2024 - Aug 2024
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
                <h3 className="qualification-title">Tiec</h3>
                <span className="qualification-subtitle">
                  Basics of programming
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt">Oct 2021 - Oct 2021</i>
                </div>
              </div>
            </div>
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
                <h3 className="qualification-title">Instructor </h3>
                <span className="qualification-subtitle">at Cairo Code</span>
                <div className="qualification-calendar">
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
                <h3 className="qualification-title">Mentor</h3>
                <span className="qualification-subtitle">SVU Support</span>
                <div className="qualification-calendar">
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
