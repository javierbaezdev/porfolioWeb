import { Tab } from '@/shared/types/tabs'
import { SECTIONS_IDS } from '../constants'

export const TABS: Tab[] = [
  { label: 'Experience', href: `#${SECTIONS_IDS.at(0)}` },
  { label: 'Projects', href: `#${SECTIONS_IDS.at(1)}` },
  { label: 'About me', href: `#${SECTIONS_IDS.at(2)}` },
]
