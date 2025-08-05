'use client';

export const dynamic = 'force-static';

import Image from 'next/image';
import MapaContacto from './MapaContacto';
import { useState } from 'react';

export default function Contacto() {

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      duda: form.mensaje.value,
    };

    try {
      const res = await fetch('https://n8n-production-fc93.up.railway.app/webhook/516f1c09-4c93-492d-8c89-883dd9432fda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setEnviado(true);
        form.reset();
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión');
    }
  };


  return (
    <>
      {/* Fondo desenfocado */}
      <div className="contacto__fondo">
        <Image
          src="/basket.webp"
          alt="Fondo"
          className="fondo"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
      </div>

      <section className="seccion-contacto">
        <h2 className="contacto__titulo-seccion">Contáctanos</h2>

        <div className="contacto__fila">
          {/* Mapa diferido */}
          <MapaContacto />

          {/* Formulario */}
          <div className="contacto__formulario">
            <form className="formulario" onSubmit={handleSubmit}>
              <p className="formulario__titulo">¿Cuál es tu duda?</p>
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="mensaje" placeholder="Mensaje" required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>
            {enviado && <p className="formulario__confirmacion">Mensaje enviado correctamente</p>}
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-contacto">
          <div className="footer-contacto__columna">
            <p>Wall Street 77</p>
            <p>Barcelona</p>
          </div>
          <div className="footer-contacto__columna">
            <p>Teléfono: +34 666 123 456</p>
            <p>
              Lunes–Viernes: 10–14 / 16–20:30<br />Sábado: 10–14
            </p>
            <p>Email: contacto@badbros.com</p>
          </div>
          <div className="footer-contacto__redes">
            <a href="#"><img src="/instagram.png" alt="Instagram" className="icono-red" /></a>
            <a href="#"><img src="/tik-tok.png" alt="TikTok" className="icono-red" /></a>
            <a href="#"><img src="/whatsapp.png" alt="WhatsApp" className="icono-red" /></a>
          </div>
        </footer>
      </section>
    </>
  );
}
