import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="row">
          <img src="../footer_logo.png" alt="logo" />
          <ul>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#why" className="nav-link">
                Why Diamatics
              </a>
            </li>
            <li className="nav-item">
              <a href="#life" className="nav-link">
                Life@DCS
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <div className="copy">
          <p>Copyright @ 2020 Laaqiq.All Rights Reserved.</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
    </>
  );
}
