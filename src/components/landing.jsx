import './landing.css'
import jake from "../assets/jake-home.png"
import arrow from "../assets/arrow.png"
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
    
    return(
        <div className="container">
          
         <div>
            <div className="page-nav">
                <div className="logo">CJDP</div> 
                <p className="scheduleCall" onClick={() => setShowScheduler(true)}>Schedule a Call</p>

               
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
                <div className="roles">
                    <p><strong>CURRENTLY <br />Sole iOS Developer</strong> <br /> August 2024 - PRESENT </p>
                    <p><strong>UnlimitedIA</strong> <br />US Based Company</p>
                </div>
                <p className="description-p">
                    Designed the UI/UX for the iOS mobile app and implemented features including Apple Maps, Core Location, push notifications/messaging using Firebase and implementing RESTful APIs, working across 4 interconnected apps.
                </p>   

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
                    <div className="roles">
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
                    </p> 
                </div>

           
            </div>
        </div>
    </div>
    )
}

export default Landing;
