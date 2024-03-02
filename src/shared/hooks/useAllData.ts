import { DATA } from '@/shared/constants'
import { useAppStore } from '@/store'
import { useMemo } from 'react'

const useAllData = () => {
  const language = useAppStore((store) => store.language)
  const allData = useMemo(() => DATA[language], [language])
  return { allData }
}

export default useAllData
