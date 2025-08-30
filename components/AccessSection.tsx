export default function AccessSection(){
  return (
    <section id="akses" className="py-14 border-t border-gray-200 dark:border-white/10">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">Akses & Rute</h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <article className="card">
          <h3 className="text-lg font-semibold">Dari Bandar Lampung</h3>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Rute umum via Gedongtataan → Kota Agung → arah TNBBS.</li>
            <li>Alternatif via Liwa / Sekincau (arah Lampung Barat).</li>
            <li>Beberapa segmen jalan berbatu—disarankan kendaraan ground-clearance tinggi.</li>
          </ol>
          <a className="btn btn-ghost h-9 mt-3" href="https://www.google.com/maps/dir/?api=1&destination=Suoh%2C+Lampung+Barat" target="_blank" rel="noopener">Buka Google Maps</a>
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
