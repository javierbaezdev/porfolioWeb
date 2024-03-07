import { LanguageDropdown, ThemeModeDropdown } from '../components'
import { useAllData } from '@/shared/hooks'

const Footer = () => {
  const { allData } = useAllData()
  return (
    <footer className='flex flex-row justify-between items-end mt-auto mb-10 border-t-2 border-dashed border-bunker-300 px-2 md:px-0'>
      <div className='w-full'>
        <p className='text-xs text-center text-rock-600 dark:text-bunker-400 md:text-start'>
          {allData.footer.TEXT}
        </p>
      </div>
      <div className='md:flex flex-row items-center justify-end w-auto gap-4 hidden pt-4'>
        <LanguageDropdown className='animate-fade-in-down bottom-20' />
        <ThemeModeDropdown className='animate-fade-in-down bottom-20' />
      </div>
    </footer>
  )
}

export default Footer
