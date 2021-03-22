import React from "react";
import "./Home.css";
import Image from "../../../src/assets/JonPhoto1.jpg";

//typewriting animation!!!

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <div id="bigImage">
        <div id="homeTitle">
          {/* <p>Jon Cobb</p>
          <h3 id="homeSubHeader">Software Engineer.</h3> */}
          <h1 data-aos="fade-up">Software Engineer.</h1>
          <img
            src={Image}
            alt="selfie"
            data-aos="fade-up"
            data-aos-delay="1000"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
