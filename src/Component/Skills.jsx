import React from 'react';
import './Skills.css';
const Skills = () => {
  return (
    <section className='skills'>
        <div className='skills-container'>
        <h2 className="skills-title">
                    <span className="title-text">My Skills</span>
                </h2>
                
           <img src="C.png" alt="C" className="about-profile" />
                <img src="C++.png" alt="C++" className="about-profile" />
                <img src="html.png" alt="HTML" className="about-profile" />
                <img src="CSS.png" alt="CSS" className="about-profile" />
                <img src="javascript.png" alt="Javascript" className="about-profile" />
                <img src="reactjs.png" alt="React Js" className="about-profile" />
                <img src="nodejs.png" alt="Node Js" className="about-profile" />
                <img src="Mysql.png" alt="MY SQL" className="about-profile" />
                <img src="github.png" alt="Github" className="about-profile" />
                {/* <img src="computer.jpg" alt="Computer" className="about-profile" /> */}
               
        </div>

    </section>
  )
}

export default Skills
