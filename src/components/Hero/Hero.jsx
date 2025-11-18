import React from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import sample1 from '../../assets/Sample.mp4';
import resume from '../../assets/Shirisha_Konda_Application Developer_AZ (2).docx';

const Hero = () => {
    return (
      <div id='hero'>
          <div className='hero-icons'>
            <a href='https://wa.me/+16232681538' target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
            <a href="https://github.com/ShirishaKONDA180" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/shirishakonda22/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-twitter"></i></a>
          </div>
          <div className='hero'>
            {/* <img src="profile_img.svg" alt="" /> */}
            <h2>Hi, I'm Shirisha Konda</h2>
            <h1>
                <TypeAnimation
                sequence={[
                  'UX/UI Designer',
                   500,
                  ' ', 500 ,          
                   'UX/UI Designer', 500]}
                repeat={Infinity}
                />
            </h1>
            <p>I am a UX/UI frontend developer from Arizona,USA with 6 years of experience in multiple companies like Charles Schwab, Cognizant and ActiveHub/CNTelligence.</p>
            <div className='hero-action'>
                <div className="hero-connect"><AnchorLink className='anchor-links' offset={50} href="#contact">Connect with me</AnchorLink></div>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"><div className="hero-resume">My Resume</div></a>
                {/* <a href={resume} download><div className='hero-resume'> My resume</div></a> */}
            </div>
            <div className='hero-icons1'>
                <a href='https://wa.me/+16232681538'><i class="bi bi-whatsapp"></i></a>
                <a href="https://github.com/ShirishaKONDA180"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/shirishakonda22/"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
          <video autoPlay loop muted id='video'>
            <source src={sample1} type='video/mp4' />
          </video>
         
          {/* <div className='border-display' style={{borderBottom:'2px solid white'}}></div> */}
          
      </div>
    )
  }
  
  export default Hero