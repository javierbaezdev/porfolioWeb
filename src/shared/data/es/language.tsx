import { LANGUAGE_DICT_VARIABLES } from '@/shared/constants'
import { Chile, Us } from '@/shared/icons'
import { Language, LanguageDictItem } from '@/shared/types/language'

export const LANGUAGE_DICT: Record<Language, LanguageDictItem[]> = {
  ES: [
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
  ],
  EN: [
    {
      label: 'Spanish (CL)',
      key: LANGUAGE_DICT_VARIABLES.ES,
      icon: (
        <Chile
          width='20'
          height='20'
        />
      ),
    },
    {
      label: 'English (US)',
      key: LANGUAGE_DICT_VARIABLES.EN,
      icon: (
        <Us
          width='20'
          height='20'
        />
      ),
    },
  ],
}
