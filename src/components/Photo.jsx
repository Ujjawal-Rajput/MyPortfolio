import React, { useEffect, useState } from 'react'

function Photo() {

//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch('https://api.github.com/users/ujjawal-rajput');
//             // https://api.linkedin.com/v2/people/id:ujjawal-rajput
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const data = await response.json();
//             setUserData(data); // Set fetched data to state
//             console.log(data); // Print fetched data to console
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
// }, []);

// i'm not using this currently.


  return (
    <>
      {/* <div className="flip-container">
        <div className="flipper">

          <div className="front">
            <img src="/MyPortfolio/profile.png" alt="Front" />
          </div>

          <div className="back">
            <img src="/MyPortfolio/profile.png" alt="Back" />
          </div>

        </div>
      </div> */}


      <div className='main_page' >
        <div className='flip-container'>
          <div className='Landing_img flipper'>
            <div className="front">
              <img src="/MyPortfolio/profile.png" alt="Ujjawal Rajput" />
            </div>

            {/* <div className="back">
              <img src="/MyPortfolio/profile2.png" alt="Ujjawal Rajput" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Photo
