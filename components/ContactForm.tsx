'use client'
import { useState } from 'react'

export default function ContactForm(){
  const [status, setStatus] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    // Validasi sederhana
    if(!data.name || data.name.trim().length < 2){ setStatus('Nama minimal 2 karakter'); return }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email||'')){ setStatus('Format email tidak valid'); return }
    if(!data.message || data.message.trim().length < 10){ setStatus('Pesan minimal 10 karakter'); return }

    setStatus('Mengirim…')
    try{
      // TODO: ganti ke Formspree/Apps Script/backend produksi
      await new Promise(r=>setTimeout(r, 600))
      setStatus('Terima kasih! Pesan kamu sudah kami terima. Kami akan segera menghubungi.')
      form.reset()
    }catch(err){ setStatus('Maaf, terjadi kesalahan. Coba lagi nanti.') }
  }

  return (
    <section id="kontak" className="py-14 border-t border-gray-200 dark:border-white/10">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">Kontak</h2>
        <p className="opacity-80">Untuk kolaborasi/kerja sama, isi form di bawah. Kamu juga bisa menautkan email resmi pengelola.</p>
      </header>

      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span>Nama</span>
            <input name="name" placeholder="Nama Anda" className="h-10 px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-800/50" />
          </label>
          <label className="grid gap-1">
            <span>Email</span>
            <input name="email" type="email" placeholder="email@contoh.com" className="h-10 px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-800/50" />
          </label>
          <label className="grid gap-1 sm:col-span-2">
            <span>Pesan</span>
            <textarea name="message" rows={5} placeholder="Tulis rencana kerja sama/kebutuhan Anda…" className="px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy-800/50" />
          </label>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary" type="submit">Kirim</button>
          <button className="btn btn-ghost" type="reset" onClick={()=>setStatus('')}>Reset</button>
        </div>
        {status ? <p className="opacity-80">{status}</p> : null}
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <article className="card">
          <h3 className="text-lg font-semibold">Pengelola Kawasan</h3>
          <p>Balai Besar Taman Nasional Bukit Barisan Selatan (BBTNBBS)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Telepon: (0722) 21064</li>
            <li>Email: btnbbs@gmail.com</li>
            <li>Alamat: Jl. Ir. H. Juanda No.19, Kota Agung, Tanggamus</li>
          </ul>
        </article>
        <article className="card">
          <h3 className="text-lg font-semibold">Pariwisata Daerah</h3>
          <p>Dinas Kepemudaan, Olahraga, dan Pariwisata Lampung Barat</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Telepon: (0728) 21248</li>
            <li>Email: pariwisatalampungbarat@gmail.com</li>
            <li>Alamat: Komplek Perkantoran, Way Mengaku, Liwa</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
