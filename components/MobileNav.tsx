'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function MobileNav(){
  const [open, setOpen] = useState(false)
  useEffect(()=>{ document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <div className="sm:hidden ml-auto">
      <button
        className="btn btn-ghost"
        onClick={()=>setOpen(v=>!v)}
        aria-expanded={open}
        aria-controls="mnav"
        aria-label="Buka menu"
      >☰</button>

      {open && (
        <div id="mnav" className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/30" onClick={()=>setOpen(false)} />
          <nav className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-navy-900 p-5 flex flex-col gap-4">
            <Link href="#jelajah" onClick={()=>setOpen(false)}>Jelajah</Link>
            <Link href="#akses" onClick={()=>setOpen(false)}>Akses</Link>
            <Link href="#izin" onClick={()=>setOpen(false)}>Izin</Link>
            <Link href="#faq" onClick={()=>setOpen(false)}>FAQ</Link>
            <Link href="#kontak" onClick={()=>setOpen(false)}>Kontak</Link>
          </nav>
        </div>
      )}
    </div>
  )
}
