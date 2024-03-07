import { Tab } from '@/shared/types/tabs'
import { SECTIONS_IDS } from '../constants'

export const TABS: Tab[] = [
  { label: 'Experiencia', href: `#${SECTIONS_IDS.at(0)}` },
  { label: 'Proyectos', href: `#${SECTIONS_IDS.at(1)}` },
  { label: 'Sobre mí', href: `#${SECTIONS_IDS.at(2)}` },
]
