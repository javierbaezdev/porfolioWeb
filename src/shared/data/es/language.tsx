import { Chile, Us } from '@/shared/icons'
import { LanguageDictItem } from '@/shared/types/language'
import { LANGUAGE_DICT_VARIABLES } from '../constants'

export const LANGUAGE_DICT: LanguageDictItem[] = [
  {
    label: 'Español (CL)',
    key: LANGUAGE_DICT_VARIABLES.ES,
    icon: (
      <Chile
        width='20'
        height='20'
      />
    ),
  },
  {
    label: 'Inglés (US)',
    key: LANGUAGE_DICT_VARIABLES.EN,
    icon: (
      <Us
        width='20'
        height='20'
      />
    ),
  },
]
