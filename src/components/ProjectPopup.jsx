import Popup from "./Popup";
import TechStack from "./TechStack";
import TonelyoKeyFeatures from "./TonelyoFeatures";

function ProjectPopup({ project, onClose }) {
  if (!project) return null;

  return (
    <Popup show onClose={onClose}>
      <div className="pop-up-header">
        <img src={project.logo} alt={project.title} />
        <div>
          <strong>{project.title}</strong>
          <p className="description-p">{project.description}</p>
          <p className="description-p"><strong>Tech stack:</strong> {project.techStack}</p>
        </div>
      </div>

      <div className="pop-up-body">
        <strong>Preview</strong>

        <div className="project-preview">
          <video src={project.video} controls autoPlay loop />
          {project.previews.map((img, index) => (
            <img key={index} src={img} alt="preview" />
          ))}
        </div>


      </div>
    </Popup>
  );
}

export default ProjectPopup;
