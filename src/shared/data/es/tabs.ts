import { Language } from '@/shared/types/language'
import { Tab } from '@/shared/types/tabs'

export const TABS: Record<Language, Tab[]> = {
  ES: [
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Sobre mí', href: '#about-me' },
    { label: 'Contacto', href: '#contact' },
  ],
  EN: [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'About me', href: '#about-me' },
    { label: 'Contact', href: '#contact' },
  ],
}
