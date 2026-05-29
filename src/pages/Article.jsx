import { useParams } from 'react-router-dom'
import logo from '../assets/logo_davinci_resolve.jpg'

function Article() {
  const { slug } = useParams()

  // For now we only have one article; match by slug.
  if (slug !== 'my-journey-learning-video-editing') {
    return (
      <section className="page">
        <h1>Article not found</h1>
        <p>That article doesn't exist yet.</p>
      </section>
    )
  }

  return (
    <article className="page blog-article">
      <header>
        <img src={logo} alt="DaVinci Resolve logo" style={{ maxWidth: 200 }} />
        <h1>My Journey learning VIdeo Editing</h1>
      </header>

      <p>
        I started learning video editing with DaVinci Resolve by following beginner
        tutorials and experimenting with simple cuts, colour grading and export
        settings. This article describes the first steps I took, the resources I
        found helpful, and the small projects I used to build confidence.
      </p>

      <section>
        <h2>Getting started</h2>
        <p>More details to come...</p>
      </section>
    </article>
  )
}

export default Article
