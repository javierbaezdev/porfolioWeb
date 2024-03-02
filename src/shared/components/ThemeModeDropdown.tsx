import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useOpen } from '@/shared/hooks'
import { THEME_MODE_DICT } from '@/shared/data/es/themeMode'
import { useAppStore } from '@/store'
import { RefObject, useEffect, useRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ThemeModeDropdown = ({ className, ...rest }: Props) => {
  const { isOpen, onToggle, onClose } = useOpen()
  const { themeMode, onChangeThemeMode, language } = useAppStore(
    (store) => store
  )
  const refDropdown: RefObject<HTMLDivElement> = useRef(null)

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
          {
            THEME_MODE_DICT[language].find((item) => item.key === themeMode)
              ?.icon
          }
        </button>
        {/* Dropdown */}
        {isOpen && (
          <div
            ref={refDropdown}
            className={twMerge(
              clsx(
                'fixed top-14 right-2 w-auto bg-bunker-900 text-bunker-300 rounded-md',
                className
              )
            )}
            {...rest}
          >
            <ul
              className='py-2 font-medium flex flex-col gap-4'
              role='none'
            >
              {THEME_MODE_DICT[language].map(({ icon, key, label }) => (
                <li key={key}>
                  <div
                    className='flex flex-row gap-2 px-2 cursor-pointer'
                    onClick={() => {
                      onChangeThemeMode(key)
                      onClose()
                    }}
                  >
                    {icon}
                    {label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThemeModeDropdown
