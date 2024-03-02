import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { MenuDeep, X } from '@/shared/icons'
import { useOpen } from '@/shared/hooks'
import TabItem from './TabItem'
import { RefObject, useEffect, useRef } from 'react'
import { TABS } from '@/shared/data/es/tabs'
import { useAppStore } from '@/store'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const BurgerDropdown = ({ className, ...rest }: Props) => {
  const { isOpen, onToggle, onClose } = useOpen()
  const refDropdown: RefObject<HTMLDivElement> = useRef(null)
  const language = useAppStore((store) => store.language)

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (!refDropdown.current?.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return (
    <div className=''>
      <div className='flex items-center'>
        <button
          className='bg-transparent'
          onClick={onToggle}
        >
          {!isOpen ? (
            <MenuDeep
              width='30'
              height='30'
            />
          ) : (
            <X
              width='30'
              height='30'
            />
          )}
        </button>
        {/* Dropdown */}
        {isOpen && (
          <div
            ref={refDropdown}
            className={twMerge(
              clsx(
                'fixed top-14 w-full right-0 bg-bunker-900 text-bunker-300 rounded-md',
                className
              )
            )}
            {...rest}
          >
            <ul
              className='py-2 font-medium flex flex-col gap-4 justify-center items-center'
              role='none'
            >
              {isOpen &&
                TABS[language].map((item) => (
                  <li key={item.href}>
                    <TabItem
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      onClick={onClose}
                    />
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default BurgerDropdown
