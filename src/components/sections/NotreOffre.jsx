import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import './NotreOffre.css'

const OFFRES = [
  {
    id: 'supports',
    label: 'Communication réglementée & corporate',
    content: ['DEU, RFS, Rapport intégré, Rapport de durabilité', 'Lettres aux actionnaires, Présentations investisseurs', 'Benchmarking des pratiques de marché et de votre secteur', 'Prise en compte de l\'actualité réglementaire', 'Gestion de projet : structuration, élaboration du contenu, rédaction'],
  },
  {
    id: 'ir',
    label: 'Relations Investisseurs',
    content: ['Accompagnement lors des temps forts : résultats annuels, semestriels, trimestriels', 'Études de perception & Q&A', 'Benchmarking concurrentiel', 'Gestion de la relation analystes / investisseurs', 'Reporting fonds d\'investissement'],
  },
  {
    id: 'specifique',
    label: 'Accompagnement spécifique',
    content: ['Capital Market Days (CMD)', 'Opérations financières : augmentation de capital, acquisition, préparation IPO', 'Préparation des communications au Conseil d\'administration, Assemblée générale', 'Sensibilisation des salariés à l\'environnement d\'un groupe coté'],
  },
  {
    id: 'fonds',
    label: 'Focus : Levée de fonds',
    content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique velit at massa tincidunt scelerisque. massa id mauris euismod mollis eget quis massa. Donec sollicitudin accumsan tellus, ac rhoncus dui fermentum tristique. Praesent nec volutpat nibh.'],
    placeholder: true,
  },
  {
    id: 'pme',
    label: 'Focus : Offre PME',
    content: ['Montrer à vos clients votre réponse aux exigences RSE', 'Accéder à des financements grâce à la qualité de vos publications', 'Trouver un repreneur ou réussir une cession', 'Améliorer l\'adhésion de vos équipes et votre capacité de recrutement', 'Dialoguer avec vos actionnaires pour les fidéliser'],
  },
]

function Accordion({ offre, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`offre__item${open ? ' offre__item--open' : ''}`}>
      <button className="offre__header" onClick={() => setOpen(v => !v)}>
        <span className="offre__label">{offre.label}</span>
        <ChevronDown size={20} className="offre__chevron" />
      </button>
      <div className="offre__body">
        <ul className="offre__list">
          {offre.content.map((item, i) => (
            <li key={i} className={`offre__list-item${offre.placeholder ? ' offre__placeholder' : ''}`}>
              <span className="pourqui__dot" />{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function NotreOffre() {
  const ref = useReveal()
  return (
    <section id="notre-offre" className="section section--cream">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Notre offre</p>
        <h2 className="section-title">Une offre sur mesure</h2>
        <div className="gold-divider" />
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          Accompagnement annuel, mission ponctuelle ou externalisation de la fonction IR —
          OsKar Partners s'adapte à vos besoins.
        </p>
        <div className="offre__accordion reveal">
          {OFFRES.map((offre, i) => (
            <Accordion key={offre.id} offre={offre} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}