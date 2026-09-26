import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { OFFRES } from '../../data/offres'
import './NotreOffre.css'

function Accordion({ offre, open, onToggle }) {
  return (
    <div id={`offre-${offre.id}`} className={`offre__item${open ? ' offre__item--open' : ''}`}>
      <button className="offre__header" onClick={onToggle}>
        <span className="offre__label">{offre.label}</span>
        <ChevronDown size={20} className="offre__chevron" />
      </button>
      <div className="offre__body">
        {offre.role && (
          <p className="offre__role"><strong>Notre rôle :</strong> {offre.role}</p>
        )}
        {offre.intro && (
          <div className="offre__intro-group">
            {offre.intro.map((p, i) => <p key={i} className="offre__intro">{p}</p>)}
          </div>
        )}
        <ul className="offre__list">
          {offre.content.map((item, i) => {
            const isGroup = typeof item === 'object'
            return (
              <li key={i} className={`offre__list-item${offre.placeholder ? ' offre__placeholder' : ''}`}>
                <span className="pourqui__dot" />
                {isGroup ? (
                  <span>
                    {item.label}
                    <ul className="offre__sublist">
                      {item.sub.map((s, j) => <li key={j}>{s}</li>)}
                    </ul>
                  </span>
                ) : item}
              </li>
            )
          })}
        </ul>
        {offre.callouts?.map((callout, i) => (
          <div key={i} className="offre__callout">
            {callout.text && <p className="offre__callout-text">{callout.text}</p>}
            {callout.title && <p className="offre__callout-title">{callout.title}</p>}
            <ul className="offre__callout-list">
              {callout.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NotreOffre() {
  const ref = useReveal()
  const [openIds, setOpenIds] = useState(() => new Set([OFFRES[0].id]))

  const toggle = id => setOpenIds(prev => {
    const next = new Set(prev)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })

  // La navbar demande l'ouverture d'une offre via le menu déroulant "Notre offre"
  useEffect(() => {
    const onOpen = e => setOpenIds(prev => new Set(prev).add(e.detail))
    window.addEventListener('open-offre', onOpen)
    return () => window.removeEventListener('open-offre', onOpen)
  }, [])

  return (
    <section id="notre-offre" className="section section--cream">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Notre offre</p>
        <h2 className="section-title">Une offre sur mesure</h2>
        <div className="gold-divider" />
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          Accompagnement annuel, mission ponctuelle ou externalisation de la fonction Relation Investisseurs —
          OsKar Partners s'adapte à vos besoins.
        </p>
        <div className="offre__accordion reveal">
          {OFFRES.map(offre => (
            <Accordion key={offre.id} offre={offre}
              open={openIds.has(offre.id)} onToggle={() => toggle(offre.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}