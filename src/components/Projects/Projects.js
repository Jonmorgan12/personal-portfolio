import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Image1 from "../../../src/assets/virtual-traders.png";
import Image2 from "../../../src/assets/fitness-tracker.png";
import Image3 from "../../../src/assets/strangers-things.png";
import Image4 from "../../../src/assets/personal-portfolio.png";
import Image5 from "../../../src/assets/tic-tac-toe.png";
import Image6 from "../../../src/assets/crwn-clothing.png";

const Projects = () => {
  return (
    <>
      <div id="projects"></div>
      <div>
        <hr className="projectsLineBreak"></hr>
      </div>
      <div className="projectsTitle">
        <p>.my(projects)</p>
      </div>
      <main className="container">
        <section className="card" data-aos="fade-left">
          <img
            src={Image6}
            alt="crwn-clothing"
            style={{ objectPosition: "right" }}
            loading="lazy"
            id="right-image"
          ></img>
          <div>
            <h3>CRWN Clothing Co.</h3>
            <p>
              Fullstack eCommerce/Shopify application, soley developed. This
              project allows a new or current user to create an account, or log
              in with an exsisting account through Google Firebase. Add Items to
              a shopping cart, and when ready checkout using the stripe
              integrated functionality.
              <br />
              <br />
              <b>Front End: React, Javascript, Redux, HTML, SCSS</b>
              <br />
              <br />
              <b>Back End: Google Firebase, NoSQL</b>
            </p>
            <div className="linkContainer">
              <Link
                to={{
                  pathname: "https://github.com/Jonmorgan12/crwn-clothing",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Github
              </Link>
              <Link
                to={{
                  pathname: "https://crwn-clothing-co12.herokuapp.com/",
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
            src={Image1}
            alt="virtual-velocity"
            loading="lazy"
            id="left-image"
          ></img>
          <div>
            <h3>Virtual Traders</h3>
            <p>
              Fullstack mock eCommerce/Shopify application that was developed as
              the capstone project during my remaining time attending Fullstack.
              This project simulated a real work enviorment based on the demands
              of the client and certain deadlines to meet as a team of
              developers.
              <br />
              <br />
              <b>
                Front End: React, JavaScript, HTML, CSS, React Bootstrap
                <br />
                <br />
                Back End: SQL, Node.js, PostgreSQL
              </b>
            </p>
            <div className="linkContainer">
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
              Fullstack application, soley developed to track an individuals
              workout. This project allowed a new or current user to create a
              routine and add multiple different workouts to those routines. If
              the user then chose, he or she can post that routine publicly for
              all to see!
              <br />
              <br />
              <b>
                Front End: React, JavaScript, HTML, CSS, Bootstrap 4
                <br />
                <br />
                Back End: SQL, Node.js, PostgreSQL, Jest
              </b>
            </p>
            <div className="linkContainer">
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
              Fullstack mock Craigslist application, soley developed with the
              purpose to sell a users items. This project allowed a new or
              current user to post a new item with a detailed time and
              description. When the user is then ready, he or she can post the
              item publicly, update, or delete the item when sold!
              <br />
              <br />
              <b>
                Front End: JavaScript, HTML, CSS, Bootstrap 4
                <br />
                <br />
                Back End: SQL, Node.js, PostgreSQL
              </b>
            </p>
            <div className="linkContainer">
              <Link
                to="/"
                className="btn"
                style={{
                  textDecoration: "2px solid red line-through",
                  cursor: "none",
                }}
                disabled={true}
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
            <h3>Professional Portfolio</h3>
            <p>
              Front end portfolio application, soley developed. The purpose of
              this application is to house current/future projects and highlight
              my styling and design skills. The site consists of react smooth
              scrolling, fading and sliding animations, hyperlinks, download
              component, and mobile responsivness.
              <br />
              <br />
              <b>Front End: React, JavaScript, HTML, CSS</b>
              <br />
              <br />
              <b>Back End: NAN</b>
            </p>
            <div className="linkContainer">
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
                to={{
                  pathname:
                    "https://jon-cobb-professional-portfiolio.netlify.app/",
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
            src={Image5}
            alt="tic-tac-toe"
            loading="lazy"
            id="left-image"
          ></img>
          <div>
            <h3>Tic Tac Toe</h3>
            <p>
              Front end game application, soley developed with the purpose to
              recreate the traditional tic tac toe game. The game was created
              using primarily Jquery and Javascript logic and allows up to two
              players to go head to head and test their competitive tic tac toe
              skills!
              <br />
              <br />
              <b>Front End: JavaScript, HTML, CSS</b>
              <br />
              <br />
              <b>Back End: NAN</b>
            </p>
            <div className="linkContainer">
              <Link
                to="/"
                className="btn"
                style={{
                  textDecoration: "2px solid red line-through",
                  cursor: "none",
                }}
                disabled={true}
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
      </main>
    </>
  );
};

export default Projects;
