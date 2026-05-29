import { useParams } from 'react-router-dom'
import { fetchProject } from '../viewmodels/projectsViewModel'

function Project() {
  const { slug } = useParams()
  const project = fetchProject(slug)

  if (!project) {
    return (
      <section className="page">
        <h1>Project not found</h1>
        <p>That project doesn't exist yet.</p>
      </section>
    )
  }

  return (
    <article className="page project-article">
      <header>
        <h1>{project.title}</h1>
      </header>

      <p>{project.excerpt}</p>

      <section>
        <h2>Details</h2>
        <p>More information coming soon.</p>
      </section>
    </article>
  )
}

export default Project
