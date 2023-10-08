import React, { useEffect } from 'react'

function Photo() {

  // useEffect(()=>{
  //   fetch("https://api.linkedin.com/v2/people/id:ujjawal-rajput")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data)
  //   })
  // })
  return (
    <div className='main_page'>
      <div className='Landing_img'>
        <img src='/MyPortfolio/profile.png' />
      </div>
    </div>
  )
}

export default Photo
