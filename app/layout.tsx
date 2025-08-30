import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wisata Suoh Lampung Barat — Danau, Geotermal, Savana',
  description: 'Jelajah Suoh: gugusan danau (Lebar, Asam, Minyak, Belibis), geotermal Keramikan & Nirwana, serta savana di kaki TNBBS. Info akses, tips, dan kontak.',
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <a href="#main" className="skip-link">Lewati ke konten</a>
        {/* ⬇️ padding-top agar konten tidak ketutup header fixed */}
        <div className="pt-16 sm:pt-[70px]">
          {children}
        </div>
      </body>
    </html>
  )
}
