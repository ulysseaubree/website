import { Mail, Phone } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="section section--dark">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Parlons de votre projet</h2>
        <div className="gold-divider" />
        <div className="contact__grid">
          <div className="contact__info reveal">
            <p className="contact__desc">
              Vous souhaitez en savoir plus sur nos services ou discuter d'une mission ?
              Florence Daumal est à votre disposition.
            </p>
            <div className="contact__links">
              <a href="mailto:florence.daumal@oskarpartners.com" className="contact__link">
                <Mail size={18} />
                florence.daumal@oskarpartners.com
              </a>
              <a href="tel:+33608331423" className="contact__link">
                <Phone size={18} />
                +33 6 08 33 14 23
              </a>
            </div>
            {/* Lieu à compléter par le client */}
            <p className="contact__location">[ Lieu / adresse à compléter ]</p>
          </div>
          <div className="contact__quote reveal" style={{ transitionDelay: '0.15s' }}>
            <blockquote>
              <p>
                "La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas
                les perdre de vue lorsqu'on les poursuit."
              </p>
              — Oscar Wilde
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}