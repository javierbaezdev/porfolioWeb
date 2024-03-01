import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Language } from '@/shared/types/language'
import { ThemeMode } from '@/shared/types/themeMode'
import { LANGUAGE_DICT, THEME_MODE_DICT } from '@/shared/constants'

interface State {
  language: Language
  themeMode: ThemeMode
  onChangeLanguage: (language: Language) => void
  onChangeThemeMode: (mode: ThemeMode) => void
}

export const useAppStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          language: LANGUAGE_DICT.ES,
          themeMode: THEME_MODE_DICT.DARK,
          onChangeLanguage: (lg) => {
            const { language } = get()

            if (language !== lg) {
              set({
                language: lg,
              })
            }
          },
          onChangeThemeMode: (mode) => {
            const { themeMode } = get()

            if (themeMode !== mode) {
              let finalMode = themeMode

              if (mode === THEME_MODE_DICT.SYSTEM) {
                const isDark = window.matchMedia(
                  '(prefers-color-scheme: dark)'
                ).matches
                finalMode = isDark
                  ? THEME_MODE_DICT.DARK
                  : THEME_MODE_DICT.LIGHT
              }
              if (mode === THEME_MODE_DICT.DARK) {
                finalMode = THEME_MODE_DICT.DARK
              }
              if (mode === THEME_MODE_DICT.LIGHT) {
                finalMode = THEME_MODE_DICT.LIGHT
              }

              set({
                themeMode: finalMode,
              })
            }
          },
        }
      },
      {
        name: 'store',
      }
    )
  )
)
