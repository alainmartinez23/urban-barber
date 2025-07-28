import Image from 'next/image'
import React from 'react'
import ReservarContent from '../components/Reservar';

export const metadata = {
  title: 'Reservar Cita | Bad Bros Barber',
  description: 'Reserva online tu cita en Bad Bros y asegura tu transformación con los mejores barberos del barrio.',
};

export default function Reservar() {

  return (
    <>
        <ReservarContent></ReservarContent>
    </>
  )
}
