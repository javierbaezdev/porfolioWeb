import { Language } from '@/shared/types/language'
import { AllData } from '@/shared/types/AllData'
// es
import { ME } from '@/shared/data/es/me'
import { TABS } from './data/es/tabs'
import { LANGUAGE_DICT } from './data/es/language'
import { THEME_MODE_DICT } from './data/es/themeMode'
import { PRESENTATION } from '@/shared/data/es/sections/presentation'
import { PROJECTS } from './data/es/sections/projects'
import { FOOTER } from '@/shared/data/es/sections/footer'
import { SKILLS } from '@/shared/data/es/skills'

// en
import { ME as ME_EN } from '@/shared/data/en/me'
import { TABS as TABS_EN } from './data/en/tabs'
import { LANGUAGE_DICT as LANGUAGE_DICT_EN } from './data/en/language'
import { THEME_MODE_DICT as THEME_MODE_DICT_EN } from './data/en/themeMode'
import { PRESENTATION as PRESENTATION_EN } from '@/shared/data/en/sections/presentation'
import { PROJECTS as PROJECTS_EN } from './data/en/sections/projects'
import { FOOTER as FOOTER_EN } from '@/shared/data/en/sections/footer'
import { SKILLS as SKILLS_EN } from '@/shared/data/en/skills'

/* --- */

export const DATA: Record<Language, AllData> = {
  ES: {
    me: ME,
    tabs: TABS,
    languageOptions: LANGUAGE_DICT,
    themeModeOptions: THEME_MODE_DICT,
    presentation: PRESENTATION,
    projects: PROJECTS,
    footer: FOOTER,
    skills: SKILLS,
  },
  EN: {
    me: ME_EN,
    tabs: TABS_EN,
    languageOptions: LANGUAGE_DICT_EN,
    themeModeOptions: THEME_MODE_DICT_EN,
    presentation: PRESENTATION_EN,
    projects: PROJECTS_EN,
    footer: FOOTER_EN,
    skills: SKILLS_EN,
  },
}
