export default function FAQ(){
  return (
    <section id="faq" className="py-14 border-t border-gray-200 dark:border-white/10">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">FAQ</h2>
      </header>
      <div className="space-y-3">
        <details className="card">
          <summary className="cursor-pointer font-medium">Apakah perlu pemandu?</summary>
          <p className="mt-2 opacity-80">Disarankan, terutama untuk jalur menuju geotermal dan titik pandang di sekitar danau.</p>
        </details>
        <details className="card">
          <summary className="cursor-pointer font-medium">Apakah ada sinyal?</summary>
          <p className="mt-2 opacity-80">Tidak merata. Unduh peta offline dan beri tahu keluarga sebelum berangkat.</p>
        </details>
        <details className="card">
          <summary className="cursor-pointer font-medium">Bisakah membawa anak kecil?</summary>
          <p className="mt-2 opacity-80">Bisa untuk area danau/savana yang aman. Hindari membawa anak ke area uap panas tanpa pengawasan ketat.</p>
        </details>
      </div>
    </section>
  )
}
