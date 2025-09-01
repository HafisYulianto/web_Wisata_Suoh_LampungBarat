export default function AccessSection(){
  return (
    <section id="akses" className="section">
      <header className="section-head">
        <h2 className="section-title">Akses & Rute</h2>
        <p className="section-subtitle">Rute utama, alternatif, dan catatan kondisi jalan.</p>
        <div className="section-accent" />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <article className="card">
          <h3 className="text-lg font-semibold">Dari Bandar Lampung</h3>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Rute umum via Gedongtataan → Kota Agung → arah TNBBS.</li>
            <li>Alternatif via Liwa / Sekincau (arah Lampung Barat).</li>
            <li>Beberapa segmen jalan berbatu—disarankan kendaraan ground-clearance tinggi.</li>
          </ol>
          <a className="btn btn-ghost h-9 mt-3" href="https://maps.app.goo.gl/bQPT6nwCjGyW1tRM7" target="_blank" rel="noopener">
            Buka Google Maps
          </a>
        </article>

        <article className="card">
          <h3 className="text-lg font-semibold">Musim & Kondisi</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li><strong>Musim kemarau</strong>: savana lebih kering (hati-hati risiko kebakaran).</li>
            <li><strong>Musim hujan</strong>: akses bisa licin; cek prakiraan cuaca dulu.</li>
            <li>Selalu cek informasi terbaru dari pengelola setempat.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
