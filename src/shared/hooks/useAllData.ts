import { DATA } from '@/shared/constants'
import { useAppStore } from '@/store'

const useAllData = () => {
  const language = useAppStore((store) => store.language)
  return { allData: DATA[language] }
}

export default useAllData
