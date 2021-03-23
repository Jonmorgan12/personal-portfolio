import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Image1 from "../../../src/assets/virtual-traders.png";
import Image2 from "../../../src/assets/fitness-tracker.png";
import Image3 from "../../../src/assets/strangers-things.png";
import Image4 from "../../../src/assets/personal-portfolio.png";
import Image5 from "../../../src/assets/tic-tac-toe.png";
import Image6 from "../../../src/assets/calculator.png";

//Create a link to the code and a link to the projects

const Projects = () => {
  return (
    <>
      <div>
        <hr id="projectsLineBreak"></hr>
      </div>
      <div id="projects"></div>
      <div id="projectsTitle" data-aos="zoom-in-left">
        <p>.my(projects)</p>
      </div>
      {/* <div id="contactSubHeader">
        <h3>Follow the links.</h3>
      </div> */}
      <main className="container">
        <section className="card" data-aos="fade-right">
          <img
            src={Image1}
            alt="virtual-velocity"
            loading="lazy"
            id="left-image"
          ></img>
          <div>
            <h3>Virtual Velocity</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
            </p>
            <div id="blahhh">
              <Link
                to={{
                  pathname: "https://github.com/2006-cpu/virtual-velocity",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Github
              </Link>
              <Link
                to={{
                  pathname: "https://virtual-trader.herokuapp.com/",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed
              </Link>
            </div>
          </div>
        </section>

        <section className="card" data-aos="fade-left">
          <img
            src={Image2}
            alt="fitness-tracker"
            style={{ objectPosition: "left" }}
            loading="lazy"
            id="right-image"
          ></img>
          <div>
            <h3>Fitness Tracker</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
            </p>
            <div id="blahhh">
              <Link
                to={{
                  pathname:
                    "https://github.com/Jonmorgan12/UNIV_FitnessTrackr_React_Starter",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Github
              </Link>
              <Link
                to={{
                  pathname: "https://boring-wright-f10ed1.netlify.app/",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed
              </Link>
            </div>
          </div>
        </section>

        <section className="card" data-aos="fade-right">
          <img
            src={Image3}
            alt="strangers-things"
            style={{ objectPosition: "left" }}
            loading="lazy"
            id="left-image"
          ></img>
          <div>
            <h3>Strangers Things</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
            </p>
            <div id="blahhh">
              <Link
                to="/"
                className="btn"
                style={{
                  textDecoration: "2px solid red line-through",
                  cursor: "none",
                }}
                disabled="true"
              >
                Github
              </Link>
              <Link
                to={{
                  pathname: "https://determined-kalam-314241.netlify.app/",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed
              </Link>
            </div>
          </div>
        </section>

        <section className="card" data-aos="fade-left">
          <img
            src={Image4}
            alt="portfolio"
            loading="lazy"
            id="right-image"
          ></img>
          <div>
            <h3>Personal Portfolio</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
            </p>
            <div id="blahhh">
              <Link
                to={{
                  pathname: "https://github.com/Jonmorgan12/personal-portfolio",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Github
              </Link>
              <Link
                // to={{
                //   pathname: "",
                // }}
                // target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed
              </Link>
            </div>
          </div>
        </section>

        <section className="card" data-aos="fade-right">
          <img
            src={Image5}
            alt="tic-tac-toe"
            loading="lazy"
            id="left-image"
          ></img>
          <div>
            <h3>Tic Tac Toe</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
            </p>
            <div id="blahhh">
              <Link
                to="/"
                className="btn"
                style={{
                  textDecoration: "2px solid red line-through",
                  cursor: "none",
                }}
                disabled="true"
              >
                Github
              </Link>
              <Link
                to={{
                  pathname: "https://youthful-mayer-bd7f06.netlify.app/",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed
              </Link>
            </div>
          </div>
        </section>

        <section className="card" data-aos="fade-left">
          <img
            src={Image6}
            alt="calculator"
            loading="lazy"
            id="right-image"
          ></img>
          <div>
            <h3>Calculator</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
            </p>
            <div id="blahhh">
              <Link
                to="/"
                className="btn"
                style={{
                  textDecoration: "2px solid red line-through",
                  cursor: "none",
                }}
                disabled="true"
              >
                Github
              </Link>
              <Link
                to={{
                  pathname: "https://practical-sammet-e73bc4.netlify.app",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
