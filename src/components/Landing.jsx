import React from 'react'
import Photo from "../components/Photo/"

function Landing() {
  return (
    <>
    <div className='main_page'>
      <Photo/>
      <div className='Landing_text'>
        {/* <br/><br/><br/> */}
        <h2>| <span>Hello</span></h2>
        <h1>I'm Ujjawal Rajput</h1>
        <div className='text'>
          <p>Fullstack Developer & Student</p>
          <p>Hi there! Welcome to my portfolio website, where i can showcase my work.
                        I love all things tech and coding, I love ot share my knowledge and experience with others.</p>
          <div className='skills'>
              <p>Full-stack</p>
          </div>
        </div>
        <a href='https://www.linkedin.com/in/ujjawal-rajput' target='__blank'><button><i class="ri-linkedin-box-fill"></i> Connect me on Linkedin</button></a><br/>
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
