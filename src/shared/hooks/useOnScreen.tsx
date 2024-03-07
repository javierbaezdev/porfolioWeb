import { useState, useEffect, useRef } from 'react'

interface IntersectionOptions {
  rootMargin?: string
}

const useOnScreen = ({ rootMargin = '0px' }: IntersectionOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!hasIntersected && entry.isIntersecting) {
          setIsIntersecting(true)
          setHasIntersected(true)
          observer.unobserve(element) // Detener la observación después de la primera intersección
        }
      },
      { rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref.current, rootMargin, hasIntersected])

  return { ref, isIntersecting, hasIntersected }
}

export default useOnScreen
