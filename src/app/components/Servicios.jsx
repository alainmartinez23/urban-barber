import React from 'react'

export default function Servicios() {
  return (
    <>
    {/* <!-- Servicios --> */}
    <section className="services-hero">
        <video
            className="services-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
        >
            <source src="/barber.webm" type="video/webm" />
            Tu navegador no soporta el vídeo.
        </video>
        <div className="services-hero__overlay"></div>
        <div className="services-hero__content">
            <h1 className="services-hero__title">SERVICIOS</h1>
            <p className="services-hero__subtitle">Tu estilo empieza aquí.</p>
            <a href="#servicios" className="services-hero__btn">Ver cortes</a>
        </div>
    </section>


    {/* <!-- Listado --> */}
    <section className="services-list" id="servicios">
        <div className="services-list__contenedor">
            <div className="services-list__bloque">
                <h2 className="services-list__titulo">CORTE</h2>
                <ul className="services-list__items">
                    <li className="services-list__item">
                        <span className="services-list__nombre">Fade urbano</span>
                        <span className="services-list__precio">15€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Corte clásico</span>
                        <span className="services-list__precio">12€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Diseño freestyle</span>
                        <span className="services-list__precio">18€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Corte niño</span>
                        <span className="services-list__precio">10€</span>
                    </li>
                </ul>
            </div>

            <div className="services-list__bloque">
                <h2 className="services-list__titulo">BARBA</h2>
                <ul className="services-list__items">
                    <li className="services-list__item">
                        <span className="services-list__nombre">Arreglo de barba</span>
                        <span className="services-list__precio">10€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Afeitado a navaja + toalla caliente</span>
                        <span className="services-list__precio">14€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Diseño de barba</span>
                        <span className="services-list__precio">12€</span>
                    </li>
                </ul>
            </div>

            <div className="services-list__bloque">
                <h2 className="services-list__titulo">CORTE + BARBA</h2>
                <ul className="services-list__items">
                    <li className="services-list__item">
                        <span className="services-list__nombre">Combo clásico</span>
                        <span className="services-list__precio">20€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Fade + barba + toalla</span>
                        <span className="services-list__precio">25€</span>
                    </li>
                </ul>
            </div>

            <div className="services-list__bloque">
                <h2 className="services-list__titulo">GLOW UP</h2>
                <ul className="services-list__items">
                    <li className="services-list__item">
                        <span className="services-list__nombre">Tinte fantasía</span>
                        <span className="services-list__precio">desde 20€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Decoloración</span>
                        <span className="services-list__precio">30€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Limpieza facial express</span>
                        <span className="services-list__precio">15€</span>
                    </li>
                    <li className="services-list__item">
                        <span className="services-list__nombre">Diseño de cejas</span>
                        <span className="services-list__precio">7€</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    {/* <!-- CTA --> */}
    <section className="services-cta">
        <div className="services-cta__contenedor">
            <h2 className="services-cta__titulo">¿Listo para el cambio?</h2>
            <p className="services-cta__texto">Reserva tu cita y sal con el flow que te mereces.</p>
            <a href="/reservar" className="services-cta__boton">Reservar ahora</a>
        </div>
    </section>
    </>
  )
}
