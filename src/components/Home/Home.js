import React from "react";
import "./Home.css";
import Image from "../../../src/assets/JonPhoto1.jpg";

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <div className="bigImage">
        <div className="homeTitle">
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
