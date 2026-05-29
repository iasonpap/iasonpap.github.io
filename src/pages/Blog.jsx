import { Link } from 'react-router-dom'
import logo from '../assets/logo_davinci_resolve.jpg'

const articles = [
  {
    title: 'VIdeo Editing Journey',
    slug: 'my-journey-learning-video-editing',
    thumb: logo,
    excerpt: "A short story of how I started learning video editing with DaVinci Resolve.",
  },
]

function Blog() {
  return (
    <section className="page">
      <h1>Blog</h1>
      <p>Articles about tools, experiments and learning.</p>
      <div className="project-grid">
        {articles.map((a) => (
          <Link to={`/blog/${a.slug}`} key={a.slug} className="project-card-link">
            <article className="project-card">
              <img src={a.thumb} alt={a.title} className="project-thumb" />
              <div className="project-meta">
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Blog
