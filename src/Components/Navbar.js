import React from "react";
import "./Navbar.css";
import { FcMenu } from "react-icons/fc";
export default function Navbar() {
  return (
    <>
      <div className="header">
        <div className="nav-left">
          <div>
            <a href="/home">
              <img src="../logo.png" alt="logo" />
            </a>
          </div>
          <nav className="navbar navbar-expand-lg" id="navbar">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <FcMenu />
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav">
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
                   Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#why" className="nav-link">
                    Why Diamatics
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#life" className="nav-link">
                    Life@Diamatics
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <a href="#contact">
            <button className="btn">Apply for job</button>
          </a>
        </div>
      </div>
    </>
  );
}
