import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { useAppStore } from '@/store'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  label: string
}
const TabItem = ({ href, label, className, ...rest }: Props) => {
  const { currentSection, onChangeSectionHash } = useAppStore((store) => store)

  useEffect(() => {
    const handleHashChange = () => {
      onChangeSectionHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <a
      href={href}
      className={twMerge(
        clsx('px-4 py-4 sm:py-0 sm:hover:underline', className, {
          'text-carissma-600 dark:text-carissma-300': currentSection === href,
        })
      )}
      {...rest}
    >
      {label}
    </a>
  )
}

export default TabItem
