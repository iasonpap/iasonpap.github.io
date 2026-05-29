import * as model from '../models/articles'

// ViewModel exposes data access for views (Blog list and Article view)
export function fetchArticles() {
  // In future replace with async fetch.
  return model.getAllArticles()
}

export function fetchArticle(slug) {
  return model.getArticleBySlug(slug)
}
