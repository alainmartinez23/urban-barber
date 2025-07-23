import React from 'react'
import { Link } from 'react-router-dom'

export const CTAinicio = () => {
  return (
    <section className="cta-final">
        <div className="cta-final__contenedor">
            <p className="cta-final__texto">Reserva tu corte y únete a la familia BAD BROS. Nada más que decir.</p>
            <Link to='/reservar' className="cta-final__boton">Reservar Ahora</Link>
        </div>
    </section>
  )
}