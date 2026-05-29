import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  return (
    <Link to={`/blog/${article.slug}`} className="project-card-link" key={article.slug}>
      <article className="project-card">
        <img src={article.thumb} alt={article.title} className="project-thumb" />
        <div className="project-meta">
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
