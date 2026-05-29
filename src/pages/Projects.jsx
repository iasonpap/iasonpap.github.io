import { fetchProjects } from '../models/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const projects = fetchProjects()

  return (
    <section className="page">
      <h1>My Projects</h1>
      <p>what I've built so far...</p>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </section>
  )
}

export default Projects
