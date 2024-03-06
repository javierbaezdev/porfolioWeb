export type ContactType = 'HREF' | 'EMAIL'
interface Contact {
  LABEL: string
  TYPE: ContactType
  VALUE: string
  ICON: JSX.Element
}

interface Technology {
  LABEL: string
  ICON: string
  COLOR: string
}

interface Experience {
  POSITION: string
  COMPANY: string
  DESCRIPTION: string
  DATE_RANGE: string
}

export interface Project {
  TITLE: string
  DESCRIPTION: string
  CODE_HREF?: string
  PREVIEW_HREF: string
  ICON: string
  TECHNOLOGIES: Technology[]
  IMAGE: string
  GIF?: string
}

interface Images {
  AVATAR_MIN: string
  AVATAR_FULL: string
}

export interface Me {
  NAME: string
  DESCRIPTION: string
  ABOUT_ME: string[]
  CONTACTS: Contact[]
  EXPERIENCE: Experience[]
  PROJECTS: Project[]
  IMAGES: Images
}
