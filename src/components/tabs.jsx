
import "./tab.css";
import { useRef, useState } from "react";
import toneldemo from "../assets/tonelyo/tonelvideo.mp4";
import VideoPlayer from "./VideoPlayer"; // default export matches
import tonelLogo from "../assets/tonelyo/tonel-logo.png"
import Popup from "./Popup";
import TonelyoKeyFeatures from "./TonelyoFeatures";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="tabs-container">
        <h1>Projects</h1>
      {/* Tab Buttons */}
      <div className="tabs-header">
        <button
          className={activeTab === "tab1" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("tab1")}
        >
          iOS
        </button>

        <button
          className={activeTab === "tab2" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("tab2")}
        >
          Android
        </button>

         <button
          className={activeTab === "tab3" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("tab3")}
        >
          Web
        </button>

      </div>

      {/* Content */}
      <div className="tabs-content">
        {activeTab === "tab1" && 
          <div className="ios-projects-section">
            <div className="ios-projects-item">
            <img src={tonelLogo} />
             <br /><button onClick={() => setShowPopup(true)}> View</button>

              <Popup show={showPopup} onClose={() => setShowPopup(false)}>
               <h2>Clientyo</h2>
               <div className="pop-up-body">
                 <VideoPlayer src={toneldemo} />
                <TonelyoKeyFeatures />
               </div>
              </Popup>

            </div>
            
             <div className="ios-projects-item">
            <img src={tonelLogo} />
             <br /><button onClick={() => setShowPopup(true)}> View</button>

              <Popup show={showPopup} onClose={() => setShowPopup(false)}>
               <h2>Clientyo</h2>
               <div className="pop-up-body">
                 <VideoPlayer src={toneldemo} />
                <TonelyoKeyFeatures />
               </div>
              </Popup>

            </div>

             <div className="ios-projects-item">
            <img src={tonelLogo} />
             <br /><button onClick={() => setShowPopup(true)}> View</button>

              <Popup show={showPopup} onClose={() => setShowPopup(false)}>
               <h2>Clientyo</h2>
               <div className="pop-up-body">
                 <VideoPlayer src={toneldemo} />
                <TonelyoKeyFeatures />
               </div>
              </Popup>

            </div>
          </div>
        }
        {activeTab === "tab2" && <div> </div>
       
        }
      </div>
    </div>
  );
};

export default Tabs;
