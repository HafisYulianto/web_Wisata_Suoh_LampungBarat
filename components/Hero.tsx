import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative" role="banner" aria-label="Hero">
      {/* Gambar latar */}
      <div className="h-[48svh] sm:h-[56svh] relative overflow-hidden">
        <Image
          src="/hero.png"                 // pastikan file hi-res di /public/hero.jpg
          alt="Lanskap danau dan savana di Suoh"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        {/* Overlay gradien: lebih ringan di mobile, lebih kuat di desktop */}
        <div className="absolute inset-0 bg-gradient-to-b
                        from-navy-900/30 via-navy-900/15 to-navy-900/40
                        sm:from-navy-900/60 sm:via-navy-900/30 sm:to-navy-900/70" />
      </div>

      {/* Konten hero */}
      <div className="absolute inset-0 grid place-content-center text-center">
        <div className="container px-4">
          <span className="hero-eyebrow">Explore Suoh</span>

          <h1 className="hero-title mt-3">
            Suoh: Danau, Geotermal, Savana
          </h1>

          <div className="hero-accent" />

          <p className="hero-subtitle mt-3">
            Destinasi alam unik di Lampung Barat yang memadukan gugusan danau dan kawasan panas bumi di tepian TNBBS.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            <a className="btn btn-primary" href="#jelajah" aria-label="Jelajah Destinasi">Jelajah Destinasi</a>
            <a className="btn btn-ghost" href="#izin" aria-label="Cek Izin">Cek Izin</a>
            <a className="btn btn-accent" href="#kontak" aria-label="Hubungi Kami">Hubungi Kami</a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#jelajah" className="scroll-indicator">Gulir</a>
    </section>
  )
}
