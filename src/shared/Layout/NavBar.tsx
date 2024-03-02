import { useAllData } from '@/shared/hooks'
import TabItem from './TabItem'
import { clsx } from 'clsx'
import { LanguageDropdown, ThemeModeDropdown } from '@/shared/components'
import BurgerDropdown from './BurgerDropdown'

const NavBar = () => {
  const { allData } = useAllData()
  return (
    <header className='flex flex-col md:justify-center items-center text-bunker-400 animate-fade-in'>
      <nav className='gap-y-4 rounded-md py-4 static hidden md:flex flex-row items-center sm:divide-x sm:divide-bunker-400 sm:divide-dashed sm:py-0  '>
        {allData?.tabs?.map((item, index) => (
          <TabItem
            key={item.href}
            href={item.href}
            label={item.label}
            className={clsx('animate-slide-in-top', {
              'animate-delay-200': index === 0,
              'animate-delay-300': index === 1,
              'animate-delay-400': index === 2,
              'animate-delay-500': index === 3,
            })}
          />
        ))}
      </nav>
      {/* TODO: dark mode and language mode buttons */}
      <div className='flex flex-row items-center justify-end gap-4 md:hidden pt-4 w-full'>
        <LanguageDropdown className='animate-fade-in-down' />
        <ThemeModeDropdown className='animate-fade-in-down' />
        <BurgerDropdown className='animate-fade-in-down' />
      </div>
    </header>
  )
}

export default NavBar
