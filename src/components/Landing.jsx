import React from 'react'

function Landing() {
  return (
    <div className='main_page'>
      <div className='Landing_img'>
        <img src='/profile.png' />
      </div>
      <div className='Landing_text'>
        {/* <br/><br/><br/> */}
        <h2>| <span>Hello</span></h2>
        <h1>I'm Ujjawal Rajput</h1>
        <div className='text'>
          <p>Fullstack Developer & Instructor</p>
          <p>Hi there! My name is Piyush Garg and I’m a software engineer with over 5 years of experience in the industry.
            I love all things tech and coding, and on my channel, I share my knowledge and experience with others.</p>
        </div>
        <a href='https://www.linkedin.com/in/ujjawal-rajput'><button><i class="ri-linkedin-box-fill"></i> Connect me on Linkedin</button></a><br/>
      </div>
    </div>
  )
}

export default Landing


  // <li onClick = { closeMobileNav } > <NavLink style={(isActive) => `Color:${isActive ? "red" : "green"}`}>Home</NavLink></ >
  // <li onClick={closeMobileNav}><NavLink>About</NavLink></li>
  // <li onClick={closeMobileNav}><NavLink>My Gears - NEW</NavLink></li>
  // <li onClick={closeMobileNav}><NavLink>Blogs - NEW</NavLink></li>
  // <li onClick={closeMobileNav}><NavLink>Connect</NavLink></li>
