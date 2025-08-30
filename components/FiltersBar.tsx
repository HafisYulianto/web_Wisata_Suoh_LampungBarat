'use client'

type Props = {
  q: string
  category: string
  sort: string
  onChange: (v: { q?: string; category?: string; sort?: string }) => void
}

const CATEGORIES = ['all', 'Danau', 'Geotermal', 'Savana'] as const
const SORTS = [
  { v: 'name-asc', label: 'A–Z' },
  { v: 'name-desc', label: 'Z–A' },
  { v: 'featured', label: 'Unggulan' },
] as const

export default function FiltersBar({ q, category, sort, onChange }: Props){
  return (
    <div className="flex flex-col gap-3 mb-4">
      {/* Search */}
      <label className="input-icon">
        <span className="icon">🔎</span>
        <input
          className="input w-full"
          placeholder="Cari: danau, geotermal, savana…"
          value={q}
          onChange={e=>onChange({ q: e.target.value })}
          aria-label="Cari destinasi"
        />
      </label>

      {/* Kategori */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm opacity-70">Kategori:</span>
        <div className="segmented" role="tablist" aria-label="Filter kategori">
          {CATEGORIES.map(c => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className="seg-item"
              data-active={String(category === c) as 'true' | 'false'}
              onClick={()=>onChange({ category: c })}
            >
              {c === 'all' ? 'Semua' : c}
            </button>
          ))}
        </div>
      </div>

      {/* Urutkan */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm opacity-70">Urutkan:</span>
        <div className="segmented" role="tablist" aria-label="Urutkan">
          {SORTS.map(s => (
            <button
              key={s.v}
              role="tab"
              aria-selected={sort === s.v}
              className="seg-item"
              data-active={String(sort === s.v) as 'true' | 'false'}
              onClick={()=>onChange({ sort: s.v })}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
