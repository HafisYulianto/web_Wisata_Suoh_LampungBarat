import Image from 'next/image'
import Link from 'next/link'

export type Attraction = {
  id: string
  name: string
  category: 'Danau' | 'Geotermal' | 'Savana'
  featured?: boolean
  desc: string
  img: string
  lat?: number
  lon?: number
  tags?: string[]
}

export default function AttractionCard({ a }: { a: Attraction }) {
  const maps = a.lat && a.lon
    ? `https://www.google.com/maps/search/?api=1&query=${a.lat},${a.lon}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' Suoh')}`

  return (
    <article className="card card-hover group" id={a.id}>
      {/* gambar + overlay + badges */}
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-3">
        <Image
          src={a.img}
          alt={a.name}
          fill
          className="object-cover img-zoom"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          priority={false}
        />
        {/* gradient bawah supaya teks terbaca */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
        {/* badge kategori kiri atas */}
        <span className="badge-glass absolute left-2 top-2">{a.category}</span>
        {/* badge unggulan kanan atas */}
        {a.featured ? (
          <span className="absolute right-2 top-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-navy-900 text-xs font-semibold shadow-soft">
            ★ Unggulan
          </span>
        ) : null}
      </div>

      {/* judul link ke halaman detail */}
      <h3 className="text-lg font-semibold">
        <Link href={`/attractions/${a.id}`} className="hover:underline decoration-2 underline-offset-4">
          {a.name}
        </Link>
      </h3>

      {/* deskripsi singkat */}
      <p className="text-sm opacity-80 mt-1">{a.desc}</p>

      {/* aksi & tag */}
      <div className="flex items-center flex-wrap gap-3 mt-3 text-sm opacity-80">
        <a className="btn btn-ghost h-9" href={maps} target="_blank" rel="noopener">
          Lihat di Maps
        </a>
        {a.tags?.length ? <span>· {a.tags.map(t => `#${t}`).join(' ')}</span> : null}
      </div>
    </article>
  )
}
