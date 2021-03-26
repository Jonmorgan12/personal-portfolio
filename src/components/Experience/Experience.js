import React from "react";
import "./Experience.css";

import {
  SiJavascript,
  SiJquery,
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiHeroku,
  SiNetlify,
  SiPostman,
  SiFirebase,
  SiRedux,
} from "react-icons/si";

import {
  FaNode,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";

import { AiOutlineConsoleSql } from "react-icons/ai";

const Experience = () => {
  return (
    <>
      <div id="experience"></div>
      <div>
        <hr id="lineBreak"></hr>
      </div>
      <div className="skillsTitle">
        <p>.skills(experience)</p>
      </div>
      <div className="skillsContainer">
        <div className="skillsImages" data-aos="fade-in">
          <ul>
            <li>
              <SiJavascript
                size="3em"
                color="yellow"
                style={{
                  backgroundColor: "black",
                }}
              />
            </li>
            <li>
              <SiHtml5 size="3em" color="f06529" />
            </li>
            <li>
              <SiCss3 size="3em" color="2965f1" />
            </li>
            <li>
              <FaSass size="3em" color="#c69" />
            </li>
            <li>
              <AiOutlineConsoleSql size="3em" color="#00758F" />
            </li>
            <li>
              <FaReact size="3em" color="61DBFB" />
            </li>
            <li>
              <SiRedux size="3em" color="#764abc" />
            </li>
            <li>
              <SiJquery size="3em" color="#0868AC" />
            </li>
            <li>
              <FaBootstrap size="3em" color="563d7c" />
            </li>
            <li>
              <SiPostgresql size="3em" color="336791" />
            </li>
            <li>
              <FaNode size="3em" color="3C873A" />
            </li>
            <li>
              <FaGithub size="3em" color="black" />
            </li>
            <li>
              <FaGitAlt size="3em" color="f34f29" />
            </li>
            <li>
              <SiPostman size="3em" color="EF5B25" />
            </li>
            <li>
              <SiHeroku size="3em" color="6567a5" />
            </li>
            <li>
              <SiNetlify size="3em" color="00C7B7" />
            </li>
            <li>
              <SiFirebase size="3em" color="#FFA611" />
            </li>
          </ul>
          <br />
          <div className="skillsList" data-aos="fade-down">
            <b>
              Languages: JavaScript, HTML5, CSS, SCSS, SQL,
              <br />
              Frameworks/Libraries: React, Redux, JQuery, Bootstrap 4 / React
              Bootstrap
              <br />
              Databases: PostgreSQL
              <br />
              Other Tools: Node.js, Github, Git, Postman, Heroku, Netlify,
              Firebase
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
