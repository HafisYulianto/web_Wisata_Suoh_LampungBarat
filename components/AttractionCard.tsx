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

export default function AttractionCard({ a }: { a: Attraction }){
  const maps = a.lat && a.lon
    ? `https://www.google.com/maps/search/?api=1&query=${a.lat},${a.lon}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' Suoh')}`
  return (
    <article className="card" id={a.id}>
      <span className="chip">{a.category}{a.featured ? ' · Unggulan' : ''}</span>
      <div className="h-40 rounded-xl overflow-hidden mb-3 relative">
        <Image
          src={a.img}
          alt={a.name}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold">
        <Link href={`/attractions/${a.id}`} className="hover:underline">{a.name}</Link>
      </h3>
      <p className="text-sm opacity-80 mt-1">{a.desc}</p>
      <div className="flex items-center gap-3 mt-3 text-sm opacity-80">
        <a className="btn btn-ghost h-9" href={maps} target="_blank" rel="noopener">Lihat di Maps</a>
        {a.tags?.length ? <span>· {a.tags.map(t=>`#${t}`).join(' ')}</span> : null}
      </div>
    </article>
  )
}
