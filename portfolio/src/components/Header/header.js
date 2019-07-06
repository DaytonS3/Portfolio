import React from "react";
import "./header.css";

function Header() {
  return (
    <div class="bg-img">
      <div class="container">
        <div>
          <a href="#" className="headerLogo">
            Dayton Steinmeyer
          </a>
        </div>
        <div class="topnav">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
