import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import {Link, NavLink} from "react-router-dom";

function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    
  };

  return (
    <div className='op'>
      <div className='nav'>
        <div>
          <h1>
            <span>U</span>jjawal <span>R</span>ajput
          </h1>
        </div>
        <div className='navlinks'>
          <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/projects"><li>My Projects</li></NavLink>
            <NavLink to="/"><li>Blogs - NEW</li></NavLink>
            <a href='https://www.linkedin.com/in/ujjawal-rajput'><li>Connect-On-Linkedin</li></a>
          </ul>
        </div>
        <div className='navham' onClick={toggleMobileNav}>
          <i className="ri-menu-3-fill"></i>
        </div>
        <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
          <i onClick={closeMobileNav} className="ri-close-circle-fill"></i>
          <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/projects"><li>My Projects</li></NavLink>
            <NavLink to="/"><li>Blogs - NEW</li></NavLink>
            <a href='https://www.linkedin.com/in/ujjawal-rajput'><li>Connect-On-Linkedin</li></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
