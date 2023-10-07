import React from 'react'
import Photo from '../components/Photo/'

function About() {
    return (
        <div className='main_page'>
            <Photo/>
            <div className='Landing_text'>
                <h2>| <span>Hello</span></h2>
                <h1>I'm Ujjawal Rajput</h1>
                <div className='text'>
                    <p>Fullstack Developer & Student</p>
                    <p>👋 A sophomore pursuing B-tech in computer science.In my past years i've acquired skills in the technologies such as Python, Flask, HTML, CSS, Javascript, Numpy, Pandas, Tkinter. Also for the implementation purpose I've made web applications as my project. For projects you can refer my projects section below.<br /><br />I am dedicated to continuous improvement and actively explore new libraries, frameworks, and tools to enhance my skillset like ReactJs. Along with sharpening my development skills, I am deeply committed to mastering Data Structures and Algorithms (DSA). Through rigorous self-study and online courses, I am developing a robust logic-building skill set that will empower me to tackle complex challenges in software development.</p>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default About
