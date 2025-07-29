export const dynamic = 'force-static';

import Image from 'next/image';
import MapaContacto from './MapaContacto';

export default function Contacto() {
  return (
    <>
      {/* Fondo desenfocado */}
      <div className="contacto__fondo">
        <Image
          src="/basket.webp"
          alt="Fondo"
          className="fondo"
          placeholder='blur'
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
            <form className="formulario">
              <p className="formulario__titulo">¿Cuál es tu duda?</p>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Mensaje" required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>
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
