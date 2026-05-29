import ArticleCard from '../components/ArticleCard'
import { fetchArticles } from '../viewmodels/blogViewModel'

function Blog() {
  const articles = fetchArticles()

  return (
    <section className="page">
      <h1>Blog</h1>
      <p>Articles about tools, experiments and learning.</p>
      <div className="project-grid">
        {articles.map((a) => (
          <ArticleCard article={a} key={a.slug} />
        ))}
      </div>
    </section>
  )
}

export default Blog
