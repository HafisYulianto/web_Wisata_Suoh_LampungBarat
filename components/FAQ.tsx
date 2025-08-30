export default function FAQ(){
  return (
    <section id="faq" className="section">
      <header className="section-head">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Pertanyaan yang sering ditanyakan pengunjung.</p>
        <div className="section-accent" />
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
