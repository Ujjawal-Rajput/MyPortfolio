import React from 'react'
import Project_card from './Project_card'

function Projects() {

    const cardData = [
        {
            id: 0,
            pic: "/MyPortfolio/losersclub.png",
            caption: "LosersClub Rooms",
            text: "A dynamic Python web app that empowers users to create personalized rooms",
            type: "Web Development",
            url: "https://losersclub.pythonanywhere.com"
        },
        {
            id: 1,
            pic: "/MyPortfolio/ourownlibrary.png",
            caption: "Our Own Library",
            text: "It is a library for those who actually have interest in reading",
            type: "Web Development",
            url: "https://mainlibrary.pythonanywhere.com"
        },
        {
            id: 2,
            pic: "/MyPortfolio/youtubemini.png",
            caption: "Youtube-Mini",
            text: "A platform where user can upload his/her video and view other's",
            type: "Web Development",
            url: "https://logoder832.pythonanywhere.com"
        },
        {
            id: 3,
            pic: "/MyPortfolio/facebookmini.png",
            caption: "Facebook-Mini",
            text: "A basic javascript page just like facebook login and signup design",
            type: "Web Development",
            url: "https://ourownlibrary.pythonanywhere.com"
        }


    ];
    return (
        <>
            {/* <h2 style={{ color: "#fff" }}>My Projects</h2> */}
            <div className='main_page'>
                <div className='project-cards'>
                    {cardData.length > 0 && cardData.map((item, index) => (
                        <Project_card
                            key={item.id}
                            pic={item.pic}
                            caption={item.caption}
                            text={item.text}
                            type={item.type}
                            url={item.url}
                        />
                    ))}

                    {/* <Project_card pic="/MyPortfolio/ourownlibrary.png" caption="Our Own Library" text="It is a library for those who actually have interest in reading" type="Web Development" url="https://mainlibrary.pythonanywhere.com" />
                    <Project_card pic="/MyPortfolio/youtubemini.png" caption="Youtube-Mini" text="A platform where user can upload his/her video and view other's" type="Web Development" url="https://logoder832.pythonanywhere.com" />
                    <Project_card pic="/MyPortfolio/facebookmini.png" caption="Facebook-Mini" text="A basic javascript page just like facebook login and signup design" type="Web Development" url="https://ourownlibrary.pythonanywhere.com" /> */}
                </div>
            </div>
        </>
    )
}

export default Projects
