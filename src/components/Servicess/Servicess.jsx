import React, { useEffect, useState } from 'react'
import './Services.css'
import Style from 'jquery';
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import ReadMoreAndLess from "read-more-and-less";

// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Typography } from '@mui/material'


const Services = () => {

    const [expanded, setExpanded] = React.useState(false);
    const [readMore,setReadMore]=useState(false);
    const [readMore1,setReadMore1]=useState(false);
    const [readMore2,setReadMore2]=useState(false);
    const [readMore3,setReadMore3]=useState(false);



    // const handleChange = (panel) => (event, isExpanded) => {
    //   setExpanded(isExpanded ? panel : false);
    // };

    function OnClickShowText(){
        setReadMore(!readMore);
    }
    function OnClickShowText1(){
      setReadMore1(!readMore1);
    }
    function OnClickShowText2(){
      setReadMore2(!readMore2);
    }
    function OnClickShowText3(){
      setReadMore3(!readMore3);
    }

  return (
    <div id='services' className='services'>

        <div className="services-title">
            <h1>Check My Resume</h1>
            {/* <img src={theme_pattern} alt="" width='120'/> Highly skilled development with expertise in building efficient, scalable, and reusable applications. Over 6+ years of IT experience which includes of experience in React JS, Angular JS, JavaScript, Node JS and Cloud technologies. Exposure on react 17X and 18X. Extensive experience in developing web pages using HTML/HTML5, XML, DHTML CSS/CSS3, LESS, JavaScript, React JS, Redux, Flex, Angular JS, jQuery, JSON, Node.js, Ajax, JQUERY Bootstrap. Experience in all phase of SDLC like Requirement Analysis, Implementation and Maintenance, and extensive experience with Agile and SCRUM.*/}
        </div>

        <div className='servicesDiv' style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'50px'}}>
            <div style={{flexBasis:'50%'}}>
                <div className='summary'>
                  <h3 style={{color:'#f1950a'}}>Backgound Summary:</h3><br/>
                  <p style={{textIndent:'15px',lineHeight:'25px'}}> Data-driven UX/UI Designer with 6+ years of experience creating intuitive, inclusive, and human-centered digital solutions. Skilled in end-to-end design, full-stack implementation, and building scalable, user-centric web applications. Experienced in translating complex business requirements into accessible, high-fidelity prototypes, modern interfaces, and cohesive design systems. Proficient in modern JavaScript-based UI development and front-end technologies including HTML5, CSS3, Bootstrap, XML, AJAX, JSON, LESS, along with experience in enterprise-grade, cloud-based, data-intensive, distributed applications. Hands-on with CMS platforms including Adobe Experience Manager (AEM/CQ5), Drupal, Cascade, and TeamSite as well as full-stack development in Microsoft .NET Core (MVC, C#, ASP.NET, Blazor, ADO.NET, Entity Framework, AWS SDK for .NET, Azure PaaS). {/* Highly skilled development with expertise in building efficient, scalable, and reusable applications. Over 6+ years of IT experience which includes of experience in React JS, Angular JS, JavaScript, Node JS and Cloud technologies. Exposure on react 17X and 18X. Extensive experience in developing web pages using HTML/HTML5, XML, DHTML CSS/CSS3, LESS, JavaScript, React JS, Redux, Flex, Angular JS, jQuery, JSON, Node.js, Ajax, JQUERY Bootstrap. Experience in all phase of SDLC like Requirement Analysis, Implementation and Maintenance, and extensive experience with Agile and SCRUM.*/}</p><br/><br/>

                </div>
                <div style={{background:'rgba(14, 13, 13,0.5)',padding:'20px',borderRadius:'10px'}}>
                    <h3 sx={{ width: '33%', flexShrink: 0,fontWeight:'bold'}} style={{color:'#f1950a'}}>Technical Skills:</h3><br/>
                    <div style={{borderLeft:'2px solid red',paddingLeft:'15px'}}>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>UI Web Technologies:</span> HTML, HTML5, CSS3, SASS, XHTML, XML, JavaScript, AJAX, jQuery, WordPress, JSON, Twitter Bootstrap, react 17X and React 18X React JS, Node.js, GitHub</p> <br/>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>DESIGN: UX/UI,</span> visual design, wireframes, Interactive prototypes, hi-fid mockups, Lean UX, iterative design,graphic design, typography, iconography, design system, UX writing, information architecture, storyboards,usability testing, AI, user journeys, style guide, data visualization, workflows, mockups, or prototypes moodboards, sitemaps, mobile, web, native & responsive design.</p><br/>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>TOOLS:</span> Figma, Miro, Maze, Sketch, Adobe Creative Cloud, Framer, Photoshop, JavaScript frameworks, InVision, Illustrator, GA4, Google suite, Adobe XD, Principle, Asana, HTML, CSS, P5.js, Amplitude, Qualtrics, Mixpanel, GitHub, JIRA.</p><br/>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>Cloud Technologies:</span> AWS, AZURE, IAM tools</p><br/>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>Databases:</span> IIS 6.0/7.0, MS-SQL Server MS-SSIS, MS-SSRS, MS-SSAS</p><br/>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>Frameworks:</span> React 17X and 18X, React JS, Node JS.</p><br/>
                     <p style={{fontSize:'13px'}}><span style={{fontWeight:'bolder',fontSize:'15px'}}>Languages:</span> C, C#, JavaScript, MySQL, ASP.Net, MVC, web Services.</p>
                    </div>
                </div>
            </div>
            <div style={{flexBasis:'65%',padding:'20px',background:'rgba(14, 13, 13,0.5)',borderRadius:'20px'}}>
                  <div>
                    <h3 style={{color:'#f1950a'}}>Profesional Experience:</h3><br/>
                    <div style={{borderLeft:'1px solid red',paddingLeft:'15px'}} >
                          <div >
                              <p style={{fontSize:'15px',lineHeight:'26px'}}><span style={{fontWeight:'bold',fontSize:'16px',textDecoration:'1px underline'}}>Client :</span> <span style={{fontWeight:'bold',fontSize:'16px',color:'violet'}}>Charles Schwab</span>, Phoenix, AZ <br/> Role: Senior UX/UI Designer , Feb 2024– Aug 2025 </p>
                              <div style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>
                                    {/* <span style={{textDecoration:'underline',fontSize:'14px'}}>Responsibilities:</span><br/> */}
                                    <ul>
                                      <li>Designed and developed full-stack enterprise web applications using .NET, C#, MVC, Blazor, JavaScript, SQL Server, and 3-tier architecture; built authenticated portals, automated workflows, and implemented data-driven features supporting fiscal planning and B2B operations.</li>
                                      <li>Led front-end engineering and UX implementation using HTML, CSS, responsive design, reusable UI components, and React.js, delivering cross-platform experiences across desktop, tablet, and mobile with enhanced usability, visual consistency, and component-based scalability.</li>

                                      <p onClick={OnClickShowText} style={{padding:'2px',margin:'0',fontWeight:'300',fontSize:'13px',color:'yellow',cursor:'pointer',textDecoration:'1px underline'}}>Show More{readMore ===true ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>} </p>
                                      {readMore && <ul>
                                        <li>Boosted engagement, conversion, and process efficiency by redesigning onboarding flows, optimizing task paths, and introducing AI-driven landing pages; established a scalable design system aligned with WCAG standards, resulting in faster task completion and improved accessibility</li>
                                        <li>Improved DevOps maturity and cloud readiness by implementing CI/CD using Jenkins, GitHub Actions, and Azure DevOps, containerizing applications with Docker, creating Helm charts, and supporting application migration from GKE to EKS for scalable Kubernetes-based deployments</li>
                                      </ul> }
                                    </ul>
                              </div>
                          </div>
                          <br/>
                          <br/>
                          <div>
                              <p style={{fontSize:'15px',lineHeight:'26px'}}><span style={{fontWeight:'bold',fontSize:'16px',textDecoration:'1px underline'}}>Client :</span> <span style={{fontWeight:'bold',fontSize:'16px',color:'violet'}}>ActiveHub/CNTelligence</span>, Glendale, AZ​​​​​​ <br/>Role: Senior UX/UI Designer , Sep’2022-Dec’2023 </p>
                              <div style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>
                                    {/* <span style={{textDecoration:'underline',fontSize:'14px',lineHeight:'30px'}}>Responsibilities:</span><br/> */}
                                    <ul>
                                        <li>Delivered mobile and desktop UX solutions including Smart ID and CNTelligence SPA using Agile/Scrum and TDD, contributing to increased user engagement through A/B testing and continuous iteration.</li>
                                        <li>Created end-to-end UX artifacts (wireframes, user flows, prototypes, design systems) using Figma, Miro, Adobe Suite, InVision, and Sketch, while collaborating with cross-functional teams and conducting competitive and design reviews.</li>
                                        <p onClick={OnClickShowText1} style={{padding:'2px',margin:'0',fontWeight:'300',fontSize:'13px',color:'yellow',cursor:'pointer',textDecoration:'1px underline'}}>Show More{readMore1 ===true ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>} </p>
                                        {readMore1 && <ul>
                                            <li>Participated in requirements gathering and analysis. Developed the various screens and worked extensively with Web content management system and online web components by HTML5, CSS3, JavaScript, Bootstrap, jQuery, jQuery UI to build dynamic pages.</li>
                                            <li>Built scalable UI designs and reusable components aligned with brand and accessibility guidelines (WCAG 2.1 AA/AAA), improving usability, visual consistency, and targeted audience experience.</li>
                                            <li>Gained hands-on experience in .NET/C#, OOP concepts, ER-based database design, and XML-driven structures while working in an Agile environment using Jira for sprint planning, refinement, and task tracking.</li>
                                        </ul> }
                                      </ul>
                              </div>
                          </div>
                          <br/>
                          <br/>
                          <div>
                              <p style={{fontSize:'15px',lineHeight:'26px'}}><span style={{fontWeight:'bold',fontSize:'16px',textDecoration:'1px underline'}}>Client :</span> <span style={{fontWeight:'bold',fontSize:'16px',color:'violet'}}>Cognizant</span>, Remote<br/>Role: Full Stack Developer/ UX/UI , Oct’2019 – Jun’2022 </p>
                              <div style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>
                                      {/* <span style={{textDecoration:'underline',fontSize:'14px',lineHeight:'30px'}}>Responsibilities:</span><br/> */}
                                      <ul>
                                          <li>Designed and developed user interface for IBM compensation application using REACT JS.</li>
                                          <li>Build re-usable components.</li>
                                          <p onClick={OnClickShowText2} style={{padding:'2px',margin:'0',fontWeight:'300',fontSize:'13px',color:'yellow',cursor:'pointer',textDecoration:'1px underline'}}>Show More{readMore2 ===true ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>} </p>
                                          {readMore2 && <ul>
                                            <li>Used REDUX for state management. Used Hooks concepts in building functional components. Worked on REDUX FORMS and HTML 5.</li>
                                            <li>Developed UI screens using IBM carbon design system.</li>
                                            <li> Gathering requirements from business team.</li>
                                            <li>Used CSS preprocessor like Sass.</li>   
                                          </ul> } 
                                      </ul>
                              </div>
                          </div>
                          <br/>
                          <br/>
                          <div>
                              <p style={{fontSize:'15px',lineHeight:'26px'}}><span style={{fontWeight:'bold',fontSize:'16px',textDecoration:'1px underline'}}>Client :</span> <span style={{fontWeight:'bold',fontSize:'16px',color:'violet'}}>Accenture</span>, Remote<br/>Role: Full stack Developer/ UX/UI Designer , Oct’2018 -Jul’2019​​ </p>
                              <div style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>
                                    {/* <span style={{textDecoration:'underline',fontSize:'14px',lineHeight:'30px'}}>Responsibilities:</span><br/> */}
                                    <ul>
                                        <li>Develop new and redesign existing web-based user-facing features.</li>
                                        <li>Working closely with cross-functional teams that include product owners, backend developers and designers</li>
                                        <p onClick={OnClickShowText3} style={{padding:'2px',margin:'0',fontWeight:'300',fontSize:'13px',color:'yellow',cursor:'pointer',textDecoration:'1px underline'}}>Show More{readMore3 ===true ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>} </p>
                                        {readMore3 && <ul>
                                          <li>This is financial application which deals with the business transactions for the IBM products and services</li>
                                          <li>Design and develop screens/views/components using React and Redux.</li>
                                          <li>Combine the art of design with the art of programming.</li>
                                          <li>Analyzing the impact of the new user stories, estimating the task points based on the analysis.</li>
                                        </ul> } 
                                      
                                    </ul>
                              </div>
                          </div>
                    </div>
                            
                            
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <div>
                     <h3 style={{color:'#f1950a'}}>Projects:</h3><br/>
                     <div style={{borderLeft:'1px solid red',paddingLeft:'15px'}}>
                          <div>
                              <p style={{fontSize:'16px',lineHeight:'26px',fontWeight:'500'}}>- Auto Parts Ordering System- Web Design and User Experience​​ </p>
                              <div style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>
                                <ul>
                                  <li>Designed a modelled web portal to help customers track the complete cycle of the confirmed auto parts rendering high level scalability, fast execution. Fortified the application by utilizing the external database to store and retrieve the content.</li>
                                  <li>Experience using jQuery and Bootstrap plugins for the webpages. Designed and developed intranet web applications using JavaScript and CSS3</li>
                                  <li>Incorporated table-less web development approach to create applications using CSS and with the help of tags as per W3C standards.</li>
                                </ul>
                              </div>
                          </div>
                          <br/>
                          <div>
                              <p style={{fontSize:'16px',lineHeight:'26px',fontWeight:'500'}}>- Pizza Management System (HTML/CSS, JavaScript, MYSQL)</p>
                              <div style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>
                                <ul>
                                  <li>Developed a responsive online portal for a pizza ordering management to override the problems prevailing in the manual system.</li>
                                  <li>Implemented a collaborated design plan for the conversion of manual process to an online portal. Designed Templates and Flow of future pages using Adobe Photoshop.</li>
                                  <li>Developed reusable user interface component using jQuery and AJAX and handled Modal pop-ups, Alerts using bootstrap, drag and drop list control using jQuery UI.</li>
                                </ul>
                              </div>
                          </div>
                     </div>

                  </div>
                  <br/>
                  <br/>
                  <div>
                     <h3 style={{color:'#f1950a'}}>Education Details:</h3>
                     <div style={{borderLeft:'1px solid red',paddingLeft:'15px'}}>
                       <p style={{fontSize:'13px',lineHeight:'24px',paddingLeft:'30px',marginTop:'1rem'}}>Bachelors in Electronic and Communications, Malla Reddy Group of Institutions, Hyderabad, India​​ .</p>
                     </div>
                  </div>
                      
            </div>
        </div>

    </div>
  )
}

