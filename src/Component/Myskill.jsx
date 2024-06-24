import React from 'react';
import './Myskill.css';
const Myskill = () => {
  return (
    <section className='Myskills'>
        <div className='Myskills-container'>
        <h2 className="Myskills-title">
                    <span className="title-text">My Skills</span>
                </h2>
                
             <div className='box'> <img src="C.png" alt="C" className="Myskill-profile" />
           
             <h1>C</h1>
             </div>
             
             <div className='box'><img src="C++.png" alt="C++" className="Myskill-profile" />
             <h1>C++</h1>
             </div>
             <div className='box'><img src="html.png" alt="HTML" className="Myskill-profile" />
             <h1>HTML</h1>
             </div>
             <div className='box'><img src="CSS.png" alt="CSS" className="Myskill-profile" />
             <h1>CSS</h1>
             </div>
             <div className='box'><img src="javascript.png" alt="Javascript" className="Myskill-profile" />
             <h1>Javascript</h1>
             </div>
             <div className='box'><img src="reactjs.png" alt="React Js" className="Myskill-profile" />
             <h1>React Js</h1>
             </div>
             <div className='box'><img src="nodejs.png" alt="Node Js" className="Myskill-profile" />
             <h1>Node Js</h1></div>
             <div className='box'><img src="Mysql.png" alt="MY SQL" className="Myskill-profile" />
             <h1>MY SQL</h1></div>
             <div className='box'><img src="github.png" alt="Github" className="Myskill-profile" />
             <h1>Github</h1></div>
                {/* <img src="computer.jpg" alt="Computer" className="Myskill-profile" /> */}
               
        </div>

    </section>
  )
}

export default Myskill
