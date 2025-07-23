import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */

export const Contacto = () => {
  return (
    <>
        {/* <!-- Contacto --> */}
        <section className="seccion-contacto">
            <h2 className="contacto__titulo-seccion">Contáctanos</h2>

            <div className="contacto__fila">
                <div className="contacto__mapa">
                    <iframe
                        title="Mapa ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.2743870671445!2d-74.00986873026861!3d40.70593433983608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1752919301999!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

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

            <footer className="footer-contacto">
                <div className="footer-contacto__columna">
                    <p>Wall Street 77</p>
                    <p>Barcelona</p>
                </div>
                <div className="footer-contacto__columna">
                    <p>Teléfono: +34 666 123 456</p>
                    <p>Lunes–Viernes: 10–14 / 16–20:30<br />Sábado: 10–14</p>
                    <p>Email: contacto@badbros.com</p>
                </div>
                <div className="footer-contacto__redes">
                    <a href="#" onClick={e => e.preventDefault()}><img src="/instagram.png" alt="Instagram" className="icono-red" /></a>
                    <a href="#" onClick={e => e.preventDefault()}><img src="/tik-tok.png" alt="TikTok" className="icono-red" /></a>
                    <a href="#" onClick={e => e.preventDefault()}><img src="/whatsapp.png" alt="WhatsApp" className="icono-red" /></a>
                </div>
            </footer>
        </section>
    </>
  )
}
