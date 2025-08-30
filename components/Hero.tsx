import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative" role="banner" aria-label="Hero">
      <div className="h-[48svh] sm:h-[56svh] relative overflow-hidden">
        <Image src="/hero.png" alt="Lanskap danau dan savana di Suoh" fill priority className="object-cover"/>
      </div>
      <div className="absolute inset-0 grid place-content-center text-center text-white drop-shadow-lg">
        <div className="container">
          <h1 className="text-3xl sm:text-5xl font-bold">Suoh: Danau, Geotermal, Savana</h1>
          <p className="mt-3 max-w-2xl mx-auto">Destinasi alam unik di Lampung Barat yang memadukan gugusan danau dan kawasan panas bumi di tepian Taman Nasional Bukit Barisan Selatan.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a className="btn btn-primary" href="#jelajah">Jelajah Destinasi</a>
            <a className="btn btn-accent" href="#izin">Cek Izin</a>
            <a className="btn btn-primary" href="#kontak">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </section>
  )
}
