"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ServiciosPrincipal() {

    const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
            scrub: false,
            markers: false
          },
        }
      )
    })
  }, [])

  return (
    // <!-- Servicios -->
    <section className="servicios">
        <h2 className="servicios__titulo-seccion">SERVICIOS</h2>
        {/* <!-- Bloque 1 --> */}
        <div className="servicios__fila">
            <div className="servicios__info">
            <div className="servicios__card" ref={(el) => (cardsRef.current[0] = el)}>
                <img src="/fade.jpg" alt="Corte Fade" className="servicios__foto"></img>
                <div className="servicios__texto">
                <h3 className="servicios__titulo">Corte "Fade Real"</h3>
                <p className="servicios__descripcion">
                    El degradado que parte cuellos. Contornos afilados y actitud callejera.
                </p>
                </div>
            </div>
            </div>
            <div className="servicios__imagen" style={{ backgroundImage: "url('/challenger.jpg')" }}></div>
        </div>

        {/* <!-- Bloque 2 --> */}
        <div className="servicios__fila servicios__fila--invertido">
            <div className="servicios__info">
            <div className="servicios__card" ref={(el) => (cardsRef.current[1] = el)}>
                <img src="/barba.jpg" alt="Corte Fade" className="servicios__foto"></img>
                <div className="servicios__texto">
                <h3 className="servicios__titulo">Barba "Boss Level"</h3>
                <p className="servicios__descripcion">
                    Recorte, forma y definición para dominar como un OG. Tu cara, tu marca.
                </p>
                </div>
            </div>
            </div>
            <div className="servicios__imagen" style={{ backgroundImage: "url('/concierto.jpg')" }}></div>
        </div>

        {/* <!-- Bloque 3 --> */}
        <div className="servicios__fila">
            <div className="servicios__info">
            <div className="servicios__card" ref={(el) => (cardsRef.current[2] = el)}>
                <img src="/glowup.jpg" alt="Corte Fade" className="servicios__foto"></img>
                <div className="servicios__texto">
                <h3 className="servicios__titulo">Cambio 360 "Glow Up Total"</h3>
                <p className="servicios__descripcion">
                    Corte, barba y detallado. Sales listo para el videoclip.
                </p>
                </div>
            </div>
            </div>
            <div className="servicios__imagen" style={{backgroundImage: "url('/hustle2.jpg')", backgroundPosition: "center bottom"}}></div>
        </div>

        <div className="servicios__boton-container">
            <Link href='/servicios' className="servicios__boton">Ver todo</Link>
        </div>
    </section>
  )
}
