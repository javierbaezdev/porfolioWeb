import Layout from '@/shared/Layout'
import { useAppStore } from '@/store'
import { useEffect } from 'react'
import { THEME_MODE_DICT } from '@/shared/constants'

const App = () => {
  const themeMode = useAppStore((store) => store.themeMode)

  useEffect(() => {
    if (themeMode === THEME_MODE_DICT.DARK) {
      document.querySelector('html')?.classList.add('dark')
    }
    if (themeMode === THEME_MODE_DICT.LIGHT) {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [themeMode])

  return (
    <Layout>
      <>Contenido</>
    </Layout>
  )
}

export default App
