import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.05, rootMargin: '200px 0px 0px 0px' }
    )

    if (ref.current) {
      // Force check immédiat si déjà visible au chargement
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        ref.current.querySelectorAll('.reveal').forEach(el => {
          el.classList.add('visible')
        })
      }
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}