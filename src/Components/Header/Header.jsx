import React, { useState } from "react";
import "./Header.css";
function Header() {
    const [toggle,showMenu]=useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="https://ahmedkamalyoussef.netlify.app/" className="nav-logo ">
          Ahmed
        </a>
        <div className={toggle?"nav-menu show-menu":"nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-estate nav-icon active-link"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-user nav-icon "></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-briefcase nav-icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav-close" onClick={()=>showMenu(!toggle)}></i>
        </div>
          <div className="nav-toggle" onClick={()=>showMenu(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
      </nav>
    </header>
  );
}

export default Header;
