import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";

function Home() {
  return (
    <div className='container'>
      <Nav />
      <div class='homeContainer'>
        <p className='introText'>Hello, I am</p>
        <h1 className='overlayText'>Dayton Steinmeyer</h1>

        <p className='HomeSummary'>
          I'm a software engineer located in the Atlanta, Georgia area
          specializing in building high-quality websites and applications.
        </p>
        <div className='infoContainer'>
          <div className='skills'>
            <h2 className='skillsText'>Skills</h2>
            <div className='skillsWrapper'>
              <ul className='sul'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul className='sul'>
                <li>React</li>
                <li>Redux</li>
                <li>React-Native</li>
              </ul>
              <ul className='sul'>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          <div className='contactContainer'>
            <h2 className='contactHome'>Contact Me</h2>
            <p className='email'>Daytonrsteinmeyer@gmail.com</p>
            <div className='Icons'>
              <a href='https://github.com/DaytonS3'>
                <i class='fab fa-github fa-3x' />
              </a>
              <a href='https://www.linkedin.com/in/dayton-steinmeyer-a83520174/'>
                <i class='fab fa-linkedin fa-3x' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
