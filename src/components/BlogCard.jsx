import React from 'react'

function BlogCard(props) {
  return (
    <div className='blogcard'>
      <h3>{props.title}</h3>
      <div className="bloginfo">
        <img src='/MyPortfolio/profile.png'/>
        <p>Ujjawal Rajput</p>
        <p style={{color:"#808DAD"}}>{props.date}</p>
      </div>
      <div className="blogcontent">
        <p>{props.content}</p>
      </div>
      <a href={props.url}>Read more</a>
    </div>
  )
}

export default BlogCard
