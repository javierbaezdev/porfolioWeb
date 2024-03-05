import TabItem from './TabItem'
import { clsx } from 'clsx'
import { LanguageDropdown, ThemeModeDropdown } from '@/shared/components'
import BurgerDropdown from './BurgerDropdown'
import { useEffect, useState } from 'react'
import { useAllData } from '../hooks'
import { CircleChevronUp } from '../icons'

const NavBar = () => {
  const { allData } = useAllData()
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className=' md:sticky top-2 flex flex-col md:justify-center items-center text-bunker-400 animate-fade-in z-[9999]'>
      <nav
        className={clsx(
          'gap-y-4 rounded-md py-4 static hidden md:flex flex-row items-center sm:divide-x sm:divide-bunker-400 sm:divide-dashed sm:py-0',
          { 'bg-old-lace-200 dark:bg-bunker-900': isScrolled }
        )}
      >
        {allData.tabs.map((item, index) => (
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
        {isScrolled && (
          <button
            className='hidden md:flex items-center px-2 bg-transparent'
            onClick={() => scrollToTop()}
          >
            <CircleChevronUp />
          </button>
        )}
      </nav>

      <div className='flex flex-row items-center justify-end gap-4 md:hidden pt-4 w-full'>
        <LanguageDropdown className='animate-fade-in-down top-14 right-2 ' />
        <ThemeModeDropdown className='animate-fade-in-down top-14 right-2' />
        <BurgerDropdown className='animate-fade-in-down' />
      </div>
    </header>
  )
}

export default NavBar
