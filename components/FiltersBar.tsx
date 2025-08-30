'use client'
type Props = {
  q: string
  category: string
  sort: string
  onChange: (v: { q?: string; category?: string; sort?: string }) => void
}

export default function FiltersBar({ q, category, sort, onChange }: Props){
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input
        className="h-10 px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-800/50"
        placeholder="Cari: danau, geotermal, savana…"
        value={q}
        onChange={e=>onChange({q: e.target.value})}
      />
      <select
        className="h-10 px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-800/50"
        value={category}
        onChange={e=>onChange({category: e.target.value})}
        aria-label="Filter kategori"
      >
        <option value="all">Semua Kategori</option>
        <option value="Danau">Danau</option>
        <option value="Geotermal">Geotermal</option>
        <option value="Savana">Savana</option>
      </select>
      <select
        className="h-10 px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-800/50"
        value={sort}
        onChange={e=>onChange({sort: e.target.value})}
        aria-label="Urutkan"
      >
        <option value="name-asc">A–Z</option>
        <option value="name-desc">Z–A</option>
        <option value="featured">Unggulan</option>
      </select>
    </div>
  )
}
