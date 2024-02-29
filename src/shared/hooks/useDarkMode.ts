import { useEffect, useState } from 'react'
import { getItem } from '@/shared/services/localStorage'
import { KEY_THEME_MODE_LOCAL_STORAGE } from '@/shared/constants'

type Mode = 'DARK' | 'LIGHT' | 'SYSTEM'

const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const currentModeLocalStorage = getItem(
      KEY_THEME_MODE_LOCAL_STORAGE
    ) as Mode

    if (currentModeLocalStorage) {
      return currentModeLocalStorage
    }

    if (isDark) {
      return 'dark'
    }
    return 'light'
  })

  const onToggleMode = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const onSelectedMode = (mode: Mode) => {
    let finalMode = themeMode
    if (mode === 'SYSTEM') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      finalMode = isDark ? 'dark' : 'light'
    }
    if (mode === 'DARK') {
      finalMode = 'dark'
    }
    if (mode === 'LIGHT') {
      finalMode = 'light'
    }

    if (finalMode !== themeMode) {
      setThemeMode(finalMode)
    }
  }

  useEffect(() => {
    if (themeMode === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [themeMode])

  return { onToggleMode, onSelectedMode }
}

export default useDarkMode
