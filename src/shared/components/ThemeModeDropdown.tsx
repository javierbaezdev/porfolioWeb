import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { DeviceImac, Moon, Sun } from '@/shared/icons'
import { useOpen } from '@/shared/hooks'
import { useAppStore } from '@/store'
import { THEME_MODE_DICT } from '@/shared/constants'
import { ThemeMode } from '@/shared/types/themeMode'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ThemeModeDropdown = ({ className, ...rest }: Props) => {
  const { isOpen, onToggle, onClose } = useOpen()
  const { onChangeThemeMode, themeMode } = useAppStore((store) => store)

  const DICT: Record<ThemeMode, JSX.Element> = {
    DARK: <Moon />,
    LIGHT: <Sun />,
    SYSTEM: <DeviceImac />,
  }

  return (
    <div className=''>
      <div className='flex items-center'>
        <button
          className='bg-transparent'
          onClick={onToggle}
        >
          {DICT[themeMode]}
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
              {Object.values(THEME_MODE_DICT).map((v) => (
                <li>
                  <div
                    key={v}
                    className='flex flex-row gap-2 px-2 cursor-pointer'
                    onClick={() => {
                      onChangeThemeMode(v)
                      onClose()
                    }}
                  >
                    {DICT[v]}
                    {v}
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
