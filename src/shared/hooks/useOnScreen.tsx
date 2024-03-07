import { useAppStore } from '@/store'
import { useState, useEffect, useRef } from 'react'

interface IntersectionOptions {
  rootMargin?: string
  sectionId?: string
}

const useOnScreen = ({
  rootMargin = '0px',
  sectionId,
}: IntersectionOptions = {}) => {
  const onChangeSectionHash = useAppStore((store) => store.onChangeSectionHash)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
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
  }, [ref.current, rootMargin])

  useEffect(() => {
    if (isIntersecting) {
      onChangeSectionHash(`#${sectionId}`)
      if (sectionId) {
        window.location.hash = sectionId
      }
    }
  }, [isIntersecting])

  return { ref, isIntersecting }
}

export default useOnScreen
