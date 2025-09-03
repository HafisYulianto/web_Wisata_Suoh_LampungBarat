'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Attraction } from './AttractionCard'

type Props = {
  a: Attraction
  onClose: () => void
}

export default function QuickView({ a, onClose }: Props){
  const panelRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Fokus & animasi masuk
  useEffect(() => {
    setMounted(true)
    panelRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if(e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const maps = a.lat && a.lon
    ? `https://www.google.com/maps/search/?api=1&query=${a.lat},${a.lon}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' Suoh')}`

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-labelledby="qv-title">
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`absolute left-1/2 top-1/2 w-[min(92vw,680px)] max-h-[80vh] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl outline-none transition-transform duration-200 dark:border-white/10 dark:bg-navy-900
                    ${mounted ? 'scale-100' : 'scale-95'}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <Image src={a.img} alt={a.name} fill className="object-cover" sizes="90vw" />
          <span className="badge-glass absolute left-2 top-2">{a.category}</span>
          {a.featured ? (
            <span className="absolute right-2 top-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-navy-900 text-xs font-semibold shadow-soft">
              ★ Unggulan
            </span>
          ) : null}
        </div>

        <div className="p-3">
          <h2 id="qv-title" className="text-xl font-semibold">{a.name}</h2>
          <p className="opacity-80 mt-1">{a.desc}</p>
          {a.tags?.length ? <p className="mt-2 text-sm opacity-70">Tag: {a.tags.map(t=>`#${t}`).join(' ')}</p> : null}

          <div className="mt-4 flex flex-wrap gap-2">
            <a className="btn btn-ghost h-9" href={maps} target="_blank" rel="noopener">Buka di Maps</a>
            <Link className="btn btn-primary h-9" href={`/attractions/${a.id}`}>Lihat Detail</Link>
            <button className="btn btn-ghost h-9 ml-auto" onClick={onClose} aria-label="Tutup">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  )
}
