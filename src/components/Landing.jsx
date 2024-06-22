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
            <p>Fullstack Developer & Student</p><br />
            <p>👋 Hi there! Welcome to my portfolio website.
              I love all things tech and coding, I love ot share my knowledge and experience with others.</p>


            <div className='skills'>
              <h3>My Technical Skills : )</h3>
              <div className="languages">
                <h5>Programming Languages : </h5>
                <div>
                  <p>python</p>
                  <p>C</p>
                  <p>C++</p>
                  <p>JavaScript</p>
                  <p>HTML</p>
                  <p>CSS</p>

                </div>
              </div>

              <div className="webs">
                <h5>WebDev : </h5>
                <div>
                  <p>React.js</p>
                  <p>
                    bootstrap</p>

                </div>

              </div>

              <div className="databases">
                <h5>Databases : </h5>
                <div>
                  <p>
                    MySQL</p>
                  <p>
                    MongoDB</p>

                </div>

              </div>

              <div className="tools">
                <h5>Dev Tools : </h5>
                <div>
                  <p>
                    Git</p>
                  <p>
                    Visual Studio</p>
                  <p>Postman</p>

                </div>
              </div>

              <div className="pythonl">
                <h5>Python libraries : </h5>
                <div>
                  <p>
                    Flask</p>
                  <p>NumPy</p>
                  <p>
                    pandas</p>
                  <p>
                    Tkinter</p>

                  <p>
                    Matplotlib</p>

                </div>

              </div>

              <div className="javascriptl">
                <h5>Javascript : </h5>
                <div>

                  <p>
                    AJAX</p>
                </div>

              </div>

              <div className="others">
                <h5>Others : </h5>
                <div>
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

                </div>

              </div>

              {/* <p>Full-Stack Development</p>
              <p>
                Web Applications</p>
              <p>
                Software Development</p>
              <p>
                Databases</p>
              <p>
                Information Technology</p> */}


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
