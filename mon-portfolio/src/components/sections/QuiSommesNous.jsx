import { useReveal } from '../../hooks/useReveal'
import LogoMarquee from '../ui/LogoMarquee'
import Equipe from './Equipe.jsx'
import harborImg from '../../assets/harbor.jpg'
import skyImg from '../../assets/sky_upsize.jpg'
import './QuiSommesNous.css'

export default function QuiSommesNous() {
  const ref = useReveal()

  return (
    <section id="qui-sommes-nous" className="section section--dark">
      <div className="container" ref={ref}>
        <p className="section-eyebrow">Qui sommes-nous</p>
        <h2 className="section-title">Un réseau expert, une approche sur mesure</h2>
        <div className="gold-divider" />

        <div id="pourquoi-choisir-oskar" className="qsn__section reveal">
          <h3 className="qsn__why-title">Pourquoi choisir OsKar</h3>
          <div className="qsn__why-grid">
            <div className="qsn__mission">
              <h4 className="qsn__why-heading">Notre mission est créatrice de valeur</h4>
              <p className="qsn__text">
                Plus que jamais la communication financière et extra financière est un outil de création
                de valeur pour les entreprises face aux demandes de leurs parties prenantes et dans un
                contexte d'exigence réglementaire croissante.
              </p>
              <p className="qsn__text">
                Obtenir l'adhésion de ses investisseurs, actionnaires, banquiers, clients, fournisseurs,
                salariés, … sur sa stratégie, ses résultats, ses perspectives, est en effet un enjeu
                déterminant pour tout type de société grande ou petite, cotée ou pas. Une communication
                financière et extra financière efficace, transparente et pédagogique permet d'y répondre
                avec succès.
              </p>
              <div className="qsn__mission-image">
                <img src={skyImg} alt="" className="qsn__mission-image-img" />
              </div>
            </div>

            <div>
              <h4 className="qsn__why-heading">Nous avons développé une approche de Boutique - Conseil</h4>
              <p className="qsn__text">
                Vous avez accès à des <strong>experts</strong> de vos problématiques, immédiatement
                opérationnels. Vous bénéficiez de leur <strong>séniorité</strong> et de leur vision
                globale de vos enjeux.
              </p>
              <p className="qsn__text">
                OsKar vous propose une <strong>réponse complète taillée sur-mesure grâce à l'écoute et
                la compréhension de vos besoins et la souplesse de notre structure.</strong>
              </p>
              <p className="qsn__text">
                Autour de la Relation investisseurs, OsKar a développé un réseau de partenaires experts
                sur toute la chaîne de valeur de vos projets dans les domaines de l'ESG, la rédaction,
                la traduction, le design, la gestion des risques, le M&amp;A, … Nous pouvons à la demande
                être un <strong>agrégateur de compétences</strong> pour une <strong>approche intégrée et
                cohérente de vos besoins</strong>. OsKar est ainsi en mesure de créer en toute
                transparence une équipe répondant aux critères de compétences et de séniorité requis
                pour la mission. Ce mode de fonctionnement permet à OsKar de créer l'équipe, disponible
                et réactive, répondant aux critères spécifiques de la mission, tout en gardant les
                qualités de proximité que seule une agence à taille humaine peut proposer.
              </p>
            </div>
          </div>

          <LogoMarquee />
        </div>

        <Equipe />

        <div id="a-propos-du-nom" className="qsn__section qsn__grid">
          <div className="qsn__block reveal">
            <h3 className="qsn__block-title">À propos du nom</h3>

            <p className="qsn__charade-label">Mon premier est un</p>
            <p className="qsn__text"><strong>O</strong> — pour l'Ouverture au monde dans lequel les entreprises évoluent.</p>

            <p className="qsn__charade-label">Mon deuxième est un</p>
            <p className="qsn__text"><strong>K</strong> — parce que chaque entreprise, chaque mission est un cas particulier.</p>

            <p className="qsn__charade-label">Mon troisième est un</p>
            <p className="qsn__text"><strong>AR</strong> — car bien communiquer relève de l'art : un ensemble de gestes précis entre science théorique et pratique spontanée.</p>

            <p className="qsn__text"><em>Mon tout est un Oscar qui récompense les meilleurs professionnels de leur catégorie.</em></p>
          </div>

          <div className="qsn__image reveal" style={{ transitionDelay: '0.3s' }}>
            <img src={harborImg} alt="" className="qsn__image-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
