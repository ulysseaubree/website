import { ChevronDown } from 'lucide-react'
import linkedinIcon from '../../assets/linkedin.webp'
import './Hero.css'

export default function Hero() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="accueil" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Communication financière & Relations Investisseurs</p>
        <h1 className="hero__title">
          <em>L'art</em> de votre<br />communication financière
        </h1>
        <p className="hero__desc">
          OsKar Partners vous propose une réponse opérationnelle pour optimiser
          votre temps et vos ressources, répondre à la complexité de vos enjeux.
        </p>
        <div className="hero__actions">
          <button className="btn btn-primary" onClick={() => scrollTo('#notre-offre')}>
            Découvrir notre offre
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
            Nous contacter
          </button>
        </div>
        <blockquote className="hero__quote">
          <span className="hero__quote-mark">"</span>
          La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas
          les perdre de vue lorsqu'on les poursuit.
          — Oscar Wilde
        </blockquote>
      </div>
      <button className="hero__scroll-hint" onClick={() => scrollTo('#pour-qui')} aria-label="Défiler">
        <ChevronDown size={22} />
      </button>
      <a href="https://www.linkedin.com/company/oskar-partners" target="_blank"
        rel="noopener noreferrer" className="hero__linkedin" aria-label="LinkedIn OsKar Partners">
        <img src={linkedinIcon} alt="LinkedIn" width="18" height="18" />
      </a>
    </section>
  )
}