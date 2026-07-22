import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteData'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#ff9900] after:transition-all
    md:after:w-0 md:hover:after:w-full
    ${isActive
        ? 'text-white md:after:w-full'
        : 'text-white/75 hover:text-white'}
    max-md:w-full max-md:border-b max-md:border-white/10 max-md:px-6 max-md:py-4 max-md:after:hidden`

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[#232f3e]">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff9900] to-[#e88b00] p-1.5 shadow-[0_2px_8px_rgba(255,153,0,0.35)] sm:h-14 sm:w-14">
            <img
              src="/logo.png"
              alt="AWS Cloud Clubs Logo"
              className="h-full w-full rounded-md object-contain"
            />
          </span>
          <span className="truncate text-sm font-semibold text-white sm:text-base">
            AWS SBG SVSU
          </span>
        </div>

        {/* Nav links — slides in from the right on mobile */}
        <nav
          className={`
            flex items-center gap-5 lg:gap-7
            max-md:fixed max-md:right-0 max-md:top-[72px] max-md:z-[99] max-md:h-[calc(100vh-72px)]
            max-md:w-72 max-md:max-w-[80%] max-md:flex-col max-md:items-stretch max-md:gap-0
            max-md:overflow-y-auto max-md:border-l max-md:border-white/10 max-md:bg-[#232f3e]
            max-md:transition-transform max-md:duration-300 max-md:ease-in-out
            ${menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}
          `}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <button
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/B7mTRzfdsxsLS2K5sV6Vnv",
                "_blank"
              )
            }
            className="cursor-pointer  hidden rounded-lg bg-[#ff9900] px-5 py-2.5 font-semibold text-[#232f3e] transition-all hover:-translate-y-px hover:bg-[#ffac33] max-md:mx-6 max-md:my-4 max-md:block"
          >
            Join Community
        </button>
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() =>
            window.open(
              "https://chat.whatsapp.com/B7mTRzfdsxsLS2K5sV6Vnv",
              "_blank"
            )
          }
          className="cursor-pointer rounded-lg bg-[#ff9900] px-5 py-2.5 font-semibold text-[#232f3e] transition-all hover:-translate-y-px hover:bg-[#ffac33] max-md:hidden"
        >
          Join Community
        </button>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="z-[101] hidden h-8 w-8 flex-col items-center justify-center gap-[5px] max-md:flex"
        >
          <span className={`h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-full rounded-full bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-[72px] z-[98] bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}