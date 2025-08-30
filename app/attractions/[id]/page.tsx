import data from '@/lib/data/attractions'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams(){
  return data.map(d => ({ id: d.id }))
}

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const a = data.find(d => d.id === params.id)
  if (!a) return {}
  const title = `${a.name} — Wisata Suoh`
  const desc = a.desc
  const urlImg = a.img.startsWith('/') ? a.img : `/${a.img}`
  return {
    title, description: desc,
    openGraph: { title, description: desc, images: [urlImg], type: 'article' }
  }
}

export default function Page({ params }: { params: { id: string } }){
  const a = data.find(d => d.id === params.id)
  if (!a) return notFound()
  const maps = a.lat && a.lon
    ? `https://www.google.com/maps/search/?api=1&query=${a.lat},${a.lon}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' Suoh')}`

  return (
    <main className="container py-10">
      <Link href="/" className="link">← Kembali</Link>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="relative h-72 md:h-full rounded-2xl overflow-hidden">
          <Image src={a.img} alt={a.name} fill className="object-cover" />
        </div>
        <article className="card">
          <span className="chip">{a.category}{a.featured ? ' · Unggulan' : ''}</span>
          <h1 className="text-2xl font-bold">{a.name}</h1>
          <p className="opacity-80 mt-2">{a.desc}</p>
          {a.tags?.length ? <p className="mt-2 opacity-70">Tag: {a.tags.map(t=>`#${t}`).join(' ')}</p> : null}
          <div className="mt-4 flex gap-2">
            <a href={maps} target="_blank" rel="noopener" className="btn btn-ghost">Buka di Maps</a>
            <a href="#rute" className="btn btn-accent">Rute & Tips</a>
          </div>
        </article>
      </div>

      <section id="rute" className="mt-8 grid md:grid-cols-2 gap-4">
        <article className="card">
          <h2 className="text-lg font-semibold">Rute Singkat</h2>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Bandar Lampung → Gedongtataan → Kota Agung → arah TNBBS.</li>
            <li>Alternatif: Liwa/Sekincau → Suoh.</li>
          </ol>
        </article>
        <article className="card">
          <h2 className="text-lg font-semibold">Catatan</h2>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Beberapa segmen jalan berbatu; kendaraan GC tinggi disarankan.</li>
            <li>Patuhi pagar pengaman di area geotermal.</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
