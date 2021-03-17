import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Image1 from "../../../src/assets/virtual-traders.png";
import Image2 from "../../../src/assets/fitness-tracker.png";
import Image3 from "../../../src/assets/strangers-things.png";
import Image4 from "../../../src/assets/personal-portfolio.png";
import Image5 from "../../../src/assets/tic-tac-toe.png";
import image6 from "../../../src/assets/calculator.png";

//Create a link to the code and a link to the projects

const Projects = () => {
  return (
    <>
      <div id="projects"></div>
      <div>
        <hr id="lineBreak"></hr>
      </div>
      <div id="projectsTitle">
        <p>Projects</p>
      </div>
      {/* <div id="contactSubHeader">
        <h3>Follow the links.</h3>
      </div> */}
      <div>
        <div id="projectDescriptionContainer">
          <img
            id="project-image-left"
            src={Image1}
            loading="lazy"
            alt="img1"
          ></img>
          <div id="blahhh">
            {/* NEED DEPLOYED SITE LINK */}
            <h3>Virtual Velocity</h3>
            <Link
              to={{ pathname: "https://github.com/2006-cpu/virtual-velocity" }}
              target="_blank"
              rel="noreferrer"
            >
              source code
            </Link>
            <Link>deployed site</Link>
          </div>
          <hr id="projectsLineBreak"></hr>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          </p>
        </div>
      </div>
      <div>
        <div id="projectDescriptionContainer">
          <img
            style={{ objectFit: "cover", objectPosition: "left" }}
            id="project-image-left"
            src={Image2}
            loading="lazy"
            alt=""
          ></img>
          <div id="blahhh">
            <h3>Fitness Tracker</h3>
            <Link
              to={{
                pathname:
                  "https://github.com/Jonmorgan12/UNIV_FitnessTrackr_React_Starter",
              }}
              target="_blank"
              rel="noreferrer"
            >
              source code
            </Link>
            <Link
              to={{
                pathname: "https://boring-wright-f10ed1.netlify.app/",
              }}
              target="_blank"
              rel="noreferrer"
            >
              deployed site
            </Link>
          </div>
          <hr id="projectsLineBreak"></hr>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          </p>
        </div>
      </div>
      <div>
        <div id="projectDescriptionContainer">
          <img
            style={{ objectFit: "cover", objectPosition: "left" }}
            id="project-image-left"
            src={Image3}
            loading="lazy"
            alt=""
          ></img>
          <div id="blahhh">
            {/* NEED SOURCE CODE LINK */}
            <h3>Strangers Things</h3>
            <Link to={{ pathname: "" }} target="_blank" rel="noreferrer">
              source code
            </Link>
            <Link
              to={{
                pathname: "https://determined-kalam-314241.netlify.app/",
              }}
              target="_blank"
              rel="noreferrer"
            >
              deployed site
            </Link>
          </div>
          <hr id="projectsLineBreak"></hr>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          </p>
        </div>
      </div>
      <div>
        <div id="projectDescriptionContainer">
          <img id="project-image-left" src={Image4} loading="lazy" alt=""></img>
          <div id="blahhh">
            {/* NEED BOTH LINKS */}
            <h3>Personal Portfolio</h3>
            <Link to={{ pathname: "" }} target="_blank" rel="noreferrer">
              source code
            </Link>
            <Link>deployed site</Link>
          </div>
          <hr id="projectsLineBreak"></hr>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          </p>
        </div>
      </div>
      <div>
        <div id="projectDescriptionContainer">
          <img id="project-image-left" src={Image5} alt="" loading="lazy"></img>
          <div id="blahhh">
            {/* NEED SOURCE CODE LINK */}
            <h3>Tic Tac Toe</h3>
            <Link to={{ pathname: "" }} target="_blank" rel="noreferrer">
              source code
            </Link>
            <Link
              to={{ pathname: "https://youthful-mayer-bd7f06.netlify.app/" }}
              target="_blank"
              rel="noreferrer"
            >
              deployed site
            </Link>
          </div>
          <hr id="projectsLineBreak"></hr>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          </p>
        </div>
      </div>
      <div>
        <div id="projectDescriptionContainer">
          <img id="project-image-left" src={image6} alt="" loading="lazy"></img>
          <div id="blahhh">
            {/* NEED SOURCE CODE LINK */}
            <h3>Calculator</h3>
            <Link to={{ pathname: "" }} target="_blank" rel="noreferrer">
              source code
            </Link>
            <Link
              to={{ pathname: "https://practical-sammet-e73bc4.netlify.app/" }}
              target="_blank"
              rel="noreferrer"
            >
              deployed site
            </Link>
          </div>
          <hr id="projectsLineBreak"></hr>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
