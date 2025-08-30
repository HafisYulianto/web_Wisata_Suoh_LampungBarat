'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200 dark:border-white/10 dark:bg-navy-900/70 dark:supports-[backdrop-filter]:bg-navy-900/40">
      <div className="container flex items-center gap-3 py-3">
        <Link href="#" className="flex items-center gap-2 font-bold">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12c0-4.97 4.03-9 9-9 1.86 0 3.59.56 5.03 1.51L12 12l5.49 7.49A8.95 8.95 0 0 1 12 21C7.03 21 3 16.97 3 12Z" stroke="currentColor" strokeWidth="1.6"/></svg>
          <span>Suoh Explore</span>
        </Link>
        <nav className="ml-auto hidden sm:flex gap-4" aria-label="Utama">
          <a href="#jelajah" className="hover:opacity-80">Jelajah</a>
          <a href="#akses" className="hover:opacity-80">Akses</a>
          <a href="#izin" className="hover:opacity-80">Izin</a>
          <a href="#faq" className="hover:opacity-80">FAQ</a>
          <a href="#kontak" className="hover:opacity-80">Kontak</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
