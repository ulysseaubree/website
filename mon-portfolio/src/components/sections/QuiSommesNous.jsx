import { useReveal } from '../../hooks/useReveal'
import Carousel from '../ui/Carousel'
import { useSheetData, driveUrl } from '../../hooks/useSheetData'
import linkedinIcon from '../../assets/linkedin.webp'
import './QuiSommesNous.css'

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRChaRuEeu8zpmQlS9k0Jji1c5b8rYOEAq7KaKze2msvurj3joDG3xE7wH6Cfphs2X8TWHOnueGbxq2/pub?gid=0&single=true&output=csv'

function CarteEquipe(item, isCenter) {
  const { nom, poste, photo, bio, linkedin } = item
  return (
    <div className={`carte-equipe${isCenter ? ' carte-equipe--active' : ''}`}>
      <div className="carte-equipe__photo">
        {photo
          ? <img src={driveUrl(photo)} alt={nom || 'Membre'} />
          : <div className="carte-equipe__avatar">{nom?.[0] ?? '?'}</div>
        }
      </div>
      <div className="carte-equipe__body">
        {nom && <p className="carte-equipe__nom">{nom}</p>}
        {poste && <p className="carte-equipe__poste">{poste}</p>}
        {isCenter && bio && <p className="carte-equipe__bio">{bio}</p>}
        {isCenter && linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="carte-equipe__linkedin">
            <img src={linkedinIcon} alt="LinkedIn" width="16" height="16" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function QuiSommesNous() {
  const ref = useReveal()
  const { data, loading, error } = useSheetData(SHEET_URL)

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
          <div className="qsn__block reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="qsn__block-title">Pourquoi choisir OsKar</h3>
            <ul className="qsn__why">
              <li>Une culture de l'entreprise et un accompagnement opérationnel</li>
              <li>Expériences issues de la pratique du métier IR, du journalisme et du conseil</li>
              <li>Une équipe créée sur mesure grâce à notre réseau partenaires</li>
              <li className="qsn__placeholder">[ Texte a ajouter ]</li>
            </ul>
          </div>

        </div>

        <div className="qsn__equipe reveal" style={{ transitionDelay: '0.2s' }}>
          <h3 className="qsn__equipe-title">Notre équipe</h3>
          {loading && <p className="sheet-status">Chargement de l'équipe...</p>}
          {error && <p className="sheet-status sheet-status--error">Impossible de charger l'équipe.</p>}
          {!loading && !error && data.length === 0 && (
            <p className="sheet-status">Aucun membre à afficher.</p>
          )}
          {!loading && !error && data.length > 0 && (
            <Carousel items={data} renderCard={(item, isCenter) => CarteEquipe(item, isCenter)} />
          )}
        </div>

      </div>
    </section>
  )
}