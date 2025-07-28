import React from 'react'

export default function Reto() {
  return (
    // <!-- Reto -->

    <section className="reto">
        <div className="reto__contenedor">
            <h2 className="reto__titulo">¿Te atreves con el reto random?</h2>
            <p className="reto__descripcion">
            Gira la ruleta del destino y acepta el <span className="reto__descripcion-importante">corte aleatorio del día.</span><br></br>
            Si te atreves, entras en el sorteo de premios exclusivos. ¿Estás dentro?
            </p>

            <div className="reto__media">
                <video className="reto__video" autoPlay muted loop playsInline>
                    <source src="/ruleta.mp4" type="video/mp4"></source>
                    Tu navegador no soporta vídeos.
                </video>
            </div>

            <p className="reto__frase">Premios reales. Cortes legendarios. Solo para valientes.</p>
        </div>
    </section>
  )
}
