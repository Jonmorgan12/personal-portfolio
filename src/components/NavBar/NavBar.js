import React from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

// returning null because it executes before the DOM fully loads. this fixes issue
window.onload = function () {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
};

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="brand-title">(BRAND)</div>
          <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navbar-links">
            <ul>
              <li href="">
                <Link smooth className="nav-link" to="#home">
                  Home
                </Link>
              </li>
              <li href="">
                <Link smooth className="nav-link" to="#about">
                  About
                </Link>
              </li>
              <li href="">
                <Link smooth className="nav-link" to="#projects">
                  Projects
                </Link>
              </li>
              <li href="">
                <Link smooth className="nav-link" to="#experience">
                  Skills
                </Link>
              </li>
              <li href="">
                <Link smooth className="nav-link" to="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
