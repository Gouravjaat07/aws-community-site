import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <div className="logo-wrap">
          <img src="/logo.png" alt="AWS Cloud Clubs Logo" className="logo-image" />
          <span className="logo-text">AWS Community Group</span>
        </div>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button className="btn btn-dark">Join Community</button>
      </div>
    </header>
  )
}