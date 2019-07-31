import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div class="bg-img">
        <div className="introContainer">
          <p className="intro">Hello, I am</p>
          <h1 className="overlayText">Dayton Steinmeyer</h1>
        </div>

        <p className="HomeSummary">
          I'm a software engineer student located in the Atlanta, Georgia area
          specializing in building high-quality websites and applications.
        </p>
        <div className="contactContainer">
          <h2 className="contactHome">Contact Me</h2>
          <p className="email">Daytonrsteinmeyer@gmail.com</p>
          <div className="Icons">
            <a href="https://github.com/DaytonS3">
              <i class="fab fa-github fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/dayton-steinmeyer-a83520174/">
              <i class="fab fa-linkedin fa-2x" />
            </a>
          </div>
        </div>
        <div className="skillsContainer">
          <h2 className="skillsHeader">Skills</h2>
          <div className="listContainer">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React-Native</li>
            </ul>
            <ul>
              <li>Node.JS</li>
              <li>Express</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
