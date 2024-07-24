import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Ahmed</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/ahmed_kamal414/"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedkamal414?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl%2FmWZtLTQjiEWdiUhjgwdA%3D%3D"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100028844448220"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
      </div>
      <span className="footer-copy">
        &#169; Crypticalcoder. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
