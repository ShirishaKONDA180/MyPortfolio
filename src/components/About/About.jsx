import React from 'react'
import './About.css'
import progile_img from '../../assets/Screenshot 2024-08-28 151202.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" width='140' /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={progile_img} alt="" width='350' height='460' style={{borderRadius:'15px'}}/>
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p style={{fontSize:'15px'}}>I am a UX/UI Designer with a hybrid background in full-stack development, which enables me to think beyond visuals and deeply align design with engineering feasibility, scalability, and performance. My work includes building responsive interfaces, prototyping high-fidelity user flows, defining component-based design systems, and ensuring accessibility compliance across platforms. I enjoy partnering with product managers, engineers, and leadership teams to balance user needs, technical constraints, and business outcomes. My goal is not only to design what looks good — but what works, scales, and delivers measurable results. I bring curiosity, collaboration, and analytical thinking to every project I work on.</p>
                </div>
                <div className='about-skills'>
                    <div className="about-skill"><p>Figma/Adobe XD/Sketch</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>ASP.NET MVC   </p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Photoshop    </p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Razor/Blazor</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS/Node JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>C#, AWS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>JS&Jquery</p><hr style={{width:"86%"}} /></div>
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className='about-achievement'>
                <h1>6+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div> */}
        {/* <hr style={{width:'576px'}}/> */}
    </div>
    
  )
}

export default About
