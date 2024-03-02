import { THEME_MODE_VARIABLES } from '@/shared/constants'
import { Moon, Sun, DeviceImac } from '@/shared/icons'
import { Language } from '@/shared/types/language'
import { ThemeModeDictItem } from '@/shared/types/themeMode'

export const THEME_MODE_DICT: Record<Language, ThemeModeDictItem[]> = {
  ES: [
    {
      label: 'Oscuro',
      icon: <Moon />,
      key: THEME_MODE_VARIABLES.DARK,
    },
    {
      label: 'Claro',
      icon: <Sun />,
      key: THEME_MODE_VARIABLES.LIGHT,
    },
    {
      label: 'Sistema',
      icon: <DeviceImac />,
      key: THEME_MODE_VARIABLES.SYSTEM,
    },
  ],
  EN: [
    {
      label: 'Dark',
      icon: <Moon />,
      key: THEME_MODE_VARIABLES.DARK,
    },
    {
      label: 'Light',
      icon: <Sun />,
      key: THEME_MODE_VARIABLES.LIGHT,
    },
    {
      label: 'System',
      icon: <DeviceImac />,
      key: THEME_MODE_VARIABLES.SYSTEM,
    },
  ],
}
