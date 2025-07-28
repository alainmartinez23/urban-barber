'use client';

import { useEffect, useRef, useState } from 'react';

export default function MapaContacto() {
  const contenedorRef = useRef();
  const [mostrarMapa, setMostrarMapa] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMostrarMapa(true);
      },
      { rootMargin: '200px' }
    );

    if (contenedorRef.current) observer.observe(contenedorRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={contenedorRef} className="contacto__mapa">
      {mostrarMapa ? (
        <iframe
          title="Mapa ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.2743870671445!2d-74.00986873026861!3d40.70593433983608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1752919301999!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="mapa-cargando">Cargando mapa...</div>
      )}
    </div>
  );
}