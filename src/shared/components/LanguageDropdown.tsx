import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useAllData, useOpen } from '@/shared/hooks'
import { useAppStore } from '@/store'
import { RefObject, useEffect, useRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const LanguageDropdown = ({ className, ...rest }: Props) => {
  const { isOpen, onToggle, onClose } = useOpen()
  const { allData } = useAllData()
  const { onChangeLanguage, language } = useAppStore((store) => store)

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
          {allData.languageOptions.find((item) => item.key === language)?.icon}
        </button>
        {/* Dropdown */}
        {isOpen && (
          <div
            ref={refDropdown}
            className={twMerge(
              clsx(
                'fixed w-auto bg-rock-300 text-rock-800 dark:bg-bunker-900 dark:text-bunker-300 rounded-md',
                className
              )
            )}
            {...rest}
          >
            <ul
              className='py-2 font-medium flex flex-col gap-4'
              role='none'
            >
              {allData.languageOptions.map(({ key, label, icon }) => (
                <li key={key}>
                  <div
                    className='flex flex-row gap-2 px-2 cursor-pointer'
                    onClick={() => {
                      onChangeLanguage(key)
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

export default LanguageDropdown
