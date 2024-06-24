import React from 'react';
import './Footer.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const scrollTop=()=>{

      window.scrollTo({
        top: 0,
        behavior:'smooth',
       });
  }
  
  return (
    <>
      <section className='footer'>
        <div className="footer-sect ">CopyRight © 2023 Manish | All Rights Reserved. </div>
        <div className="icon" onClick={scrollTop}>
          <ArrowUpwardIcon />
        </div>
       
      </section>
    </>
  )
}

export default Footer;
