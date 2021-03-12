import React from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

//create a stcky navbar for smooth scrolling
const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="brand-title">Jon Cobb</div>
          <div className="navbar-links"></div>
          <ul>
            <li href="">
              <Link smooth to="#home">
                Home
              </Link>
            </li>
            <li href="">
              <Link smooth to="#about">
                About
              </Link>
            </li>
            <li href="">
              <Link smooth to="#projects">
                Projects
              </Link>
            </li>
            <li href="">
              <Link smooth to="#experience">
                Skills
              </Link>
            </li>
            <li href="">
              <Link smooth to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* <nav>
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
          </ul> */}
        {/* </nav> */}
      </header>
    </>
  );
};

export default NavBar;
