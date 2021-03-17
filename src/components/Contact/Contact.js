import React from "react";
// import { NavLink } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
// import { RiMailSendLine } from "react-icons/ri";
import "./Contact.css";
import Resume from "../../resume/jon-cobb-resume.pdf";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div id="contact"></div>
        <div>
          <hr id="lineBreak"></hr>
        </div>
        <div id="projectsTitle">
          <p>Contact</p>
        </div>
        <div id="contactSubHeader">
          <h3>I look forward to do buisness with you.</h3>
        </div>
        <div id="contactSubHeader">
          <h5>
            Download my resume{" "}
            <a href={Resume} download="Jon Cobb Resume">
              here
            </a>
            .
          </h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
