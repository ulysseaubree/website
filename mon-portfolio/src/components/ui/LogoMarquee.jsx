import { PARTENAIRES } from '../../data/partenaires'
import './LogoMarquee.css'

const PLACEHOLDER_COUNT = 6

// Bandeau de logos en défilement continu. La liste est rendue deux fois
// pour que la boucle de l'animation (translation de -50 %) soit invisible.
export default function LogoMarquee({ logos = PARTENAIRES, label = 'Nos références' }) {
  const items = logos.length > 0
    ? logos
    : Array.from({ length: PLACEHOLDER_COUNT }, () => null)

  return (
    <div className="marquee" aria-label={label}>
      <p className="marquee__label">{label}</p>
      <div className="marquee__viewport">
        <ul className="marquee__track">
          {[0, 1].map(copy => items.map((logo, i) => (
            <li key={`${copy}-${i}`} className="marquee__item" aria-hidden={copy === 1}>
              {logo
                ? <img src={logo.src} alt={copy === 0 ? logo.name : ''} className="marquee__logo" />
                : <span className="marquee__placeholder" />}
            </li>
          )))}
        </ul>
      </div>
    </div>
  )
}
