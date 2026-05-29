import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h2>
        <Link to={`/projects/${project.slug}`} className="project-card-link">
          {project.title}
        </Link>
      </h2>
      <p>{project.excerpt}</p>
    </article>
  )
}
