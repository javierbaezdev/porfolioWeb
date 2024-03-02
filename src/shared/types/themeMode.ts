export type ThemeMode = 'DARK' | 'LIGHT' | 'SYSTEM'

export interface ThemeModeDictItem {
  label: string
  icon: JSX.Element
  key: ThemeMode
}

export interface ThemeModeDict {
  DARK: ThemeModeDictItem
  LIGHT: ThemeModeDictItem
  SYSTEM: ThemeModeDictItem
}
