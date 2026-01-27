function ProjectCard({ project, onClick }) {
  return (
    <div className="project-item" onClick={() => onClick(project)}>
      <img src={project.logo} alt={project.title} />
      <hr />
      <p className="description-p">
        <strong>{project.title}</strong>
      </p>
    </div>
  );
}

export default ProjectCard;
