import { useState } from "react";
import github from "../assets/github.png";
import FacebookLogo from "../assets/facebook-logo.png"
import InstagramLogo from "../assets/instagram-logo.png"
import LinkedInLogo from "../assets/linkedin-logo.png"
import handwave from "../assets/handwave.png";

import "./Socials.css";

function Socials() {
  const [isHidden, setIsHidden] = useState(false);

  const showSocials = () => {
    setIsHidden(prev => !prev);
  };

  return (
    <div className="socials">
      <p  onClick={showSocials} ><strong>My Socials</strong></p>

      {isHidden && (
        <div className="social-items">
        <a href="https://github.com/jakejakepacia"  target="_blank" rel="noopener noreferrer">
          <img src={github} />
        </a>
         <a href="https://www.linkedin.com/in/christien-jake-pacia-87aaaa165/"  target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} />
        </a>
        <a href="https://www.facebook.com/cjdpdev/"  target="_blank" rel="noopener noreferrer">
          <img src={FacebookLogo} />
        </a>
        <a href="https://www.instagram.com/cjakejake/"  target="_blank" rel="noopener noreferrer">     
          <img src={InstagramLogo} />
        </a>
        </div>
      )}

      <img className="hand" src={handwave} />
    </div>
  );
}

export default Socials;
