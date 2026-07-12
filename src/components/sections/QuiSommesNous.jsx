import { useReveal } from '../../hooks/useReveal'
import './QuiSommesNous.css'

export default function QuiSommesNous() {
  const ref = useReveal()
  return (
    <section id="qui-sommes-nous" className="section section--dark">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Qui sommes-nous</p>
        <h2 className="section-title">Un réseau expert, une approche sur mesure</h2>
        <div className="gold-divider" />
        <div className="qsn__grid">

          <div className="qsn__block reveal">
            <h3 className="qsn__block-title">À propos du nom</h3>
            <p className="qsn__text"><strong>O</strong> — pour l'Ouverture au monde dans lequel les entreprises évoluent.</p>
            <p className="qsn__text"><strong>K</strong> — parce que chaque entreprise, chaque mission est un cas particulier.</p>
            <p className="qsn__text"><strong>AR</strong> — car bien communiquer relève de l'art : un ensemble de gestes précis entre science théorique et pratique spontanée.</p>
            <p className="qsn__text"><em>Mon tout est un Oscar qui récompense les meilleurs professionnels de leur catégorie.</em></p>
          </div>

          <div className="qsn__block reveal" style={{ transitionDelay: '0.15s' }}>
            <h3 className="qsn__block-title">Votre contact</h3>
            <div className="qsn__profile">
              <div className="qsn__avatar">FD</div>
              <div>
                <p className="qsn__name">Florence Daumal</p>
                <p className="qsn__role">Fondatrice OsKar Partners — depuis 2008</p>
              </div>
            </div>
            <ul className="qsn__parcours">
              <li>Plus de 25 ans d'expérience en communication financière</li>
              <li>Consultante communication financière — Image 7</li>
              <li>Relations investisseurs — Valeo, Veolia, Ciment Français</li>
              <li>Analyste financier crédit</li>
            </ul>
            <div className="qsn__memberships">
              <span>Club Finance Genève</span>
              <span>Institut Français des Administrateurs</span>
              <span>CLIFF</span>
            </div>
          </div>

          <div className="qsn__block reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="qsn__block-title">Pourquoi choisir OsKar</h3>
            <ul className="qsn__why">
              <li>Une culture de l'entreprise et un accompagnement opérationnel</li>
              <li>Expériences issues de la pratique du métier IR, du journalisme et du conseil</li>
              <li>Une équipe créée sur mesure grâce à notre réseau partenaires</li>
              <li className="qsn__placeholder">[ Texte à compléter par le client ]</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}