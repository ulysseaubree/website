import linkedinIcon from '../../assets/linkedin.webp'
import logoOskar from '../../assets/oskar_logo.png'
import './Footer.css'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <img src={logoOskar} alt="OsKar Partners" className="footer__logo-img" />
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} OsKar Partners — Tous droits réservés
        </p>
        <a href="https://www.linkedin.com/company/oskar-partners" target="_blank"
          rel="noopener noreferrer" className="footer__linkedin" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" width="18" height="18" />
        </a>
      </div>
    </footer>
  )
}