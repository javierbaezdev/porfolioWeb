import { useState } from 'react'
import { useAllData } from '@/shared/hooks'
import { MenuDeep, X } from '@/shared/icons'
import TabItem from './TabItem'
import { clsx } from 'clsx'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { allData } = useAllData()
  console.log({ allData })
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
      {/* burger menu */}
      <button
        className='block md:hidden ml-auto px-2 pt-2 '
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? <MenuDeep /> : <X />}
      </button>
      {isOpen && (
        <div className='fixed flex flex-col gap-2 items-center md:hidden animate-fade-in-down bg-bunker-900 text-bunker-300 w-full top-12 rounded-md'>
          {allData?.tabs?.map((item, index) => (
            <TabItem
              key={item.href}
              href={item.href}
              label={item.label}
              className={clsx('animate-slide-in-left', {
                'animate-delay-200': index === 0,
                ' animate-delay-300': index === 1,
                ' animate-delay-400': index === 2,
                ' animate-delay-500': index === 3,
              })}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  )
}

export default NavBar
