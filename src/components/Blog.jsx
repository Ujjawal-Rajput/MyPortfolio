import React from 'react'
import BlogCard from "./BlogCard"


function Blog() {

  const blogData = [
    {
      id: 0,
      title: "Build an Email Validator with HTML, CSS, and JavaScript",
      date: "September 15, 2023",
      content: "Learn how to create a responsive Email Validator using...",
      url: "#"
      // url: "/Myprofile/blog/1/" 
    }
    

  ];
  return (
    // <div className='main_page'/>
    //  style={{ height: "calc(100% - 70px)" }}>
    <div style={{color:"#fff"}}>
      <div className="blogs">
        <h3>My Blogs</h3>

        {blogData.length > 0 && blogData.map((item, index) => (
          <BlogCard
            key={item.id}
            title={item.title}
            date={item.date}
            content={item.content}
            url={item.url}
          />
        ))}
        {/* <BlogCard id="1" caption="Build an Email Validator with HTML, CSS, and JavaScript" date="September 15, 2023" content="Learn how to create a responsive Email Validator using..." url="/Myprofile/blog/1/" />
        <BlogCard id="1" caption="Build an Email Validator with HTML, CSS, and JavaScript" date="September 15, 2023" content="Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!" url="/Myprofile/blog/1/"/>
        <BlogCard id="1" caption="Build an Email Validator with HTML, CSS, and JavaScript" date="September 15, 2023" content="Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!" url="/Myprofile/blog/1/"/> */}
      </div>
    </div>
  )
}

export default Blog
