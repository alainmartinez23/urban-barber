'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuAbierto(false);
  }, [pathname]);

  useEffect(() => {
    const isDesktop = window.innerWidth > 600;
    if (!isDesktop) return;

    const menu = document.querySelector('.header__menu');
    const links = document.querySelectorAll('.header__link');
    const underline = document.querySelector('.underline-indicator');
    const header = document.querySelector('.header');

    if (!menu || !underline || !header || links.length === 0) return;

    const handleEnter = (e) => {
      const rect = e.target.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      underline.style.left = `${rect.left - headerRect.left}px`;
      underline.style.width = `${rect.width}px`;
    };

    const handleLeave = () => {
      underline.style.width = '0';
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleEnter);
      link.addEventListener('mouseleave', handleLeave);
    });

    console.log('initMenu cargado (escritorio)');

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleEnter);
        link.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  const toggleMenu = () => setMenuAbierto(prev => !prev);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">BAD BROS BARBER</div>

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
            <li className="header__item"><Link href='/' className="header__link">Inicio</Link></li>
            <li className="header__item"><Link href='/servicios' className="header__link">Servicios</Link></li>
            <li className="header__item"><Link href='/reservar' className="header__link">Reservar</Link></li>
            <li className="header__item"><Link href='/contacto' className="header__link">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      <div className="underline-indicator"></div>
    </header>
  );
}