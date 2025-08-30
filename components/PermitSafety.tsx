export default function PermitSafety(){
  return (
    <section id="izin" className="py-14 border-t border-gray-200 dark:border-white/10">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">Izin & Keselamatan</h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <article className="card">
          <h3 className="text-lg font-semibold">Izin Kunjungan</h3>
          <p className="opacity-80 mt-1">Beberapa titik berada dalam kawasan konservasi. Untuk aktivitas komersial/rombongan/khusus (shooting, event, riset), siapkan proposal singkat dan hubungi pengelola.</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Lokasi & tanggal kunjungan</li>
            <li>Jumlah peserta & aktivitas</li>
            <li>Kontak penanggung jawab</li>
            <li>Komitmen konservasi (tanpa sampah, tanpa api)</li>
          </ul>
        </article>
        <article className="card">
          <h3 className="text-lg font-semibold">Keselamatan</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Patuhi pagar pembatas di area geotermal (uap & lubang panas).</li>
            <li>Gunakan alas kaki tertutup; bawa air minum, topi, sunblock.</li>
            <li>Hindari sumber api di savana, terutama musim kemarau.</li>
            <li>Ikuti arahan petugas/guide lokal.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
