import React from 'react';
import './About.css';


const About = () => {
   
    return (
        <section className="about-me">
            <div className="about-me-container">
                <h2 className="about-me-title">
                    <span className="title-text">About Me</span>
                </h2>
               <div className="photo-container">
                <img src="profile.jpeg" alt="Manish Profile" className="about-profile" />
                </div>
                <p className="about-me-description">
                    I'm a Front-End Developer passionate about creating interactive and user-friendly web experiences. My journey in web development started with a strong curiosity to explore the digital world and a desire to bring creative ideas to life through code.
                </p>
                <a href="Manish Resume.pdf" target="_blank" className="resume-button">Resume</a>
                {/* <button className='resume-button' target='blank'> <a href="Manish Resume.pdf">Resume</a></button> */}
            </div>
        </section>
    );
};

export default About;
