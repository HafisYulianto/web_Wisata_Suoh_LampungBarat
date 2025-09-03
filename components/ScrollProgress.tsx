'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress({ height = 3 }: { height?: number }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const calc = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const val = total > 0
        ? Math.min(1, Math.max(0, window.scrollY / total))
        : 0
      setProgress(val)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(calc)
    }
    calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden className="absolute left-0 right-0 bottom-0" style={{ height }}>
      <div
        className="h-full bg-accent origin-left"
        style={{ transform: `scaleX(${progress})`, transition: 'transform 120ms linear' }}
      />
    </div>
  )
}
