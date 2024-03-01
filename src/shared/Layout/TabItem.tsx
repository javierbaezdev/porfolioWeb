import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  label: string
}
const TabItem = ({ href, label, className, ...rest }: Props) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash)
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
          'text-biscay-300': currentPath === href,
        })
      )}
      {...rest}
    >
      {label}
    </a>
  )
}

export default TabItem
