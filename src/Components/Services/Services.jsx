  import React, { useState,useEffect } from "react";
import "./Service.css";
function Services() {
  const [toggleActive, setToggleActive] = useState(0);
  const toggleTab = (tab) => {
    setToggleActive(tab);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1750) {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="section services" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>
      <div className="services-container container grid">
        <div className={isScrolled?"services-content animate-delay-1":"services-content"}>
          <div className="service-content-div" onClick={() => toggleTab(1)}>
            <i className="uil uil-arrow service-icon"></i>
            <h3 className="service-title">
              Backend <br /> Developer
            </h3>
          </div>
          <span className="service-button">
            Show More{" "}
            <i className="uil uil-arrow-right service-button-icon"></i>
          </span>

          <div
            className={
              toggleActive === 1
                ? "service-modal active-modal"
                : "service-modal"
            }
          >
            <div className="service-modal-content">
              <i
                className="uil uil-times service-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="service-modal-title">Backend</h3>
              <p className="service-modal-description">
                As a backend developer, I build the server-side logic, database
                integration, and API connectivity for web applications. I focus
                on creating scalable, secure, and efficient server-side
                architecture.
              </p>
              <ul className="service-modal-services grid">
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    API Design and Development
                  </p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    Custom Web Application Development
                  </p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    Database Design and Integration
                  </p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    Server-Side Logic Development
                  </p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    Real-Time Web Functionality
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={isScrolled?"services-content animate-delay-2":"services-content"}>
          <div className="service-content-div" onClick={() => toggleTab(2)}>
            <i className="uil uil-arrow service-icon"></i>
            <h3 className="service-title">
              Frontend
              <br />
              Developer
            </h3>
          </div>
          <span className="service-button">
            Show More{" "}
            <i className="uil uil-arrow-right service-button-icon"></i>
          </span>

          <div
            className={
              toggleActive === 2
                ? "service-modal active-modal"
                : "service-modal"
            }
          >
            <div className="service-modal-content">
              <i
                className="uil uil-times service-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="service-modal-title">Frontend</h3>
              <p className="service-modal-description">
                As a frontend developer, I create user interfaces and user
                experiences for web applications using my skills. I focus on
                building responsive, interactive, and visually appealing
                interfaces that provide a seamless user experience.
              </p>
              <ul className="service-modal-services grid">
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Custom UI/UX Design</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    Responsive Web Development
                  </p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Interactive Web Pages</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">
                    Web Application Development
                  </p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Frontend Optimization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={isScrolled?"services-content animate-delay-3":"services-content"}>
          <div className="service-content-div" onClick={() => toggleTab(3)}>
            <i className="uil uil-arrow service-icon"></i>
            <h3 className="service-title">
              Desktop
              <br />
              Application
            </h3>
          </div>
          <span className="service-button">
            Show More{" "}
            <i className="uil uil-arrow-right service-button-icon"></i>
          </span>

          <div
            className={
              toggleActive === 3
                ? "service-modal active-modal"
                : "service-modal"
            }
          >
            <div className="service-modal-content">
              <i
                className="uil uil-times service-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="service-modal-title">Desktop Application</h3>
              <p className="service-modal-description">
              As a desktop application developer, I design and develop desktop applications using C#. I focus on building robust, efficient, and user-friendly applications that meet specific business needs.
              </p>
              <ul className="service-modal-services grid">
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Custom Desktop Application Development</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Windows Forms Development</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">WPF Application Development</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Desktop Application Optimization</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">Desktop Application Maintenance</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
