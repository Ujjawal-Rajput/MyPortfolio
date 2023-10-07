import React from 'react'
import Project_card from './Project_card'

function Projects() {
    return (
        <>
        {/* <h2 style={{ color: "#fff" }}>My Projects</h2> */}
        <div className='main_page'>
            <div className='project-cards'>
                <Project_card pic="/ourownlibrary.png" caption="Our Own Library" text="It is a library for those who actually have interest in reading" type="Web Development" url="https://mainlibrary.pythonanywhere.com" />
                <Project_card pic="/youtubemini.png" caption="Youtube-Mini" text="A platform where user can upload his/her video and view other's" type="Web Development" url="https://logoder832.pythonanywhere.com" />
                <Project_card pic="/facebookmini.png" caption="Facebook-Mini" text="A basic javascript page just like facebook login and signup design" type="Web Development" url="https://ourownlibrary.pythonanywhere.com" />
            </div>
        </div>
        </>
    )
}

export default Projects
