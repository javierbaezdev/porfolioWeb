import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Language } from '@/shared/types/language'
import { ThemeMode } from '@/shared/types/themeMode'
import {
  LANGUAGE_DICT_VARIABLES,
  THEME_MODE_VARIABLES,
} from '@/shared/data/constants'

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
          language: LANGUAGE_DICT_VARIABLES.ES,
          themeMode: THEME_MODE_VARIABLES.DARK,
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
              set({
                themeMode: mode,
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
