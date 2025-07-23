import React from 'react'

export const Reservar = () => {
  return (
    <>
        <main className="reservas">
            <div className="reservas__contenedor">
                <section className="reservas__intro">
                    <h1 className="reservas__titulo">Reserva tu cita</h1>
                    <p className="reservas__info">Nuestro horario habitual es:.</p>
                    <p className="reservas__info"><strong>Lunes a viernes, de 10:00 a 14:00 y de 16:00 a 20:30.</strong></p>
                    <p className="reservas__info"><strong>Sábados, de 10:00 a 14:00</strong>.</p>
                </section>

                <section className="reservas__formulario">
                    <form className="formulario">
                        <div className="formulario__grupo">
                            <label for="nombre" className="formulario__label">Nombre</label>
                            <input type="text" id="nombre" name="nombre" className="formulario__input" required></input>
                        </div>

                        <div className="formulario__grupo">
                            <label for="email" className="formulario__label">Email</label>
                            <input type="email" id="email" name="email" className="formulario__input" required></input>
                        </div>

                        <div className="formulario__grupo">
                            <label for="fecha" className="formulario__label">Fecha</label>
                            <input type="date" id="fecha" name="fecha" className="formulario__input" required></input>
                        </div>

                        <div className="formulario__grupo">
                            <label for="hora" className="formulario__label">Hora</label>
                            <input type="time" id="hora" name="hora" className="formulario__input" required></input>
                        </div>

                        <button type="submit" className="formulario__boton">Reservar</button>
                    </form>
                </section>
            </div>
        </main>
    </>
  )
}
