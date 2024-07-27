import React from 'react'
import Photo from '../components/Photo/'

function About() {
    return (
        <div className='main_page'>
            <Photo/>
            <div className='Landing_text'>
                {/* <h2>| <span>Hello</span></h2> */}
                <h2><span style={{fontSize:"30px"}}>|</span> <span>Hiie</span></h2>
                <h1>I'm Ujjawal Rajput</h1>
                <div className='text'>
                    <p>Fullstack Developer & Student</p>
                    <p>👋 I'm a sophomore pursuing B-tech in computer science. In the past few years, I've acquired skills in technologies such as Python, Flask, HTML, CSS, Javascript, Numpy, Pandas, and Tkinter. Also, for implementation purposes, I've made web applications as part of my project. For projects, you can refer to my projects section below.<br/><br/>I am dedicated to continuous improvement and actively explore new libraries, frameworks, and tools to enhance my skillset, like ReactJs. Along with sharpening my development skills, I am deeply committed to mastering data structures and algorithms (DSA). Through rigorous self-study and online courses, I am developing a robust logic-building skill set that will empower me to tackle complex challenges in software development.</p>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default About
