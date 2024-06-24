import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Introduction from './Component/Introduction';
import About from './Component/About';
// import Skills from './Component/Skills';
import Contact from './Component/Contact';
import Education from './Component/Education';
// import Aboutus from './Component/Aboutus';
import Footer from './Component/Footer';
import Myskill from './Component/Myskill';

function App() {
  return (
    <>
    <Navbar/>
<section id="home"> <Introduction/></section>
<section id="about"> <About/></section>
<section id="myskill"> <Myskill/></section>
<section id="education"> <Education/></section>
<section id="Contact"> <Contact/></section>
<section id="Footer"> <Footer/></section>
      {/* <Aboutus />
      <Skills /> */}
   

    </>
  );
}

export default App;
