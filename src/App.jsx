import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import About from './views/About.jsx'
import CV from './views/CV.jsx'
import Projects from './views/Projects.jsx'
import Project from './views/Project.jsx'
import Blog from './views/Blog.jsx'
import Article from './views/Article.jsx'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <p className="site-logo">
          <svg
            className="site-logo-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M1 12C3.5 4 6.5 4 9 12S14.5 20 17 12 20.5 4 23 12" />
          </svg>
          <span>Iasonas Papadopoulos</span>
        </p>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/cv" className={({ isActive }) => (isActive ? 'active' : '')}>
            CV
          </NavLink>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
            Blog
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
