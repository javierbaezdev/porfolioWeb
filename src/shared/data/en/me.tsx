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
    'Full Stack Web Developer con 2+ años de experiencia en Santiago de Chile. Especializado en el desarrollo de aplicaciones web con enfoque en la experiencia del usuario y diseño de alta calidad.',
  ABOUT_ME: [
    '¡Hola! Soy Javier Fuenzalida, aunque prefiero utilizar mi segundo apellido como se puede apreciar al inicio de la web.',
    'Durante aproximadamente 10 años, estuve inmerso en el mundo del diseño y el tatuaje, una experiencia que valoro mucho.',
    'Sin embargo, mi curiosidad por la programación me llevó a dar un giro inesperado a mi carrera. Gracias a algunas amistades, me adentré en este fascinante mundo y descubrí una pasión completamente nueva.',
    'Ahora estoy dedicando todo mi esfuerzo a crecer y mejorar en este campo. ¡Bienvenido a mi espacio en la web!"',
  ],
  CONTACTS: [
    {
      LABEL: 'Linkedin',
      TYPE: 'HREF',
      VALUE: 'https://www.linkedin.com/in/javierbaezdev/',
      ICON: <Linkedin />,
    },
    {
      LABEL: 'Contáctame',
      TYPE: 'EMAIL',
      VALUE: 'javierbaez.dev@gmail.com',
      ICON: <Mail />,
    },
  ],
  EXPERIENCE: [
    {
      POSITION: 'Desarrollador Full Stack',
      COMPANY: 'ForEach',
      DESCRIPTION:
        'Participé en varios proyectos full stack donde desarrollé soluciones personalizadas para empresas. Estas aplicaciones fueron diseñadas para ser escalables y eficientes, utilizando servicios en la nube para optimizar su rendimiento y escalabilidad. Mi papel abarcó desde la conceptualización hasta la implementación y mantenimiento de estas soluciones, asegurando que cumplieran con los requisitos del cliente y proporcionaran un valor añadido a sus operaciones comerciales.',
      DATE_RANGE: 'sept/2021 - feb/2024',
    },
    {
      POSITION: 'Desarrollador Full Stack',
      COMPANY: 'Duoc UC',
      DESCRIPTION:
        'Responsable de desarrollar una aplicación full stack que integraba una Raspberry Pi con interruptores inalámbricos. Esta aplicación tenía como objetivo ayudar a niños con dificultades de comunicación limitada a expresarse de manera más efectiva. Mi papel fue diseñar, desarrollar y mantener esta solución tecnológica, asegurando su funcionalidad y accesibilidad para los usuarios finales.',
      DATE_RANGE: 'ago/2021 - dic/2021',
    },
  ],
  PROJECTS: [
    {
      TITLE: 'Kumo Tasks',
      DESCRIPTION:
        'Kumo Tasks es una aplicación de gestión de tareas simplificada que te permite crear tableros para diferentes proyectos y organizar tus tareas de manera efectiva.',
      CODE_HREF: 'https://github.com/javierbaezdev/kumoTasks',
      PREVIEW_HREF: 'https://kumo-tasks.vercel.app/projects',
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
        'Cv Builder es una aplicación que te permite crear y personalizar tu currículum vitae en inglés y español, exportándolo fácilmente a formato PDF.',
      CODE_HREF: 'https://github.com/javierbaezdev/profileBuilder',
      PREVIEW_HREF: 'https://profile-builder-ten.vercel.app/builder',
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
