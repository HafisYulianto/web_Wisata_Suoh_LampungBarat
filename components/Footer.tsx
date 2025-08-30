export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* Brand & meta */}
        <div>
          <div className="footer-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 12c0-4.97 4.03-9 9-9 1.86 0 3.59.56 5.03 1.51L12 12l5.49 7.49A8.95 8.95 0 0 1 12 21C7.03 21 3 16.97 3 12Z"
                stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            <span>Suoh Explore</span>
          </div>
          <p className="footer-meta">© {year} — Dibuat untuk promosi pariwisata berkelanjutan.</p>
        </div>

        {/* Nav & back to top */}
        <div className="flex items-center gap-3">
          <nav aria-label="Footer" className="footer-nav">
            <a href="#jelajah" className="hover:underline underline-offset-4">Jelajah</a>
            <a href="#akses" className="hover:underline underline-offset-4">Akses</a>
            <a href="#izin" className="hover:underline underline-offset-4">Izin</a>
            <a href="#faq" className="hover:underline underline-offset-4">FAQ</a>
            <a href="#kontak" className="hover:underline underline-offset-4">Kontak</a>
          </nav>
          <a href="#" className="backtop" aria-label="Kembali ke atas">↑</a>
        </div>
      </div>
    </footer>
  )
}
