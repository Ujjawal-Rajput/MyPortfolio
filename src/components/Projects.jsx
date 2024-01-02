import React from 'react'
import Project_card from './Project_card'

function Projects() {
    return (
        <>
        {/* <h2 style={{ color: "#fff" }}>My Projects</h2> */}
        <div className='main_page'>
            <div className='project-cards'>
                <Project_card pic="/MyPortfolio/losersclub.png" caption="LosersClub Rooms" text="A dynamic Python web app that empowers users to create personalized rooms" type="Web Development" url="https://losersclub.pythonanywhere.com" />
                <Project_card pic="/MyPortfolio/ourownlibrary.png" caption="Our Own Library" text="It is a library for those who actually have interest in reading" type="Web Development" url="https://mainlibrary.pythonanywhere.com" />
                <Project_card pic="/MyPortfolio/youtubemini.png" caption="Youtube-Mini" text="A platform where user can upload his/her video and view other's" type="Web Development" url="https://logoder832.pythonanywhere.com" />
                <Project_card pic="/MyPortfolio/facebookmini.png" caption="Facebook-Mini" text="A basic javascript page just like facebook login and signup design" type="Web Development" url="https://ourownlibrary.pythonanywhere.com" />
            </div>
        </div>
        </>
    )
}

export default Projects
