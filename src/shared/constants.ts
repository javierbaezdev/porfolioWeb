import { Language } from '@/shared/types/language'
import { AllData } from '@/shared/types/allData'
// es
import { ME } from '@/shared/data/es/me'
import { TABS } from '@/shared/data/es/tabs'
import { ThemeMode } from '@/shared/types/themeMode'

/* --- */

export const THEME_MODE_DICT: Record<ThemeMode, ThemeMode> = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  SYSTEM: 'SYSTEM',
}

export const LANGUAGE_DICT: Record<Language, Language> = {
  ES: 'ES',
}

export const DATA: Record<Language, AllData> = {
  ES: {
    me: ME,
    tabs: TABS,
  },
}
