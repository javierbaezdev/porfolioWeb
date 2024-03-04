import { Moon, Sun, DeviceImac } from '@/shared/icons'
import { ThemeModeDictItem } from '@/shared/types/themeMode'
import { THEME_MODE_VARIABLES } from '../constants'

export const THEME_MODE_DICT: ThemeModeDictItem[] = [
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
]
