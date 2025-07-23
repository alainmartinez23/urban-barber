import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const location = useLocation()

  // Cierra el menú automáticamente al navegar
  useEffect(() => {
    setMenuAbierto(false)
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuAbierto(prev => !prev)
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">BAD BROS BARBER</div>

        {/* Botón hamburguesa */}
        <button
          className={`header__toggle ${menuAbierto ? 'header__toggle--open' : ''}`}
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          <span className="icono icono--hamburguesa">☰</span>
          <span className="icono icono--cerrar">✖</span>
        </button>

        <nav className="header__nav">
          <ul className={`header__menu ${menuAbierto ? 'header__menu--open' : ''}`}>
            <li className="header__item"><Link to='/' className="header__link">Inicio</Link></li>
            <li className="header__item"><Link to='/servicios' className="header__link">Servicios</Link></li>
            <li className="header__item"><Link to='/reservar' className="header__link">Reservar</Link></li>
            <li className="header__item"><Link to='/contacto' className="header__link">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      <div className="underline-indicator"></div>
    </header>
  )
}