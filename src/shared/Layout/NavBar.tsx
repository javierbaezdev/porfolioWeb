import TabItem from './TabItem'
import { clsx } from 'clsx'
import { LanguageDropdown, ThemeModeDropdown } from '@/shared/components'
import BurgerDropdown from './BurgerDropdown'
import { useEffect, useState } from 'react'
import { useAllData } from '../hooks'
import { CircleChevronUp } from '../icons'
import { useAppStore } from '@/store'

const NavBar = () => {
  const { allData } = useAllData()
  const onChangeSectionHash = useAppStore((store) => store.onChangeSectionHash)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
    history.replaceState(null, '', window.location.origin)
    onChangeSectionHash('')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      if (window.scrollY <= 0) {
        history.replaceState(null, '', window.location.origin)
        onChangeSectionHash('')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className='hidden md:sticky top-2 md:flex flex-col md:justify-center items-center text-bunker-400 animate-fade-in z-[9999]'>
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
              className='hidden md:flex items-center px-2 bg-transparent animate-fade-in'
              onClick={() => scrollToTop()}
            >
              <CircleChevronUp />
            </button>
          )}
        </nav>
      </header>
      <div className='sticky top-0 flex flex-row items-center justify-end gap-4 md:hidden py-2 px-4 w-full bg-old-lace-50 dark:bg-bunker-950 z-[9999] min-h-10 '>
        <LanguageDropdown className='animate-fade-in-down top-14 right-2' />
        <ThemeModeDropdown className='animate-fade-in-down top-14 right-2' />
        <BurgerDropdown className='animate-fade-in-down' />
      </div>
    </>
  )
}

export default NavBar
