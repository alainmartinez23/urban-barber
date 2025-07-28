"use client"

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function Testimonios() {

  const gridRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray('.testimonios__card')

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.9,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        }
      )
    })
  }, [])


  return (
    <section className="testimonios" ref={gridRef}>
        <h2 className="testimonios__titulo">Lo que dicen los clientes</h2>
        <div className="testimonios__grid">
            <div className="testimonios__card">
                <p className="testimonios__texto">“El mejor fade que me han hecho en la vida. Calidad brutal y ambiente top.”</p>
                <span className="testimonios__autor">– Javi “El Kapo”</span>
                <span className="testimonios__tag">Flow verificado</span>
            </div>
            <div className="testimonios__card">
                <p className="testimonios__texto">“Me tocó el reto random… salí con corte nuevo y premio. Tremendo flow.”</p>
                <span className="testimonios__autor">– Dani B.</span>
                <span className="testimonios__tag">Flow verificado</span>
            </div>
            <div className="testimonios__card">
                <p className="testimonios__texto">“Sitio brutal. Rapidez, estilo y vibra callejera de verdad, me encanta.”</p>
                <span className="testimonios__autor">– Laura M.</span>
                <span className="testimonios__tag">Flow verificado</span>
            </div>
        </div>
    </section>
  )
}
