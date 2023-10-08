import React from 'react'
import BlogCard from "./BlogCard"


function Blog() {
  return (
    <div className='main_page' style={{height: "calc(100% - 70px)"}}>
      <div className="blogs">
        <BlogCard id="1" caption="Build an Email Validator with HTML, CSS, and JavaScript" date="September 15, 2023" content="Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!" url="/Myprofile/blog/1/"/>
        <BlogCard id="1" caption="Build an Email Validator with HTML, CSS, and JavaScript" date="September 15, 2023" content="Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!" url="/Myprofile/blog/1/"/>
        <BlogCard id="1" caption="Build an Email Validator with HTML, CSS, and JavaScript" date="September 15, 2023" content="Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!" url="/Myprofile/blog/1/"/>
        </div>
    </div>
  )
}

export default Blog
