import tonelLogo from "../assets/tonel-logo.png"
import "./Projects.css";
import Popup from "./Popup";
import TonelyoKeyFeatures from "./TonelyoFeatures";
import { useRef, useState } from "react";
import toneldemo from "../assets/tonelvideo.mp4";
import VideoPlayer from "./VideoPlayer"; // default export matches
import TonelyoHome from "../assets/tonelyo-home.jpg"
import TonelyoCart from "../assets/tonelyo-cart.jpg"
import TonelyoProduct from "../assets/tonelyo-productpage.jpg"
import TonelyoStores from "../assets/tonelyo-stores.jpg"
import TonelyoStoreMenu from "../assets/tonelyo-store-menu.jpg"
import KachingaIcon from "../assets/kachinga-icon.png"
function Projects(){

const [showPopup, setShowPopup] = useState(false);
const projects = [
    {
    id: 1,
    title: "Kachinga",
    description: "Mobile app and spend card designed to help parents empower their kids to learn how to manage money in a digital world.",
    logo: KachingaIcon,
    video: toneldemo,
    features: <TonelyoKeyFeatures />,
    previews: [
      TonelyoHome,
      TonelyoCart,
      TonelyoProduct,
      TonelyoStores,
      TonelyoStoreMenu
    ]
  },
  {
    id: 1,
    title: "Tonelyo",
    description: "Customer app for ordering catering",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />,
    previews: [
      TonelyoHome,
      TonelyoCart,
      TonelyoProduct,
      TonelyoStores,
      TonelyoStoreMenu
    ]
  },
  {
    id: 2,
    title: "Poteyo",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />,
    previews: []
  },
  {
    id: 3,
    title: "Kwizinyo",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />,
     previews: []
  },
   {
    id: 4,
    title: "MyPOS",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />,
     previews: []
  },
   {
    id: 5,
    title: "FromAnonymous",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />,
     previews: []
  }
];

const [selectedProject, setSelectedProject] = useState(null);


    return(
        <div className="container">
            <p><strong>Projects</strong></p>
            {/* <div className="project-items" >
                <div className="project-item" onClick={() => setShowPopup(true)}>
                  <img src={tonelLogo} />
                      <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>

                </div>

                <Popup show={showPopup} onClose={() => setShowPopup(false)}>
               <h2>Clientyo</h2>
               <div className="pop-up-body">
                 <VideoPlayer src={toneldemo} />
                <TonelyoKeyFeatures />
               </div>

              </Popup>
                <div className="project-item" onClick={() => setShowPopup(true)}>
                  <img src={tonelLogo} />
                      <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>

                <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
                 <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
                 <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
                    <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
            </div> */}
            <div className="project-items">
  {projects.map((project) => (
    <div
      key={project.id}
      className="project-item"
      onClick={() => setSelectedProject(project)}
    >
      <img src={project.logo} />
      <hr />
      <p className="description-p">
        <strong>{project.title}</strong><br />
      </p>
    </div>
  ))}
</div>

<Popup
  show={!!selectedProject}
  onClose={() => setSelectedProject(null)}
>
  {selectedProject && (
    <>
      <div className="pop-up-header">
      <img src={selectedProject.logo} />
      <div>
        <strong>{selectedProject.title}</strong>
        <p>{selectedProject.description}</p>
      </div>
    
      </div>
   
      <div className="pop-up-body">
        <strong>Preview</strong>
        <div className="project-preview">
          <video src={selectedProject.video} controls autoPlay loop />
          {selectedProject.previews.map((img) => (

             <img src={img} />
          )) }
        </div>
     
        {selectedProject.features}
      </div>
    </>
  )}
</Popup>


        </div>
    );
}

export default Projects;