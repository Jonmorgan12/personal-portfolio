import React from "react";
import "./Contact.css";
import Resume from "../../resume/jon-cobb-resume.pdf";

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
          <h3>I look forward to do buisness with you.</h3>
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
      </div>
    </>
  );
};

export default Contact;