export default Services







{/* <Typography sx={{ width: '50%', flexShrink: 0,fontSize:'16px',fontWeight:'400',color:'#f1950a' }}>Professional Experience:</Typography><br/>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{borderRadius:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Client: Charles Schwab, Remote-Peoria, AZ <br/>Role: Application Developer</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Feb 2024–Sep2024
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <span style={{textDecoration:'underline'}}>Responsibilities:</span><br/>
                    * Developed under Agile Development Team to deliver regular updates to business team and project managers.<br/>
                    * Worked on React JS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags. <br/>
                    * Wrote SQL statements to extract data from tables to verify output. Worked on SQL for validating data in backend testing from databases.<br/>
                    * Implemented responsive designs and UI/UX best practices and worked with state management libraries like Redux and Developer tasked to build a React JS component, Forms, Events.<br/>
                    * Built server-side rendering applications and Implemented reusable React components and stand-alone functions and handled Routing.<br/>
                    * Implemented stateless and Functional components when applicable. <br/>
                    * Experience in RESTful web services to integrate between server side to client side.
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{borderRadius:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>
                    Client:ActiveHub/CNTelligence, Glendale, AZ​​​​​​ <br/>                                                                   
                    Role: Application Developer
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Sep’2023-Dec’2023                         
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <span style={{textDecoration:'underline'}}>Responsibilities:</span><br/>
                        * Developed under Agile (Scrum) Development Team to deliver regular updates to business team and project managers.<br/>
                        * Implemented stable React components and stand-alone functions to be added to any future pages.<br/>
                        * Participated in requirements gathering and analysis. Developed the various screens and worked extensively with Web content management system and online web components by HTML5, CSS3, JavaScript, Bootstrap, jQuery, jQuery UI to build dynamic pages.<br/>
                        * Used LESS and followed Bootstrap-grid system to develop Responsive Widgets andCSS3 media queries for Responsive Web Design (RWD).<br/>
                        * Incorporated table-less web development approach to create applications using CSS and with the help of tags as per W3C standards and used Jasmine Unit Test framework to conduct unit testing.<br/>
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{borderRadius:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Client: Cognizant, Remote<br/>
                    Role: UI Developer</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                    Oct’2019 – Jun’2022
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <span style={{textDecoration:'underline'}}>Responsibilities:</span><br/>
                    * Designed and developed user interface for IBM compensation application using REACT JS<br/>
                    * Build re-usable component<br/>
                    * Used REDUX for state management. Used Hooks concepts in building functional components. Worked on REDUX FORMS and HTML 5<br/>
                    * Developed UI screens using IBM carbon design system.<br/>
                    * Gathering requirements from business team<br/>
                    * Used CSS preprocessor like Sass<br/>
                    * Worked on Responsive Designing and development for different screen sizes<br/>
                    * Worked on latest concepts of JavaScript like ES6<br/>
                    * Implemented various Validation Controls for form validation and implemented custom validation controls with JavaScript validation controls.<br/>
                    * Extensively used Git for version controlling and regularly pushed the code to GitHub.<br/>
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{borderRadius:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    >
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Client: Accenture, Remote ​​​
                    Role: UI developer</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                    Oct’2018 -Jul’2019​​
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <span style={{textDecoration:'underline'}}>Responsibilities:</span><br/>
                    * Develop new and redesign existing web-based user-facing features.<br/>
                    * Working closely with cross-functional teams that include product owners, backend developers and designers<br/>
                    * This is financial application which deals with the business transactions for the IBM products and services<br/>
                    •  Design and develop screens/views/components using React and Redux.<br/>
                    * Combine the art of design with the art of programming.<br/>
                    * Analyzing the impact of the new user stories, estimating the task points based on the analysis.<br/>
                    * Providing fast and highly scalable web application using JavaScript, TypeScript, React JS with Redux,<br/>
                    * Integrated google maps into web-Application.<br/>
                    * Used React-Autocomplete for creating google maps location search on the webpage.<br/>
                    * jQuery, CSS, SASS, Bootstrap, Gulp, Webpack, Jest and Enzyme.<br/>
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <br/>

                <Typography sx={{ width: '50%', flexShrink: 0,fontSize:'16px',fontWeight:'400',color:'#f1950a' }}>Projects:</Typography><br/>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{borderRadius:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                    >
                    <Typography sx={{ width: '60%', flexShrink: 0 }}>Auto Parts Ordering System- Web Design and User Experience​​ </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                                            
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <span style={{textDecoration:'underline'}}>Responsibilities:</span><br/>
                    * Designed a modelled web portal to help customers track the complete cycle of the confirmed auto parts rendering high level scalability, fast execution. Fortified the application by utilizing the external database to store and retrieve the content.<br/>
                    * Experience using jQuery and Bootstrap plugins for the webpages. Designed and developed intranet web applications using JavaScript and CSS3.<br/>
                    * Incorporated table-less web development approach to create applications using CSS and with the help of tags as per W3C standards.<br/>
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{borderRadius:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                    >
                    <Typography sx={{ width: '60%', flexShrink: 0 }}>Pizza Management System (HTML/CSS, JavaScript, MYSQL)</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                                            
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <span style={{textDecoration:'underline'}}>Responsibilities:</span><br/>
                    * Developed a responsive online portal for a pizza ordering management to override the problems prevailing in the manual system.<br/>
                    * Implemented a collaborated design plan for the conversion of manual process to an online portal. Designed Templates and Flow of future pages using Adobe Photoshop.<br/>
                    * Developed reusable user interface component using jQuery and AJAX and handled Modal pop-ups, Alerts using bootstrap, drag and drop list control using jQuery UI.<br/>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <br/> */}

                {/* <Typography sx={{ width: '40%', flexShrink: 0,fontSize:'16px',fontWeight:'400',color:'#f1950a' }}>Education Details:</Typography><br/>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{marginBottom:'4rem',borderRadius:'10px'}}>
                    <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    // aria-controls="panel8bh-content"
                    // id="panel8bh-header"
                    >
                    <Typography sx={{ width: '80%', flexShrink: 0 }}>Bachelors in Electronic and Communications, Malla Reddy Group of Institutions, Hyderabad, India​​ </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                                            
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}


                {/*         
        <div className="services-container">
            {
              Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                      <p>Read More..</p>
                      <img src={arrow_icon} alt="" width='18px' />
                    </div>
                </div>
              })

            }
        </div> */}
