import React from 'react';
import './Home.css';
import Nav from '../Nav/Nav';

function Home() {
  return (
    <>
      <Nav />
      <div class="homeContainer">
        <div className="introContainer">
          <p className="introText">Hello, I am</p>
          <h1 className="overlayText">Dayton Steinmeyer</h1>
          <p className="HomeSummary">
            I'm a software engineer located in the Atlanta, Georgia area
            specializing in building high-quality websites and applications.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
