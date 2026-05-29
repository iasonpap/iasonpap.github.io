import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import CV from './pages/CV.jsx'
import Projects from './pages/Projects.jsx'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-logo">
          <svg
            className="site-logo-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M1 12C3.5 4 6.5 4 9 12S14.5 20 17 12 20.5 4 23 12" />
          </svg>
          <span>Iasonas Papadopoulos</span>
        </div>
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
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
