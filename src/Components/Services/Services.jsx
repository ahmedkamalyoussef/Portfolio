import React, { useState } from "react";
import "./Service.css";
function Services() {
  const [toggleActive, setToggleActive] = useState(0);
  const toggleTab = (tab) => {
    setToggleActive(tab);
  };
  return (
    <section className="section services" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>
      <div className="services-container container grid">
        <div className="services-content">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem deserunt dicta beatae accusantium vero, eligendi quo
                consequatur minus, iusto maiores repellat qui totam a! Ducimus
                ea repudiandae temporibus quisquam repellat!
              </p>
              <ul className="service-modal-services grid">
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">one</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">two</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">three</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">four</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">five</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content" >
          <div className="service-content-div" onClick={() => toggleTab(2)}>
            <i className="uil uil-arrow service-icon"></i>
            <h3 className="service-title">
              Frontend
              <br />
              Developer
            </h3>
          </div>
          <span className="service-button" >
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
                Lorem ipsum dolor sit amet , eligendi quo consequatur minus
                repudiandae temporibus quisquam repellat!
              </p>
              <ul className="service-modal-services grid">
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">one</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">two</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">three</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">four</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">five</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content" >
          <div className="service-content-div" onClick={() => toggleTab(2)}>
            <i className="uil uil-arrow service-icon"></i>
            <h3 className="service-title">
              Desktop
              <br />
              Application
            </h3>
          </div>
          <span className="service-button" >
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
                Lorem ipsum dolor sit amet , eligendi quo consequatur minus
                repudiandae temporibus quisquam repellat!
              </p>
              <ul className="service-modal-services grid">
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">one</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">two</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">three</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">four</p>
                </li>
                <li className="service-modal-service">
                  <i className="uil uil-check-circle service-modal-icon"></i>
                  <p className="service-modal-info">five</p>
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
