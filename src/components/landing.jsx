import './landing.css'
import jake from "../assets/jake-home.png"
import arrow from "../assets/arrow.png"
import mylogo from "../assets/cjdpdev.png"
import { BiPhone, BiSolidPhone } from "react-icons/bi";

import { Typewriter } from "react-simple-typewriter";
import { useState } from 'react';

function Landing(){
    const [showPrevRoles, setShowRoles] = useState(false);
    const [showScheduler, setShowScheduler] = useState(false); 
  const [isRotated, setIsRotated] = useState(false);

    const handlePrevRoleClick = () => {
            setShowRoles(!showPrevRoles)
            setIsRotated(!isRotated)
    }

    const previousRole = [
        {
            id: 1,
            role: "Business Owner",
            company: "Scrollnshop.co",
            date: "Dec 2020 - Aug 2024",
            description: [
                "Owned and managed an online clothing business, responsible for product curation, inventory management, customer relations, and marketing campaigns, achieving consistent sales growth.",
            ]
        },
          {
            id: 2,
             role: "FullStack Mobile Developer",
            company: "FilAm Software Technology",
            date: "June 2018 - Feb 2021",
            description: [
                "Pioneer mobile developer for the Kachinga project, a cross-platform mobile application built with C# and Xamarin.",
                "Contributed to both frontend and backend development, including feature implementation, API integration, Managing/Creating databases and performance optimization.",
                "Collaborated closely with designers and QA's to deliver scalable and maintainable mobile solutions."
            ]
        },
        {
            id: 3,
             role: "IT Intern",
            company: "BIR - Angeles, Pampanga",
            date: "March 2018 - May 2018",
            description: [
                "Assisted with administrative tasks, including filing, record-keeping, and document processing.",
                "Organized and maintained data and office records, ensuring accuracy and accessibility.",
                "Supported daily office operations, gaining hands-on experience in a professional government environment.",
                "Developed organizational, time management, and communication skills in a structured administrative setting."
            ]
        }
    ]
    
    return(
        <div className="container">
          
         <div>
            <div className="page-nav">
                <div className="logo"><img src={mylogo} /></div> 
                <div  className="scheduleCall" onClick={() => setShowScheduler(true)}>
                    <div className="call-icon">
                        <BiSolidPhone size={20}/>
                        </div>
                        <p>Schedule Call</p>
                </div>
             

               
            </div>

                  {showScheduler && (
                <div className="scheduler-overlay" onClick={() => setShowScheduler(false)}>
                    <div className="scheduler-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowScheduler(false)}>X</button>
                        <iframe
                            src="https://calendly.com/christienjakedavidpacia/30min"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            title="Schedule a Call"
                        ></iframe>
                    </div>
                </div>
            )}
            
            <div className="about-me">
                <img src={jake} alt="Jake"/>
                <p className="description-p"> 
                <strong>
                    Hi,
                    I am Jake! - <Typewriter
                     words={["FULLSTACK DEVELOPER", "MOBILE DEVELOPER", "ASP.NET DEVELOPER"]}
                     loop
                     cursor
                     cursorStyle="|"
                     typeSpeed={80}
                     deleteSpeed={50}
                     delaySpeed={1500}/>
                </strong> <br />
                  A Mobile & Fullstack Developer
                 <br />
                I build high-performance mobile apps for iOS and Android, along with modern web applications, focusing on clean code, smooth UI/UX, and scalable architecture.</p>
            </div>

            <div>
                 <div className="role-card">
      <div className="role-header">
        <h3>Sole iOS Developer</h3>
        <span className="company">UnlimitedIA — US-Based Company</span>
        <span className="date">Aug 2024 – Present</span>
      </div>

      <ul className="role-details">
        <li>Sole iOS developer responsible for UI/UX implementation and feature development across four interconnected apps.</li>
        <li>Implemented Apple Maps, Core Location, Firebase messaging, and RESTful API integrations.</li>
        <li>Collaborated with stakeholders and backend engineers to deliver production-ready iOS features.</li>
        <li>Maintained code quality, handled bug fixes, and supported App Store builds and releases.</li>
      </ul>
    </div>
         
                {/* Toggle Previous Roles */}
                <div className="prev-role-title" onClick={handlePrevRoleClick}>
                    <img src={arrow} 
                         alt="arrow"
                        className={`arrow ${isRotated ? "rotate" : ""}`}
                         />
                 <p ><strong>Previous Roles</strong></p>
                </div>
            

                {/* Animated Previous Roles */}
                <div className={`previous-roles ${showPrevRoles ? 'show' : 'hide'}`}>

                    {previousRole.map((role) => (
                            <div className="role-card">
                                     <div className="role-header">
                                        <h3>{role.role}</h3>
                                        <span className="company">{role.company}</span>
                                        <span className="date">{role.date}</span>
                                     </div>
                    
                                    <ul className="role-details">
                                        {role.description.map((description) => (
                                            <li>{description}</li>
                                        )) }
                                      </ul>
                                    </div>
                    ))

}
       
                    {/* <div className="roles">
                        <p><strong>Business Owner</strong> <br /> Dec 2020 - Aug 2024 </p>
                        <p><strong>ScrollNShop</strong> <br />Co-owner</p>
                    </div>
                    <p className="description-p">
                        Owned and managed an online clothing business, responsible for product curation, inventory management, customer relations,
                        and marketing campaigns, achieving consistent sales growth.
                    </p> 

                    <div className="roles">
                        <p><strong>Fullstack Mobile Developer</strong> <br /> June 2018 - Feb 2021  </p>
                        <p><strong>FilAm Software Technology</strong> <br />On Site</p>
                    </div>
                    <p className="description-p">
                        Pioneer mobile developer for the 'Kachinga' project, a cross-platform mobile app built with C# and Xamarin, contributing to both frontend and backend development.
                    </p>     

                    <div className="roles">
                        <p><strong>IT Intern</strong> <br /> March 2018 - May 2018  </p>
                        <p><strong>BIR - Angeles, Pampanga</strong> <br />On Site</p>
                    </div>
                    <p className="description-p">
                        OJT/Intern at BIR Angeles, Pampanga, assisting with administrative tasks, data organization, and office operations while gaining experience in a professional government setting.                
                    </p>  */}
                </div>

           
            </div>
        </div>
    </div>
    )
}

export default Landing;
