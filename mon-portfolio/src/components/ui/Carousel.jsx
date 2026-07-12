import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Carousel.css'

export default function Carousel({ items, renderCard }) {
  const [current, setCurrent] = useState(0)
  const [trackHeight, setTrackHeight] = useState(0)
  const touchStartX = useRef(null)
  const containerRef = useRef(null)
  const slideRefs = useRef([])

  const prev = useCallback(() => setCurrent(c => (c - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setCurrent(c => (c + 1) % items.length), [items.length])

  // Mesure la hauteur max de toutes les slides
  useEffect(() => {
    if (slideRefs.current.length === 0) return

    const updateHeight = () => {
      // Rend toutes les slides visibles temporairement pour mesurer
      slideRefs.current.forEach(el => {
        if (el) {
          el.style.visibility = 'hidden'
          el.style.opacity = '0'
          el.style.transform = 'none'
          el.style.scale = '1'
          el.style.display = 'block'
        }
      })

      // Mesure
      const maxHeight = Math.max(
        ...slideRefs.current.map(el => el?.offsetHeight ?? 0)
      )

      // Remet les styles
      slideRefs.current.forEach(el => {
        if (el) {
          el.style.visibility = ''
          el.style.opacity = ''
          el.style.transform = ''
          el.style.scale = ''
          el.style.display = ''
        }
      })

      if (maxHeight > 0) setTrackHeight(maxHeight)
    }

    // Observer chaque slide
    const observer = new ResizeObserver(updateHeight)
    slideRefs.current.forEach(el => { if (el) observer.observe(el) })
    updateHeight()

    return () => observer.disconnect()
  }, [items])

  // Swipe tactile
  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  // Molette
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onWheel = e => {
      e.preventDefault()
      e.deltaY > 0 ? next() : prev()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [next, prev])

  const getPos = i => {
    const total = items.length
    const diff = (i - current + total) % total
    if (diff === 0) return 'center'
    if (diff === 1 || diff === -(total - 1)) return 'right'
    if (diff === total - 1 || diff === -1) return 'left'
    return 'hidden'
  }

  return (
    <div className="carousel" ref={containerRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Précédent">
        <ChevronLeft size={24} />
      </button>

      <div
        className="carousel__track"
        style={{ height: trackHeight > 0 ? `${trackHeight}px` : 'auto' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={el => slideRefs.current[i] = el}
            className={`carousel__slide carousel__slide--${getPos(i)}`}
          >
            {renderCard(item, getPos(i) === 'center')}
          </div>
        ))}
      </div>

      <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Suivant">
        <ChevronRight size={24} />
      </button>

      <div className="carousel__dots">
        {items.map((_, i) => (
          <button key={i}
            className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}