import React from 'react';
import './Aboutus.css';
const Aboutus = () => {
  return (
    <>
    
<div className="main-section bg-lightgrey">
  <div className="container">
    <div className="width-50">
   
      <img src="profile.jpeg" alt="Manish Profile" className="about-img" />
    </div>
    <div className="width-50">
      <div className="about-us">
        <h2 className="heading-text">About Us</h2>
        <h3>I am available for UI UX Design Project</h3>
        <p>Hi, I am Evans Dezven, From USA. Get best computer science student portfolio website Genius In You With Genius 2023. Welcome To The Best Private University in 2023.</p>
        <div className="width-50 mt-20">
          <table cellspacing="8" cellpadding="8">
            <tr>
              <th>Name:</th>
              <td>Evans Dezven</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td> info@example.com</td>
            </tr>
            <tr>
              <th>Birthday:</th>
              <td> 12 March, 1991</td>
            </tr>
            <tr>
              <th>Study:</th>
              <td> Chicago University</td>
            </tr>
          </table>
        </div>
        <div className="width-50 mt-20">
          <table cellspacing="8" cellpadding="8">
            <tr>
              <th>Phone:</th>
              <td>(+12) 3467-890-123</td>
            </tr>
            <tr>
              <th>City:</th>
              <td>New York, USA</td>
            </tr>
            <tr>
              <th>Freelancer:</th>
              <td> Available</td>
            </tr>
            <tr>
              <th>Website:</th>
              <td> www.dezven.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Aboutus
