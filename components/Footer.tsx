export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 dark:border-white/10">
      <div className="container py-6 flex flex-wrap items-center gap-3 justify-between">
        <p>© {year} Suoh Explore — dibuat dengan ❤ untuk promosi pariwisata berkelanjutan.</p>
        <a href="#" className="btn btn-ghost h-9">↑ Kembali ke atas</a>
      </div>
    </footer>
  )
}
