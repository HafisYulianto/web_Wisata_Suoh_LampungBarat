import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative" role="banner" aria-label="Hero">
      <div className="h-[48svh] sm:h-[56svh] relative overflow-hidden">
        <Image src="/hero.jpg" alt="Lanskap danau dan savana di Suoh" fill priority className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900/70" />
      </div>
      <div className="absolute inset-0 grid place-content-center text-center text-white">
        <div className="container">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-navy-900 text-sm font-medium">
            Explore Suoh
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold mt-3">Suoh: Danau, Geotermal, Savana</h1>
          <p className="mt-3 max-w-2xl mx-auto opacity-90">
            Destinasi alam unik di Lampung Barat yang memadukan gugusan danau dan kawasan panas bumi.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <a className="btn btn-primary" href="#jelajah">Jelajah Destinasi</a>
            <a className="btn btn-ghost" href="#izin">Cek Izin</a>
            <a className="btn btn-accent" href="#kontak">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </section>
  )
}
