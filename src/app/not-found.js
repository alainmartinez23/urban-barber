'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import React from 'react';

export default function NotFound() {

    useEffect(() => {
        document.body.setAttribute('data-not-found', 'true');
        return () => document.body.removeAttribute('data-not-found');
    }, []);
  return (
    <section className="error404">
      <div className="error404__content">
        <h1 className="error404__code">404</h1>
        <h2 className="error404__message">Página no encontrada</h2>
        <p className="error404__text">
          Has llegado a un callejón sin salida, pero puedes volver a la página de inicio y reservar.
        </p>
        <Link href="/" className="error404__button">Volver al inicio</Link>
      </div>
    </section>
  );
}