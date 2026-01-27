import { useState } from "react";
import "./Projects.css";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container">
      <p><strong>Projects</strong></p>

      <div className="project-items">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Projects;
