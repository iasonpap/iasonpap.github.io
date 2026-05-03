const projectItems = [
  'ANC Demonstrator',
  'DIY BT Airtags',
  'DIY Portable Speaker',
]

function Projects() {
  return (
    <section className="page">
      <h1>My Projects</h1>
      <p>what I've built so far...</p>
      <div className="project-grid">
        {projectItems.map((title) => (
          <article className="project-card" key={title}>
            <h2>{title}</h2>
            <p>Coming soon</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
