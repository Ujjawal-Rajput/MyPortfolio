import React from 'react'
import Photo from "../components/Photo/"

function Landing() {
  return (
    <>
      <div className='main_page'>
        <Photo />
        <div className='Landing_text'>
          {/* <br/><br/><br/> */}
          <h2>| <span>Hello</span></h2>
          <h1>I'm Ujjawal Rajput</h1>
          <div className='text'>
            <p>Fullstack Developer & Student</p>
            <p>Hi there! Welcome to my portfolio website, where i can showcase my work.
              I love all things tech and coding, I love ot share my knowledge and experience with others.</p>
            <div className='skills'>
              <h4>Skills : </h4>
              <p>Full-Stack Development</p>
              <p>React.js</p>
              <p>
                python</p>
              <p>
                Web Applications</p>
              <p>
                Flask</p>
              <p>
                Software Development</p>
              <p>
                Databases</p>
              <p>
                Information Technology</p>
              <p>
                C++</p>
              <p>
                NumPy</p>
              <p>
                pandas</p>
              <p>
                Tkinter</p>
              <p>
                bootstrap</p>
              <p>
                MySQL</p>
              <p>
                Git</p>
              <p>
                Matplotlib</p>
              <p>
                HTML</p>
              <p>CSS</p>
              <p>
                JavaScript</p>
              <p>
                AJAX</p>
              <p>
                MongoDB</p>
              <p>
                Leadership</p>
              <p>
                Problem Solving</p>
              <p>
                Time Management</p>
              <p>
                Interpersonal Skills</p>
              <p>
                Communication</p>
              <p>
                Soft Skills</p>
              <p>
                Teamwork</p>
              <p>
                Engineering</p>
              <p>
                Visual Studio</p>
            </div>
          </div>
          <a href='https://www.linkedin.com/in/ujjawal-rajput' target='__blank'><button><i class="ri-linkedin-box-fill"></i> Connect me on Linkedin</button></a><br />
        </div>
      </div>
    </>
  )
}

export default Landing


// <li onClick = { closeMobileNav } > <NavLink style={(isActive) => `Color:${isActive ? "red" : "green"}`}>Home</NavLink></ >
// <li onClick={closeMobileNav}><NavLink>About</NavLink></li>
// <li onClick={closeMobileNav}><NavLink>My Gears - NEW</NavLink></li>
// <li onClick={closeMobileNav}><NavLink>Blogs - NEW</NavLink></li>
// <li onClick={closeMobileNav}><NavLink>Connect</NavLink></li>
