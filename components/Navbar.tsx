'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#jelajah', label: 'Jelajah' },
  { href: '#akses',   label: 'Akses'   },
  { href: '#izin',    label: 'Izin'    },
  { href: '#faq',     label: 'FAQ'     },
  { href: '#kontak',  label: 'Kontak'  },
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') setActiveHash(window.location.hash || '')
    const onScroll = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function onClickAnchor(href: string){ setActiveHash(href) }

  return (
    <header
      className={[
        // ⬇️ fixed supaya selalu muncul di atas layar
        'fixed top-0 left-0 right-0 z-50 backdrop-blur',
        'border-b border-gray-200 dark:border-white/10',
        'bg-white/80 dark:bg-navy-900/60 supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-navy-900/40',
        scrolled ? 'shadow-md' : 'shadow-none'
      ].join(' ')}
    >
      <div className="container flex items-center gap-3 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-navy-900 dark:text-white" aria-label="Beranda">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 12c0-4.97 4.03-9 9-9 1.86 0 3.59.56 5.03 1.51L12 12l5.49 7.49A8.95 8.95 0 0 1 12 21C7.03 21 3 16.97 3 12Z"
                  stroke="currentColor" strokeWidth="1.6"/>
          </svg>
          <span>Suoh Explore</span>
        </Link>

        <nav className="ml-auto hidden sm:flex gap-5" aria-label="Utama">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              data-active={String(activeHash === l.href)}
              aria-current={activeHash === l.href ? 'page' : undefined}
              onClick={()=>onClickAnchor(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  )
}
