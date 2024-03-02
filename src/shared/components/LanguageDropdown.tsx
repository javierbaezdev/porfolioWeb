import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Chile, Us } from '@/shared/icons'
import { useOpen } from '@/shared/hooks'
import { useAppStore } from '@/store'
import { LANGUAGE_DICT } from '@/shared/constants'
import { Language } from '@/shared/types/language'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const LanguageDropdown = ({ className, ...rest }: Props) => {
  const { isOpen, onToggle, onClose } = useOpen()
  const { onChangeLanguage, language } = useAppStore((store) => store)

  const DICT: Record<Language, JSX.Element> = {
    ES: <Chile />,
  }

  return (
    <div className=''>
      <div className='flex items-center'>
        <button
          className='bg-transparent'
          onClick={onToggle}
        >
          {DICT[language]}
        </button>
        {/* Dropdown */}
        {isOpen && (
          <div
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
              <li>
                <div
                  className='flex flex-row gap-2 px-2 cursor-pointer'
                  onClick={() => {
                    /* onChangeLanguage(LANGUAGE_DICT.ES) */
                    onClose()
                  }}
                >
                  <Us
                    width='20'
                    height='20'
                  />
                  English (US)
                </div>
              </li>
              <li>
                <div
                  className='flex flex-row gap-2 px-2 cursor-pointer'
                  onClick={() => {
                    onChangeLanguage(LANGUAGE_DICT.ES)
                    onClose()
                  }}
                >
                  <Chile
                    width='20'
                    height='20'
                  />
                  Español (CL)
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageDropdown
