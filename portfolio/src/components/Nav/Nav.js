import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id="menu-nav">
      <div id="navigation-bar">
        <ul>
          <li>
            <a href="/">
              <i class="fa fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/projects">
              <i class="fa fa-handshake" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="https://resume.creddle.io/resume/ic1ul0iz32">
              <i class="fa fa-user" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
