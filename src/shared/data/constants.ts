import { Language } from '../types/language'
import { ThemeMode } from '../types/themeMode'

export const SECTIONS_IDS = ['experience', 'projects', 'about-me', 'skills']

export const THEME_MODE_VARIABLES: Record<ThemeMode, ThemeMode> = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  SYSTEM: 'SYSTEM',
}

export const LANGUAGE_DICT_VARIABLES: Record<Language, Language> = {
  ES: 'ES',
  EN: 'EN',
}
