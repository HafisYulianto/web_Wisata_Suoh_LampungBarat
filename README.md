# Suoh Explore — Next.js + Tailwind

Elegan & profesional dengan palet biru navy, putih, dan aksen kuning.

## 🚀 Jalankan secara lokal
```bash
pnpm i   # atau: npm i / yarn
pnpm dev # atau: npm run dev
```
Buka http://localhost:3000

## 🧱 Struktur
```
app/
  page.tsx           # halaman utama
  layout.tsx         # layout root
components/
  *.tsx              # komponen UI (Navbar, Hero, Grid, dst.)
lib/data/
  attractions.ts     # data destinasi
public/
  *.jpg, favicon.svg # aset publik
postcss.config.js
 tailwind.config.ts
 tsconfig.json
 next.config.mjs
```

## 🎨 Kustomisasi
- Ubah warna di `tailwind.config.ts` (variabel `navy` & `accent`).
- Ganti gambar di folder `public/`.
- Edit data destinasi di `lib/data/attractions.ts`.
- Sambungkan formulir di `ContactForm.tsx` ke Formspree/Apps Script/backend.

## 🧭 Deploy
Siap ke Vercel: `pnpm build` lalu hubungkan repo ke Vercel. Pengaturan default Next.js sudah cocok.
