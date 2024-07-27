import Photo from "../components/Photo/"
import ContactMe from "./ContactMe"
import ScrollDown from "./ScrollDown"
import SkillsSection from "./SkillsSection"


function Landing() {
  return (
    <>
      <div className='main_page'>
        <Photo />
        <div className='Landing_text'>
          <h2><span style={{fontSize:"30px"}}>|</span> <span>Hey there !</span></h2>
          <h1>I'm Ujjawal Rajput</h1>
          <div className='text'>
            <p>Fullstack Developer & Student</p><br />
            <p>👋 Hi there! Welcome to my portfolio website. I'm a computer science and engineering student & I love all things tech and coding, I love to share my knowledge and experience with others.</p>
            
          </div>
          <a href='https://www.linkedin.com/in/ujjawal-rajput' target='__blank'><button><i class="ri-linkedin-box-fill"></i> Connect on Linkedin</button></a><br />
        </div>
      </div>
    
      <ScrollDown/>

      <div className='skills_section'>
        <h1>Technical Skills :)</h1>
        <SkillsSection/>
      </div>

      <div className="contact_section">
        <ContactMe/>
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
