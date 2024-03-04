import { Language } from '@/shared/types/language'
import { AllData } from '@/shared/types/allData'
import { ThemeMode } from '@/shared/types/themeMode'

// es
import { ME } from '@/shared/data/es/me'
import { PRESENTATION } from '@/shared/data/es/sections/presentation'
import { FOOTER } from '@/shared/data/es/sections/footer'

/* --- */

export const SECTIONS_IDS = ['experience', 'projects', 'about-me', 'contact']

export const THEME_MODE_VARIABLES: Record<ThemeMode, ThemeMode> = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  SYSTEM: 'SYSTEM',
}

export const LANGUAGE_DICT_VARIABLES: Record<Language, Language> = {
  ES: 'ES',
  EN: 'EN',
}

export const DATA: Record<Language, AllData> = {
  ES: {
    me: ME,
    presentation: PRESENTATION,
    footer: FOOTER,
  },
  EN: {
    me: ME,
    presentation: PRESENTATION,
    footer: FOOTER,
  },
}
