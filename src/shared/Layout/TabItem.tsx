import { useEffect, useState } from 'react'

interface Props {
  href: string
  label: string
}
const TabItem = ({ href, label }: Props) => {
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
      className={`px-4 py-4 sm:py-0 sm:hover:underline ${
        currentPath === href && 'text-biscay-300'
      } `}
    >
      {label}
    </a>
  )
}

export default TabItem
