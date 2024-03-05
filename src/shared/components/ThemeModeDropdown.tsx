import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useAllData, useOpen } from '@/shared/hooks'
import { useAppStore } from '@/store'
import { RefObject, useEffect, useRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ThemeModeDropdown = ({ className, ...rest }: Props) => {
  const { isOpen, onToggle, onClose } = useOpen()
  const { allData } = useAllData()
  const { themeMode, onChangeThemeMode } = useAppStore((store) => store)
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
          className='bg-transparent hover:scale-110'
          onClick={onToggle}
        >
          {
            allData.themeModeOptions.find((item) => item.key === themeMode)
              ?.icon
          }
        </button>
        {/* Dropdown */}
        {isOpen && (
          <div
            ref={refDropdown}
            className={twMerge(
              clsx(
                'fixed w-auto bg-bunker-900 text-bunker-300 rounded-md z-50',
                className
              )
            )}
            {...rest}
          >
            <ul
              className='py-2 font-medium flex flex-col gap-4'
              role='none'
            >
              {allData.themeModeOptions.map(({ icon, key, label }) => (
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
