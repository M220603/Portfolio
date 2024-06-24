import React, { useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [userName, setUserName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setUserName('');
      setEmail('');
      setMessage('');
    emailjs
      .sendForm('service_w6ltc4q', 'template_8cf4mvm', form.current, {
        publicKey: 'xOGwFzSnTiLu3JKmL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 

  
  
  // useEffect(() => {
  //   return () => {
  //     sessionStorage.setItem("UserName :" ,userName);
  //     localStorage.setItem("Email id : ",email);
  //     document.cookie=`Message : ${message}`;
  //   };
  // }, [userName, email, message]);
 
 

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact <span>Us</span></h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
          {/* <label htmlFor="name">Name</label> */}
          <input type="text" id="name" name="from_name" placeholder="Your name.." 
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
           />
           
          {/* <label htmlFor="email">Email</label> */}
          <input type="email" id="email" name="from_email" placeholder="Your email.."
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
          {/* <label htmlFor="message">Message</label> */}
          <textarea id="message" name="message" placeholder="Write something.." rows="10"
           value={message}
           onChange={(e)=>setMessage(e.target.value)}
          ></textarea>

          {/* <button className="submit-button"type="submit" value="send" onClick={handleToSubmit}>Submit</button> */}
          <button className="submit-button" type="submit"  >Submit</button>
          <br></br><br></br>
         
        </form>
      </div>
    </section>
  );
};

export default Contact;
