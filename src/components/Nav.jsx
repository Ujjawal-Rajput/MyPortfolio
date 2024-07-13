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
            <NavLink to="/MyPortfolio"><li>Home</li></NavLink>
            <NavLink to="/MyPortfolio/about"><li>About</li></NavLink>
            <NavLink to="/MyPortfolio/projects"><li>My Projects</li></NavLink>
            <NavLink to="/MyPortfolio/blog"><li>Blogs - NEW</li></NavLink>
            <a href='https://www.linkedin.com/in/ujjawal-rajput' target='__blank'><li>Connect-On-Linkedin</li></a>
          </ul>
        </div>
        <div className='navham' onClick={toggleMobileNav}>
          <i className="ri-menu-3-fill"></i>
        </div>


        <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
          <i onClick={closeMobileNav} className="ri-close-circle-fill"></i>
          <div>
            <ul>
              <NavLink to="/MyPortfolio"><li>Home</li></NavLink>
              <NavLink to="/MyPortfolio/about"><li>About me</li></NavLink>
              <NavLink to="/MyPortfolio/projects"><li>My projects</li></NavLink>
              <NavLink to="/MyPortfolio/blog"><li>My Blogs - <span style={{ color: "#01D293" }}>NEW</span></li></NavLink>


              <br/><br/><br/>
              <p>My socials media</p><br/>
              <a href='https://www.linkedin.com/in/ujjawal-rajput' target='__blank'><li>Connect on linkedin</li></a>
              <a href='https://www.instagram.com/rujjawal16' target='__blank'><li>Follow on instagram</li></a>
              <a href='https://x.com/ujjawal18045845?t=I88hL-Njiri9DkJF4H5lwQ&s=09' target='__blank'><li>Follow on X</li></a>
              <a href='https://github.com/Ujjawal-Rajput/' target='__blank'><li>Follow on github</li></a>           
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
