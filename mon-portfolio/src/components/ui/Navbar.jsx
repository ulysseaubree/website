import { useState, useEffect } from 'react'
import linkedinIcon from '../../assets/linkedin.webp'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoOskar from '../../assets/oskar_logo.png'
import { OFFRES } from '../../data/offres'
import './Navbar.css'

// `sub` : entrées du menu déroulant affiché au survol. `offre` ouvre l'accordéon correspondant.
const NAV_ITEMS = [
  {
    label: 'Qui sommes-nous',
    href: '#qui-sommes-nous',
    sub: [
      { label: 'À propos du nom', href: '#a-propos-du-nom' },
      { label: 'Pourquoi choisir OsKar', href: '#pourquoi-choisir-oskar' },
    ],
  },
  { label: 'Équipe', href: '#equipe' },
  {
    label: 'Notre offre',
    href: '#notre-offre',
    sub: OFFRES.map(o => ({ label: o.label, href: `#offre-${o.id}`, offre: o.id })),
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href, offre) => {
    e.preventDefault()
    setMenuOpen(false)
    if (offre) window.dispatchEvent(new CustomEvent('open-offre', { detail: offre }))
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
            <div key={item.href} className={`navbar__item${item.sub ? ' navbar__item--has-sub' : ''}`}>
              <a href={item.href} className="navbar__link"
                onClick={e => handleLink(e, item.href)}>
                {item.label}
                {item.sub && <ChevronDown size={14} className="navbar__caret" aria-hidden="true" />}
              </a>
              {item.sub && (
                <ul className="navbar__dropdown">
                  {item.sub.map(sub => (
                    <li key={sub.href}>
                      <a href={sub.href} className="navbar__sublink"
                        onClick={e => handleLink(e, sub.href, sub.offre)}>
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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