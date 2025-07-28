import Link from 'next/link'
import React from 'react'


export default function CTAinicio() {
  return (
    <section className="cta-final">
        <div className="cta-final__contenedor">
            <p className="cta-final__texto">Reserva tu corte y únete a la familia BAD BROS. Nada más que decir.</p>
            <Link href='/reservar' className="cta-final__boton">Reservar Ahora</Link>
        </div>
    </section>
  )
}