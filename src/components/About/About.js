import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="about"></div>
      <div className="aboutTitle" data-aos="zoom-in-right">
        <p>.about(me)</p>
      </div>
      <div
        className="descriptionContainer"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        {/* <img
            id="floating-image-right"
            src="https://www.harmonytoc.com/Content/img/offline/tool/audit/placeholder.png"
            alt=""
          ></img> */}
        <h3>Programming Background</h3>
        <p>
          Hello! and welcome to my personal portfolio. My name is Jon, and I am
          a full stack software developer. I bring over two years of developing
          experience designing and successfully deploying applications with a
          focus on front end development. Last year prior to the first shut
          down, I enrolled in a course through Fullstack Academy. Fullstack is a
          top-ranked coding bootcamp with campuses in NYC, Chicago, and online.
          The course was a six month accelerated program that sharpened my
          skills as a developer as well as taught me how to better design and
          develop projects in real time scenarios. During my time at Fullstack,
          I became a relentless, detail oriented problem solver. I exemplify
          passion and pride in my work. Above all I am goal oriented, and have
          the ability to improvise and learn in any given scenario.
        </p>
        {/* <img
            id="floating-image-left"
            src="https://www.harmonytoc.com/Content/img/offline/tool/audit/placeholder.png"
            alt=""
          ></img> */}
        <h3>A little more about me</h3>
        <p>
          When I am not going down the rabbit hole of Stack Overflow until 3am
          in the morning. I am usually working out, playing games, or studying
          new material (knowledge is power). You probably wouldn't guess it by
          looking at my picture. However, I am training to compete in amature
          cage fighting! Yup thats right, I get beat up for fun... and on
          ocasions give the beating for fun. I picked a bad hobby and career to
          dedicate all my time to. But I can say with honesty I love what I do.
          I really do not like the saying that "All developers are lazy!".
          People who say that clearly havent gotten the chance to know me. I'd
          like to change that way of thinking with the work I produce!
        </p>
      </div>
    </>
  );
};

export default About;
