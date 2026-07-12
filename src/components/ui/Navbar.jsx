import { useState, useEffect } from 'react'
import linkedinIcon from '../../assets/linkedin.webp'
import { Menu, X } from 'lucide-react'
import logoOskar from '../../assets/oskar_logo.png'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Qui sommes-nous', href: '#qui-sommes-nous' },
  { label: 'Notre offre', href: '#notre-offre' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#accueil" className="navbar__logo" onClick={e => handleLink(e, '#accueil')}>
          <img src={logoOskar} alt="OsKar Partners" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} className="navbar__link"
              onClick={e => handleLink(e, item.href)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar__cta"
            onClick={e => handleLink(e, '#contact')}>
            Nous contacter
          </a>
          <a href="https://www.linkedin.com/company/oskar-partners" target="_blank"
                    rel="noopener noreferrer" className="footer__linkedin" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" width="18" height="18" />
          </a>
        </nav>

        <button className="navbar__burger" onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}