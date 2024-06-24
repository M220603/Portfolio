import React from 'react';
import './Introduction.css';
import {Link} from "react-scroll";
const Introduction = () => {
    return (
        <section className="introduction">
            <div className="intro-container">
           
                <div className="intro-text-container">
                    <h1 className="intro-title">
                        <span className="intro-text">Hi, I'm</span>
                        <span className="intro-name">Manish Mishra</span>
                    </h1>
                    <p className="intro-description">
                        I'm a Front-End Developer with a passion for creating beautiful and functional web experiences.
                    </p>
                    <Link to="contact" smooth={true} type='button' className='btn'>Let's Talk</Link>
        
                    <div className="home-logo">
         <a href="https://github.com/JayshreeeRam" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="Github" className='home-logo-img'/>
</a>
<a href="https://www.linkedin.com/in/manish-mishra-652208286/" target="_blank" rel="noopener noreferrer">
    <img src="linkedin.png" alt="Linkedin" className='home-logo-img'/>
    </a>
   
<a href="https://leetcode.com/user0277OO/" target="_blank" rel="noopener noreferrer">
    <img src="leetcode.png" alt="Leetcode" className='home-logo-img' />
</a>
<a href="https://www.codingninjas.com/studio/profile/Manishmishra" target="_blank" rel="noopener noreferrer">
    <img src="coding ninja1.svg" alt="Coding Ninja" className='home-logo-img' />
</a>
<a href="https://auth.geeksforgeeks.org/user/cob15manimfsx" target="_blank" rel="noopener noreferrer">
    <img src="gfg.png" alt="GeeksForGeeks" className='home-logo-img'/>
</a>
</div>

                </div>
               
              <div className="intro-photo-container">
                    <img src="profile.jpeg" alt="Manish Mishra" className="intro-photo" />
                    {/* <img src="computer.jpg" alt="Manish Mishra" className="intro-photo" /> */}
                    {/* <img src="BenefitsofAI.webp" alt="Manish Mishra" className="intro-photo" /> */}

            {/* <img src="AII.png" alt="AI"  className='AI'/> */}
                </div>
            </div>
        </section>
    );
};

export default Introduction;
