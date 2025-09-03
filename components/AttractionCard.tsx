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

export default function AttractionCard({
  a,
  onPreview,
}: {
  a: Attraction
  onPreview?: (a: Attraction) => void
}) {
  const maps =
    a.lat && a.lon
      ? `https://www.google.com/maps/search/?api=1&query=${a.lat},${a.lon}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' Suoh')}`

  const titleId = `title-${a.id}`
  const handlePreview = () => onPreview?.(a)

  return (
    // h-full + flex-col supaya semua kartu mengisi tinggi yang sama
    <article className="card card-hover group h-full flex flex-col" id={a.id}>
      {/* FOTO: klik untuk membuka Quick View */}
      <button
        type="button"
        onClick={handlePreview}
        aria-labelledby={titleId}
        className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden mb-3
                   focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-zoom-in"
      >
        <Image
          src={a.img}
          alt={a.name}
          fill
          className="object-cover img-zoom"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="badge-glass absolute left-2 top-2">{a.category}</span>
        {a.featured ? (
          <span className="absolute right-2 top-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-navy-900 text-xs font-semibold shadow-soft">
            ★ Unggulan
          </span>
        ) : null}
        <span className="sr-only">Buka pratinjau {a.name}</span>
      </button>

      {/* Konten teks diberi clamp agar tinggi konsisten */}
      <div className="flex-1 flex flex-col">
        <h3 id={titleId} className="text-lg font-semibold line-clamp-1">
          <Link
            href={`/attractions/${a.id}`}
            className="hover:underline decoration-2 underline-offset-4"
            title={a.name}
          >
            {a.name}
          </Link>
        </h3>

        <p className="text-sm opacity-80 mt-1 line-clamp-2 min-h-[40px]">
          {a.desc}
        </p>

        {/* aksi & tag “menempel” di bawah kartu */}
        <div className="mt-auto pt-3 flex items-center flex-wrap gap-2 text-sm opacity-90">
          <a className="btn btn-ghost h-9" href={maps} target="_blank" rel="noopener">
            Maps
          </a>
          <Link className="btn btn-primary h-9" href={`/attractions/${a.id}`}>
            Detail
          </Link>
          {a.tags?.length ? (
            <span className="ml-1 opacity-70 truncate max-w-[60%]">
              · {a.tags.map((t) => `#${t}`).join(' ')}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  )
}
