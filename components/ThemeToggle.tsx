'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(()=>{
    setMounted(true)
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefers = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefers
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  if (!mounted) return <button className="btn btn-ghost" aria-label="Toggle tema">…</button>

  return (
    <button
      className="btn btn-ghost"
      aria-label="Toggle tema"
      onClick={()=>{
        const next = !isDark
        setIsDark(next)
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
      }}
      title="Toggle tema"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
