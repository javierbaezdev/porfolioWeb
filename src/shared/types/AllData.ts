import { ProjectsComponent } from './projects'
import { FooterComponent } from './footer'
import { LanguageDictItem } from './language'
import { Me } from './me'
import { PresentationComponent } from './presentation'
import { Tab } from './tabs'
import { ThemeModeDictItem } from './themeMode'

export interface AllData {
  me: Me
  tabs: Tab[]
  languageOptions: LanguageDictItem[]
  themeModeOptions: ThemeModeDictItem[]
  presentation: PresentationComponent
  projects: ProjectsComponent
  footer: FooterComponent
  skills: string[]
}
