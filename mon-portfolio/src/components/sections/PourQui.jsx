import { useReveal } from '../../hooks/useReveal'
import './PourQui.css'

const SOCIETES = ['Un groupe coté', 'Un groupe non coté', 'Une start-up', 'Un fonds de Private Equity']
const FONCTIONS = ['Dirigeant', 'Relation Investisseurs', 'Responsable Financement / Trésorerie', 'Responsable RSE']
const BESOINS_GENERAUX = [
  'Répondre aux exigences de la réglementation',
  'Gagner en visibilité',
  'Atteindre de nouveaux investisseurs',
  'Renforcer votre équipe IR',
]
const BESOINS_PONCTUELS = [
  'Mettre en œuvre la CSRD',
  'Mener un roadshow obligataire',
  'Réaliser une opération de marché',
  'Faire face à une campagne activiste',
  '…',
]
const CAS_CONCRETS = [
  'Une société non cotée fait l\'objet d\'un LBO. Elle veut maîtriser sa communication vers les investisseurs potentiels et comprendre comment elle doit aborder ces nouveaux interlocuteurs.',
  'Un fonds ou une société d\'investissement souhaite que ses participations répondent aux standards de communication des sociétés cotées.',
  'Une PME a besoin d\'optimiser ses relations avec son banquier et se présenter de façon professionnelle.',
  'Une société réfléchit à son introduction en bourse et souhaite se préparer en amont à ce nouvel environnement.',
  'Une société cotée veut revoir sa politique de communication et s\'interroge sur celle de ses concurrents.',
  'Une société a besoin de vendre un projet à la communauté financière (projet industriel, opération financière, …)',
]

function List({ items }) {
  return (
    <ul className="pourqui__list">
      {items.map(item => (
        <li key={item} className="pourqui__item">
          <span className="pourqui__dot" />{item}
        </li>
      ))}
    </ul>
  )
}

export default function PourQui() {
  const ref = useReveal()
  return (
    <section id="pour-qui" className="section section--cream">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Pour qui — Pour quoi</p>
        <h2 className="section-title">Quand faire appel à OsKar</h2>
        <div className="gold-divider" />

        <div className="pourqui__grid">
          <div className="pourqui__card pourqui__card--societes reveal">
            <h3 className="pourqui__card-title">Vous êtes</h3>
            <List items={SOCIETES} />
          </div>

          <div className="pourqui__card pourqui__card--fonctions reveal" style={{ transitionDelay: '0.12s' }}>
            <h3 className="pourqui__card-title">Vous êtes</h3>
            <List items={FONCTIONS} />
          </div>

          <div className="pourqui__card pourqui__card--besoins reveal" style={{ transitionDelay: '0.24s' }}>
            <h3 className="pourqui__card-title">Vous avez besoin de</h3>
            <div className="pourqui__colonnes">
              <List items={BESOINS_GENERAUX} />
              <List items={BESOINS_PONCTUELS} />
            </div>
          </div>

          <div className="pourqui__card pourqui__card--cas reveal" style={{ transitionDelay: '0.36s' }}>
            <h3 className="pourqui__card-title">Cas concrets</h3>
            <div className="pourqui__cas">
              {CAS_CONCRETS.map(cas => <p key={cas}>{cas}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
