import { useParams } from 'react-router-dom'
import { fetchArticle } from '../models/articles'

function Article() {
  const { slug } = useParams()
  const article = fetchArticle(slug)

  if (!article) {
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
        <img src={article.thumb} alt={article.title} />
        <h1>{article.title}</h1>
      </header>

      <p>{article.intro}</p>

      {article.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </article>
  )
}

export default Article
