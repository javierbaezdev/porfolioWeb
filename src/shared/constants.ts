import { Language } from '@/shared/types/language'
import { AllData } from '@/shared/types/allData'

// es
import { ME } from '@/shared/data/es/me'
import { ThemeMode } from '@/shared/types/themeMode'

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
  },
  EN: {
    me: ME,
  },
}
