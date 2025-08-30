import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const body = await req.json().catch(()=>null) as { name?: string; email?: string; message?: string } | null
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok:false, error:'Invalid payload' }, { status: 400 })
  }

  // ====== PILIH BACKEND PENGIRIMAN ======
  // Opsi A: Resend (kirim email). Isi env: RESEND_API_KEY, MAIL_FROM, MAIL_TO
  if (process.env.RESEND_API_KEY && process.env.MAIL_FROM && process.env.MAIL_TO) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: `Suoh Contact — ${body.name}`,
        html: `<p><b>Nama:</b> ${body.name}</p><p><b>Email:</b> ${body.email}</p><p>${body.message}</p>`
      })
    })
    if (!r.ok) return NextResponse.json({ ok:false }, { status: 500 })
    return NextResponse.json({ ok:true })
  }

  // Opsi B: Formspree (proxy ke Formspree). Isi env: FORMSPREE_ENDPOINT
  if (process.env.FORMSPREE_ENDPOINT) {
    const r = await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type':'application/json' },
      body: JSON.stringify(body)
    })
    if (!r.ok) return NextResponse.json({ ok:false }, { status: 500 })
    return NextResponse.json({ ok:true })
  }

  // Fallback kalau env belum diisi:
  return NextResponse.json({ ok:false, error:'No mail backend configured' }, { status: 501 })
}
