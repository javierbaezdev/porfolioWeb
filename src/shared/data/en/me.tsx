import {
  MeFullImage,
  MeMinImage,
  kumoTask_webp,
  cvBuilder_webp,
  cvBuilder_gif,
  kumoTask_gif,
} from '@/assets/images'
import {
  ChakraLogo,
  ReactLogo,
  ZustandLogo,
  kumoTaskLogo,
  cvBuilderLogo,
} from '@/assets/logos'
import { Linkedin, Mail } from '@/shared/icons'
import { Me } from '@/shared/types/me'

export const ME: Me = {
  NAME: 'Javier Báez',
  DESCRIPTION:
    'Full Stack Web Developer with 2+ years of experience in Santiago, Chile. Specialized in web application development with a focus on user experience and high-quality design.',
  ABOUT_ME: [
    "Hello! I'm Javier Fuenzalida, although I prefer to use my second surname as can be seen at the beginning of the website.",
    'For approximately 10 years, I was immersed in the world of design and tattooing, an experience that I highly value.',
    'However, my curiosity about programming led me to take an unexpected turn in my career. Thanks to some friendships, I delved into this fascinating world and discovered a completely new passion.',
    'Now I am dedicating all my effort to grow and improve in this field. Welcome to my space on the web!',
  ],
  CONTACTS: [
    {
      LABEL: 'Linkedin',
      TYPE: 'HREF',
      VALUE: 'https://www.linkedin.com/in/javierbaezdev/',
      ICON: <Linkedin />,
    },
    {
      LABEL: 'Contact me',
      TYPE: 'EMAIL',
      VALUE: 'javierbaez.dev@gmail.com',
      ICON: <Mail />,
    },
  ],
  EXPERIENCE: [
    {
      POSITION: 'Full Stack Developer',
      COMPANY: 'ForEach',
      DESCRIPTION:
        'I participated in several full-stack projects where I developed customized solutions for companies. These applications were designed to be scalable and efficient, using cloud services to optimize their performance and scalability. My role ranged from conceptualization to implementation and maintenance of these solutions, ensuring they met client requirements and provided added value to their business operations.',
      DATE_RANGE: 'Sep/2021 - Feb/2024',
    },
    {
      POSITION: 'Full Stack Developer',
      COMPANY: 'Duoc UC',
      DESCRIPTION:
        'Responsible for developing a full-stack application that integrated a Raspberry Pi with wireless switches. This application aimed to help children with limited communication difficulties express themselves more effectively. My role was to design, develop, and maintain this technological solution, ensuring its functionality and accessibility for end users.',
      DATE_RANGE: 'Aug/2021 - Dec/2021',
    },
  ],
  PROJECTS: [
    {
      TITLE: 'Kumo Tasks',
      DESCRIPTION:
        'Kumo Tasks is a simplified task management application that allows you to create boards for different projects and organize your tasks effectively.',
      CODE_HREF: 'https://github.com/javierbaezdev/kumoTasks',
      PREVIEW_HREF: 'https://kumotasks.pages.dev',
      ICON: kumoTaskLogo,
      TECHNOLOGIES: [
        {
          LABEL: 'React',
          ICON: ReactLogo,
          COLOR: 'blue',
        },
        {
          LABEL: 'Zustand',
          ICON: ZustandLogo,
          COLOR: 'red',
        },
        {
          LABEL: 'Chakra UI',
          ICON: ChakraLogo,
          COLOR: 'cyan',
        },
      ],
      IMAGE: kumoTask_webp,
      GIF: kumoTask_gif,
    },
    {
      TITLE: 'Cv Builder',
      DESCRIPTION:
        'Cv Builder is an application that allows you to create and customize your resume in English and Spanish, easily exporting it to PDF format.',
      CODE_HREF: 'https://github.com/javierbaezdev/profileBuilder',
      PREVIEW_HREF: 'https://profilebuilder.pages.dev',
      ICON: cvBuilderLogo,
      TECHNOLOGIES: [
        {
          LABEL: 'React',
          ICON: ReactLogo,
          COLOR: 'blue',
        },
        {
          LABEL: 'Zustand',
          ICON: ZustandLogo,
          COLOR: 'red',
        },
        {
          LABEL: 'Chakra UI',
          ICON: ChakraLogo,
          COLOR: 'cyan',
        },
      ],
      IMAGE: cvBuilder_webp,
      GIF: cvBuilder_gif,
    },
  ],
  IMAGES: {
    AVATAR_MIN: MeMinImage,
    AVATAR_FULL: MeFullImage,
  },
}
