import React from "react";
import "./Contact.css";
import Resume from "../../resume/jon-cobb-resume.pdf";

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div id="contact"></div>
      <div className="contactContainer">
        <div>
          <hr id="lineBreak"></hr>
        </div>
        <div className="contactTitle">
          <p>.contact(me)</p>
        </div>
        <div className="contactSubHeader">
          <h3>I look forward to do business with you.</h3>
        </div>
        <div className="resumeSubHeader">
          <h5>
            Download my resume{" "}
            <a href={Resume} download="Jon Cobb Resume">
              here
            </a>
            .
          </h5>
        </div>
        {/* <div className="contact-icons">
          <ul>
            <li>
              <FaLinkedin size="3em" color="#0077b5" />
            </li>
            <li>
              <FaGithub size="3em" color="black" />
            </li>
            <li>
              <SiGmail size="3em" color="red" />
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
