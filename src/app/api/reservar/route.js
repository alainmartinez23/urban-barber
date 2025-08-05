import { NextResponse } from 'next/server'

export async function POST(request) {
  const { nombre, email, fecha, hora } = await request.json()

  // 1. Crear reserva en Cal.com
  const calRes = await fetch('https://api.cal.com/v2/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'cal-api-version': '2024-08-13'
    },
    body: JSON.stringify({
      eventTypeId: 2868072,
      start: hora,
      attendee: {
        name: nombre,
        email: email,
        timeZone: 'Europe/Madrid',
        language: 'es',
      },
    }),
  })

  if (!calRes.ok) {
    const error = await calRes.text()
    return NextResponse.json({ error: 'Error al reservar en Cal.com', detalle: error }, { status: 500 })
  }

  // 2. Enviar email con Resend
  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Bad Bros <noreply@vaurienlabs.com>',
      to: [email],
      subject: 'Tu cita ha sido confirmada 🧼✂️',
      html: `
        <p>Hola ${nombre},</p>
        <p>Tu cita ha sido confirmada para el día <strong>${new Date(hora).toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</strong>.</p>
        <p>📍 Bad Bros Barber<br>💈 Te esperamos con flow.</p>
      `,
    }),
  })

  if (!emailRes.ok) {
    const error = await emailRes.text()
    return NextResponse.json({ error: 'Reserva creada, pero el email falló', detalle: error }, { status: 500 })
  }

  return NextResponse.json({ mensaje: 'Reserva creada y email enviado con éxito' })
}