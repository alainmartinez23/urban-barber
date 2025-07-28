import Link from 'next/link'
import React from 'react'


export default function Hero() {

  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero__smoke hero__smoke--left">
        <source src="/smoke.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted playsInline className="hero__smoke hero__smoke--right">
        <source src="/smoke.mp4" type="video/mp4" />
      </video>
      <div className="hero__overlay"></div>
      <div className="hero__content">
          <h1 className="hero__title">Es hora de brillar</h1>
          <p className="hero__subtitle">Para los que no siguen modas. Las imponen.</p>
          <Link href='/reservar' className="hero__cta">Reserva tu cita</Link>
      </div>
    </section>
  )
}