import { useState } from 'react'
import { getItem, setItem } from '@/shared/services/localStorage'
import { DATA, KEY_LANGUAGE_LOCAL_STORAGE } from '@/shared/constants'
import { Language } from '@/shared/types/language'

const useAllData = () => {
  const [allData] = useState(() => {
    const currentLanguageLocalStorage = getItem(
      KEY_LANGUAGE_LOCAL_STORAGE
    ) as Language

    if (currentLanguageLocalStorage) {
      return DATA[currentLanguageLocalStorage]
    }

    setItem(KEY_LANGUAGE_LOCAL_STORAGE, 'ES')
    return DATA['ES']
  })

  const onSelectedLanguage = (language: Language) => {
    setItem(KEY_LANGUAGE_LOCAL_STORAGE, language)
  }

  return { allData, onSelectedLanguage }
}

export default useAllData
