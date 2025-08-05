import { NextResponse } from 'next/server'

export async function POST(request) {
  const { nombre, email, fecha, hora } = await request.json()

  // Crear reserva en Cal.com
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

  return NextResponse.json({ mensaje: 'Reserva creada correctamente en Cal.com' })
}