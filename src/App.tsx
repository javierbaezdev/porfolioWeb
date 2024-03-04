import Layout from '@/shared/Layout'
import { useAppStore } from '@/store'
import { useEffect } from 'react'
import { SECTIONS_IDS, THEME_MODE_VARIABLES } from '@/shared/constants'
import {
  Experience,
  Projects,
  AboutMe,
  Contact,
  Presentation,
} from './pages/sections'

const App = () => {
  const themeMode = useAppStore((store) => store.themeMode)

  useEffect(() => {
    if (themeMode === THEME_MODE_VARIABLES.DARK) {
      document.querySelector('html')?.classList.add('dark')
    }
    if (themeMode === THEME_MODE_VARIABLES.LIGHT) {
      document.querySelector('html')?.classList.remove('dark')
    }
    if (themeMode === THEME_MODE_VARIABLES.SYSTEM) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (isDark) {
        document.querySelector('html')?.classList.add('dark')
      } else {
        document.querySelector('html')?.classList.remove('dark')
      }
    }
  }, [themeMode])

  useEffect(() => {
    const handleScroll = () => {
      // Obtener las posiciones de todas las secciones
      const positions = SECTIONS_IDS.map((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          return { id: sectionId, top: section.getBoundingClientRect().top }
        }
        return null
      })

      // Encontrar la sección más cercana a la parte superior de la vista
      const nearestSection = positions.reduce((nearest, current) => {
        if (!nearest) {
          return current
        }
        if (current && Math.abs(current.top) < Math.abs(nearest.top)) {
          return current
        }
        return nearest
      }, null)

      // Actualizar el path de la aplicación según la sección más cercana a la parte superior de la vista
      if (nearestSection && nearestSection.top <= 0) {
        window.history.pushState(null, '', `/#${nearestSection.id}`)
      } else {
        window.history.pushState(null, '', '/')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout>
      <div className='flex flex-col gap-2 mt-20'>
        <Presentation />
        <Experience />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </Layout>
  )
}

export default App
