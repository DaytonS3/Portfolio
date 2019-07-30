import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="topSpacer">
      <div class="container">
        <div>
          <a href="#" className="HomeLogo">
            DS
          </a>
        </div>
        <div class="topnav">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
