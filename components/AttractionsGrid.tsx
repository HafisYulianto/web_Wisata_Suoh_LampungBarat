'use client'
import { useMemo, useState } from 'react'
import AttractionCard, { type Attraction } from './AttractionCard'
import FiltersBar from './FiltersBar'
import data from '@/lib/data/attractions'
import Reveal from '@/components/Reveal'
import QuickView from '@/components/QuickView'

function normalize(s: string){ return (s||'').toLowerCase() }

export default function AttractionsGrid(){
  const [q, setQ] = useState('')
  const [category, setCategory] = useState<'all'|'Danau'|'Geotermal'|'Savana'>('all')
  const [sort, setSort] = useState<'name-asc'|'name-desc'|'featured'>('name-asc')
  const [active, setActive] = useState<Attraction | null>(null)

  const list = useMemo(()=>{
    let out = data.slice()
    if(q){ const qq = normalize(q); out = out.filter(a => normalize(a.name + ' ' + a.desc + ' ' + (a.tags||[]).join(' ')).includes(qq)) }
    if(category !== 'all'){ out = out.filter(a => a.category === category) }
    switch(sort){
      case 'name-asc': out.sort((a,b)=>a.name.localeCompare(b.name)); break
      case 'name-desc': out.sort((a,b)=>b.name.localeCompare(a.name)); break
      case 'featured': out.sort((a,b)=> (Number(b.featured)-Number(a.featured)) || a.name.localeCompare(b.name)); break
    }
    return out
  }, [q, category, sort])

  return (
    <section id="jelajah" className="section">
      <Reveal>
        <header className="section-head">
          <h2 className="section-title">Jelajah Destinasi</h2>
          <p className="section-subtitle">Telusuri danau, geotermal, dan padang savana. Gunakan pencarian atau filter kategori.</p>
          <div className="section-accent" />
        </header>
      </Reveal>

      <Reveal><FiltersBar
        q={q} category={category} sort={sort}
        onChange={(v)=>{
          if('q' in v) setQ(v.q||'')
          if('category' in v) setCategory(v.category as any)
          if('sort' in v) setSort(v.sort as any)
        }}
      /></Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {list.length ? list.map((a, i) => (
          <Reveal key={a.id} delay={i * 70}>
            <AttractionCard a={a} onPreview={setActive} />
          </Reveal>
        )) : (
          <Reveal><p className="opacity-70">Tidak ada hasil. Ubah kata kunci atau filter.</p></Reveal>
        )}
      </div>

      {active ? <QuickView a={active} onClose={()=>setActive(null)} /> : null}
    </section>
  )
}
