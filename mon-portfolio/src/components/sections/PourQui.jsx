import { useReveal } from '../../hooks/useReveal'
import './PourQui.css'

const CARDS = [
  {
    title: 'Vous êtes',
    items: ['Un groupe coté', 'Un groupe non coté', 'Une start-up', 'Un fonds de Private Equity'],
  },
  {
    title: 'Vous avez besoin de',
    items: ['Mettre en œuvre la CSRD', 'Mener un roadshow obligataire', 'Réaliser une opération de marché', 'Faire face à une campagne activiste'],
  },
  {
    title: 'Vous souhaitez',
    items: ['Répondre aux exigences de la réglementation', 'Gagner en visibilité', 'Atteindre de nouveaux investisseurs', 'Renforcer votre équipe IR'],
  },
]

export default function PourQui() {
  const ref = useReveal()
  return (
    <section id="pour-qui" className="section section--cream">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Pour qui — Pour quoi</p>
        <h2 className="section-title">OsKar Partners vous accompagne</h2>
        <div className="gold-divider" />
        <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
          Une réponse opérationnelle pour optimiser votre temps et vos ressources,
          répondre à la complexité de vos enjeux.
        </p>
        <div className="pourqui__grid">
          {CARDS.map((card, i) => (
            <div key={i} className="pourqui__card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <h3 className="pourqui__card-title">{card.title}</h3>
              <ul className="pourqui__list">
                {card.items.map((item, j) => (
                  <li key={j} className="pourqui__item">
                    <span className="pourqui__dot" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="pourqui__tagline">
          Accompagnement annuel · Mission ponctuelle · Externalisation de la fonction IR
        </p>
      </div>
    </section>
  )
}