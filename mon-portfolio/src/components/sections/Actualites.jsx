import Carousel from '../ui/Carousel'
import { useSheetData, driveUrl } from '../../hooks/useSheetData'
import { useReveal } from '../../hooks/useReveal'
import './Actualites.css'

// Remplace par ton URL CSV Google Sheets onglet actualites
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRChaRuEeu8zpmQlS9k0Jji1c5b8rYOEAq7KaKze2msvurj3joDG3xE7wH6Cfphs2X8TWHOnueGbxq2/pub?gid=904411646&single=true&output=csv'

function CarteActualite({ titre, date, image, texte, lien }, isCenter) {
  return (
    <div className={`carte-actu${isCenter ? ' carte-actu--active' : ''}`}>
      <div className="carte-actu__image">
        {image
          ? <img src={driveUrl(image)} alt={titre} />
          : <div className="carte-actu__image-placeholder" />
        }
      </div>
      <div className="carte-actu__body">
        <p className="carte-actu__date">{date}</p>
        <h3 className="carte-actu__titre">{titre}</h3>
        {isCenter && <p className="carte-actu__texte">{texte}</p>}
        {isCenter && lien && (
          <a href={lien} target="_blank" rel="noopener noreferrer" className="carte-actu__lien">
            Lire la suite →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Actualites() {
  const ref = useReveal()
  const { data, loading, error } = useSheetData(SHEET_URL)

  return (
    <section id="actualites" className="section section--dark">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Actualités</p>
        <h2 className="section-title">Dernières nouvelles</h2>
        <div className="gold-divider" />
        {loading && <p className="sheet-status-light">Chargement...</p>}
        {error && <p className="sheet-status-light sheet-status-light--error">Erreur de chargement.</p>}
        {!loading && !error && (
          <div className="reveal">
            <Carousel items={data} renderCard={(item, isCenter) => CarteActualite(item, isCenter)} />
          </div>
        )}
      </div>
    </section>
  )
}