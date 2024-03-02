import Layout from '@/shared/Layout'
import { useAppStore } from '@/store'
import { useEffect } from 'react'
import { THEME_MODE_VARIABLES } from '@/shared/constants'

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

  return (
    <Layout>
      <>Contenido</>
    </Layout>
  )
}

export default App
