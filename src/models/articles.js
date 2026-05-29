import logo from '../assets/logo_davinci_resolve.jpg'

// Article model — single source of truth for article data.
export const articles = [
  {
    title: 'My Journey learning VIdeo Editing',
    slug: 'my-journey-learning-video-editing',
    thumb: logo,
    excerpt: 'A short story of how I started learning video editing with DaVinci Resolve.',
    intro:
      'I started learning video editing with DaVinci Resolve by following beginner tutorials and experimenting with simple cuts, colour grading and export settings. This article describes the first steps I took, the resources I found helpful, and the small projects I used to build confidence.',
    sections: [
      {
        heading: 'Getting started',
        body: 'Followed official beginner tutorials, practised cuts and timeline workflows, and exported small clips to verify settings. Focused on learning trimming, transitions, and basic colour wheels.',
      },
    ],
  },
]

export function getAllArticles() {
  return articles
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug)
}
