import { SECTIONS_IDS } from '@/shared/constants'
import { Language } from '@/shared/types/language'
import { Tab } from '@/shared/types/tabs'

export const TABS: Record<Language, Tab[]> = {
  ES: [
    { label: 'Experiencia', href: `#${SECTIONS_IDS.at(0)}` },
    { label: 'Proyectos', href: `#${SECTIONS_IDS.at(1)}` },
    { label: 'Sobre mí', href: `#${SECTIONS_IDS.at(2)}` },
    { label: 'Contacto', href: `#${SECTIONS_IDS.at(3)}` },
  ],
  EN: [
    { label: 'Experience', href: `#${SECTIONS_IDS.at(0)}` },
    { label: 'Projects', href: `#${SECTIONS_IDS.at(1)}` },
    { label: 'About me', href: `#${SECTIONS_IDS.at(2)}` },
    { label: 'Contact', href: `#${SECTIONS_IDS.at(3)}` },
  ],
}
