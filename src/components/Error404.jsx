import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <section class="error404">
        <div class="error404__content">
            <h1 class="error404__code">404</h1>
            <h2 class="error404__message">Página no encontrada</h2>
            <p class="error404__text">
            Has llegado a un callejón sin salida, pero puedes volver a la página de inicio y reservar
            </p>
            <Link to='/' class="error404__button">Volver al inicio</Link>
        </div>
    </section>
  )
}
