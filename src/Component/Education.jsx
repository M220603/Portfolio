import React from 'react';
import './Education.css';
const Education = () => {
  return (
    <>
 
<section className="main-section bg-lightgrey">
  <div className="container">
    <div className="edu-exp">
      <h2 className="heading-text">Education</h2>
      <div className="experience-list">
        <div className="experience-content">
          <h2>10th(Mumbai University) </h2>
          <h3>2018-2019</h3>
          <p>I have Completed my SSC from Maharashtra Board</p>
         <li> <p>School: Model English High School</p>  </li>
         <li> <p>Secured: 86.80% </p></li>
         <li> <p>Place:Kalyan </p></li>
          </div>
      </div>
      <div className="experience-list">
        <div className="experience-content">
        <h2>Higher Secondary Education </h2>
        {/* <h2>12th(Mumbai University) </h2> */}
          <h3>2019-2021</h3>
          <p>I have Completed my HSC from Maharashtra Board</p>
         <li> <p>College:Smt. C.H.M. College</p>  </li>
          <li><p>Subject: PCMB</p></li>
         <li> <p>Secured: 87.17% </p></li>
         <li> <p>Place:Ulhasnagar</p></li>
         
        </div>
      </div>
      <div className="experience-list">
        <div className="experience-content">
          <h2>Bachelor in Computer Engineering</h2>
          <h3>2021-Present</h3>
          <p>I am pursing my CS Engineering from Datta Meghe College Of Engineering</p>
          <li> <p>SGPA: 8.00 </p></li>
          <li><p>Frontend Developer</p></li>
          <li> <p>MH-CET: 87%ile</p></li>
          <li> <p>Place:Airoli</p></li>
        </div>
      </div>
     </div>

     {/* Achievements or Experience Section */}
     <div className="edu-exp">
      <h2 className="heading-text">Achievements</h2>
      <div className="experience-list">
        <div className="experience-content">
          <h2>School & College Achievements</h2>
          <h3>Education</h3>
          <li><p>Topper of School in Maths Subject</p></li>
          <li><p>Scored 97/100 marks in SSC</p></li>
          <li><p>Overall 5th Rank in School</p></li>
          <li><p>MH-CET: 87%ile</p></li>
          {/* <li><p>Scout & Guide Certificate</p></li>
          <li><p>Member of Orgainizing Team</p></li> */}

        </div>
      </div>
     
      <div className="experience-list">
        <div className="experience-content">
          <h2>Coding</h2>
          <h3>DSA</h3>
         <li><p>Grand Master In Coding Ninja</p></li>
         <li><p>AIR 1555 in TCS CodeVita</p></li>
         <li><p>In Top 1% in Coding Ninja</p></li>
         <li><p>AIR 348 in Coding World Cup</p></li>
         <li><p>4th Rank in College Coding Competition</p></li>
          {/* <li><p>Solved 400+ coding problems</p></li>
         <li><p>4064 Contest Rating in Coding Ninja </p></li>  */}
    

        </div>
      </div>
      <div className="experience-list">
        <div className="experience-content">
          <h2>Web Development</h2>
          <h3>Development</h3>
         <li><p>Frontend Devloper</p></li>
         <li><p>Participated in different Hackathons </p></li>
         <li><p>Led a team of developers in  Hackathon </p></li>
         <li><p>Earned certifications in relevant technologies  </p></li>
         <li><p>Solved 400+ coding problem  </p></li>
          </div>
      </div>
      
     </div> 
    
</div>
</section>

    </>
  )
}

export default Education
