'use client'
import { useEffect, useState } from 'react'

export default function MobileCTA(){
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // tampil setelah lewat hero ~150px
      setVisible(window.scrollY > 150)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  const waNumber = '6281234567890' // TODO: ganti ke nomor WA kamu (format internasional, tanpa +)
  const waText = encodeURIComponent('Halo, saya tertarik kerja sama terkait wisata Suoh.')
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <div className="cta-bar" role="region" aria-label="Aksi cepat">
      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-grid">
            <a href="#jelajah" className="cta-btn" aria-label="Lompat ke Jelajah">
              <span>🧭</span><span>Jelajah</span>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Suoh%2C+Lampung+Barat"
              target="_blank" rel="noopener"
              className="cta-btn" aria-label="Buka Google Maps"
            >
              <span>🗺️</span><span>Maps</span>
            </a>
            <a href={waLink} target="_blank" rel="noopener" className="cta-btn" aria-label="Chat WhatsApp">
              <span>💬</span><span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
