'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Reservar() {
  const [horasDisponibles, setHorasDisponibles] = useState([])
  const [loadingHoras, setLoadingHoras] = useState(false)
  const [formEnviado, setFormEnviado] = useState(false)

  const handleFechaChange = async (e) => {
    const fecha = e.target.value
    if (!fecha) return

    setLoadingHoras(true)

    const start = `${fecha}T00:00:00.000Z`
    const end = `${fecha}T23:59:59.999Z`
    const timeZone = 'Europe/Madrid'
    const eventTypeId = '2868072'

    try {
      const url = `https://api.cal.com/v2/slots?start=${start}&end=${end}&timeZone=${timeZone}&eventTypeId=${eventTypeId}`
      console.log('🟡 URL que se está llamando:', url)

      const res = await fetch(url, {
        headers: {
          'cal-api-version': '2024-09-04',
        },
      })

      const json = await res.json()
      console.log('🟢 Respuesta de Cal.com:', json)

      const slotsPorDia = json.data?.[fecha] || []

      if (slotsPorDia.length === 0) {
        console.warn('⚠️ No hay slots disponibles para esta fecha')
        setHorasDisponibles([])
      } else {
        const horas = slotsPorDia.map(slot => slot.start)
        console.log('🔵 Horas disponibles:', horas)
        setHorasDisponibles(horas)
      }
    } catch (err) {
      console.error('❌ Error al obtener slots de Cal.com:', err)
      setHorasDisponibles([])
    } finally {
      setLoadingHoras(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const datos = {
        nombre: form.nombre.value,
        email: form.email.value,
        fecha: form.fecha.value,
        hora: form.hora.value,
    }

    try {
        const res = await fetch('/api/reservar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
        })

        const json = await res.json()

        if (!res.ok) {
        console.error(json)
        alert(json.error || 'Error al crear la reserva')
        return
        }

        alert('✅ Reserva confirmada. Revisa tu email.')
        setFormEnviado(true)

        form.reset()
        
        setTimeout(() => {
            setFormEnviado(false)
        }, 3000)

        setHorasDisponibles([])
    } catch (err) {
        console.error(err)
        alert('Error inesperado al reservar')
    }
    }


  return (
    <>
      <div className="reservas__fondo">
        <Image
          alt="Fondo de reservas"
          src="/neon.webp"
          fill
          priority
          className="fondo"
        />
      </div>

      <main className="reservas">
        <div className="reservas__contenedor">
          <section className="reservas__intro">
            <h1 className="reservas__titulo">Reserva tu cita</h1>
            <p className="reservas__info">Nuestro horario habitual es:</p>
            <p className="reservas__info"><strong>Lunes a viernes, de 10:00 a 14:00 y de 16:00 a 20:30.</strong></p>
            <p className="reservas__info"><strong>Sábados, de 10:00 a 14:00</strong></p>
          </section>

          <section className="reservas__formulario">

            {formEnviado && (
                <div className="formulario__confirmacion-flotante">
                    ✅ Reserva completada
                </div>
            )}

            <form className="formulario" onSubmit={handleSubmit}>
              <div className="formulario__grupo">
                <label htmlFor="nombre" className="formulario__label">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="formulario__input" required />
              </div>

              <div className="formulario__grupo">
                <label htmlFor="email" className="formulario__label">Email</label>
                <input type="email" id="email" name="email" className="formulario__input" required />
              </div>

              <div className="formulario__grupo">
                <label htmlFor="fecha" className="formulario__label">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  className="formulario__input"
                  required
                  onChange={handleFechaChange}
                />
              </div>

              <div className="formulario__grupo">
                <label htmlFor="hora" className="formulario__label">Hora</label>
                <select
                  id="hora"
                  name="hora"
                  className="formulario__input"
                  required
                  disabled={loadingHoras || horasDisponibles.length === 0}
                >
                  <option value="">
                    {loadingHoras ? 'Cargando horas...' : 'Selecciona una hora'}
                  </option>
                  {horasDisponibles.map((hora, i) => {
                    const horaFormateada = new Date(hora).toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZone: 'Europe/Madrid',
                    })
                    return <option key={i} value={hora}>{horaFormateada}</option>
                  })}
                </select>
              </div>

              <button
                type="submit"
                className="formulario__boton"
                disabled={loadingHoras || horasDisponibles.length === 0}
              >
                Reservar
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}