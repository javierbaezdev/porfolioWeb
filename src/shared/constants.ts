import { language } from '@/shared/types/language'
import { AllData } from '@/shared/types/AllData'
// es
import { ME } from '@/shared/data/es/me'
import { TABS } from '@/shared/data/es/tabs'

/* --- */

export const KEY_THEME_MODE_LOCAL_STORAGE = 'theme_mode_scheme'

export const DATA: Record<language, AllData> = {
  ES: {
    me: ME,
    tabs: TABS,
  },
}
