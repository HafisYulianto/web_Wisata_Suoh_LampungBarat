'use client'
import { useMemo, useState } from 'react'
import AttractionCard, { type Attraction } from './AttractionCard'
import FiltersBar from './FiltersBar'
import data from '@/lib/data/attractions'

function normalize(s: string){ return (s||'').toLowerCase() }

export default function AttractionsGrid(){
  const [q, setQ] = useState('')
  const [category, setCategory] = useState<'all'|'Danau'|'Geotermal'|'Savana'>('all')
  const [sort, setSort] = useState<'name-asc'|'name-desc'|'featured'>('name-asc')

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
    <section id="jelajah" className="py-14 border-t border-gray-200 dark:border-white/10">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">Jelajah Destinasi</h2>
        <p className="opacity-80">Telusuri danau, geotermal, dan padang savana. Gunakan pencarian atau filter kategori.</p>
      </header>

      <FiltersBar q={q} category={category} sort={sort} onChange={(v)=>{
        if('q' in v) setQ(v.q||'')
        if('category' in v) setCategory(v.category as any)
        if('sort' in v) setSort(v.sort as any)
      }}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.length ? list.map(a => <AttractionCard key={a.id} a={a} />) : (
          <p className="opacity-70">Tidak ada hasil. Ubah kata kunci atau filter.</p>
        )}
      </div>
    </section>
  )
}
