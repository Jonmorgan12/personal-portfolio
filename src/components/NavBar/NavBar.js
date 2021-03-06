import React, { useState } from "react";
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

//function to controll navbar fading on scroll
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <header>
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="brand-title"> Jon Cobb</div>

          <div className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <Link smooth className="nav-link" to="#home">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth className="nav-link" to="#about">
                  About
                </Link>
              </li>
              <li>
                <Link smooth className="nav-link" to="#projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link smooth className="nav-link" to="#experience">
                  Skills
                </Link>
              </li>
              <li>
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
