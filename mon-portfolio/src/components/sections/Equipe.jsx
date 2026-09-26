import { Check, ArrowDown } from 'lucide-react'
import photoFlorence from '../../assets/florence_daumal.png'
import './Equipe.css'

const ATOUTS = [
  'Plus de 25 ans d\'expérience en communication financière en entreprise et société de conseil',
  'Une connaissance des problématiques de gouvernance, RSE et de financements',
]
const PARCOURS = [
  'Depuis 2008, OsKar Partners Conseil Communication financière et Relations investisseurs',
  'Consultante communication financière Image 7',
  'Relation investisseurs d\'entreprises internationales (Valeo, Veolia, Ciment Français)',
  'Analyste financier crédit',
]
const MEMBRE_DE = ['Club Finance Genève', 'Cliff']
const CHAINE_DE_VALEUR = [
  'Relations investisseurs',
  'Conseil information réglementée',
  'Reporting ESG',
  'Rédaction',
  'Traduction',
  'Gestion des risques',
]

// Sous-section « Équipe » de Qui sommes-nous (slide 4). Pas de section/container
// propre : elle est embarquée dans le <div className="container"> de QuiSommesNous,
// dont le useReveal() détecte aussi les .reveal posés ici.
export default function Equipe() {
  return (
    <div id="equipe" className="qsn__section">
      <h3 className="qsn__why-title">Une équipe taillée pour votre mission</h3>
      <p className="equipe__intro">
        OsKar a développé un réseau de partenaires experts. Pour répondre aux besoins spécifiques
        de ses clients, OsKar est en mesure de créer en toute transparence une équipe répondant
        aux critères de compétences et de séniorité requis pour la mission.
      </p>

      <div className="equipe__grid">
        <article className="equipe__profil reveal">
          <div className="equipe__identite">
            <img src={photoFlorence} alt="Florence Daumal" className="equipe__photo" />
            <div>
              <p className="equipe__role">Votre contact</p>
              <h3 className="equipe__nom">Florence Daumal</h3>
              <p className="equipe__poste">Fondateur OsKar Partners en 2008</p>
            </div>
          </div>

          <ul className="equipe__atouts">
            {ATOUTS.map(atout => (
              <li key={atout}><Check size={16} />{atout}</li>
            ))}
          </ul>

          <p className="equipe__bio">
            Florence accompagne les émetteurs dans leurs temps forts de communication financière,
            la préparation de Capital Market Days et travaille à l'évolution de leur information
            réglementée (DEU, …), la conception de Rapports intégrés, … Elle a développé une
            approche spécifique envers les investisseurs dette et agence de notation.
          </p>

          <h4 className="equipe__sous-titre">Parcours</h4>
          <ul className="equipe__parcours">
            {PARCOURS.map(etape => <li key={etape}>{etape}</li>)}
          </ul>

          <h4 className="equipe__sous-titre">Membre</h4>
          <div className="equipe__membre">
            {MEMBRE_DE.map(org => <span key={org}>{org}</span>)}
          </div>
        </article>

        <div className="equipe__competences reveal" style={{ transitionDelay: '0.2s' }}>
          <h3 className="equipe__competences-titre">Agrégateur de compétences</h3>
          <p className="equipe__competences-desc">
            en fonction de vos besoins, sur toute la chaîne de valeur de vos projets.
          </p>
          <ol className="equipe__chaine">
            {CHAINE_DE_VALEUR.map(maillon => <li key={maillon}>{maillon}</li>)}
          </ol>
          <ArrowDown size={22} className="equipe__fleche" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
