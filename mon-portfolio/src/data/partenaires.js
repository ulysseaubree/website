// Logos des entreprises partenaires affichés en défilement (LogoMarquee).
// Pour en ajouter : déposer l'image dans src/assets/logo puis l'ajouter à la liste ci-dessous.
// Tant que la liste est vide, le cadre affiche des emplacements réservés.
import valeo from '../assets/logo/Valeo.webp'
import veolia from '../assets/logo/veolia.webp'
import renault from '../assets/logo/renault.webp'
import bpce from '../assets/logo/BPCE.webp'
import kepler from '../assets/logo/Kepler.webp'
import latecoere from '../assets/logo/Latecoere.webp'
import fleuryMichon from '../assets/logo/Fleury_michon.webp'
import soitec from '../assets/logo/soitec.webp'
import inea from '../assets/logo/Inea.webp'
import amcor from '../assets/logo/amcor.webp'
import moniteur from '../assets/logo/Moniteur.webp'
import ovh from '../assets/logo/ovh.webp'

// `note: true` marque les références réalisées en partenariat avec Labrador
// (affiche un petit astérisque à côté du logo, voir le renvoi sous le bandeau).
export const PARTENAIRES = [
  { name: 'Valeo', src: valeo },
  { name: 'Veolia', src: veolia },
  { name: 'Renault', src: renault, note: true },
  { name: 'BPCE', src: bpce },
  { name: 'Kepler Cheuvreux', src: kepler },
  { name: 'Latécoère', src: latecoere, note: true },
  { name: 'Fleury Michon', src: fleuryMichon, note: true },
  { name: 'Soitec', src: soitec, note: true },
  { name: 'Inea', src: inea, note: true },
  { name: 'Amcor', src: amcor },
  { name: 'Le Moniteur', src: moniteur },
  { name: 'OVH', src: ovh, note: true },
]
