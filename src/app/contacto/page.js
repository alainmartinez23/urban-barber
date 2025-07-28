import Image from 'next/image';
import React from 'react';
import ContactoContent from '../components/Contacto';

export const metadata = {
  title: 'Contacto | Bad Bros Barber',
  description: '¿Tienes dudas o quieres colaborar? Escríbenos directamente desde el formulario o visítanos en Wall Street 77, Barcelona.',
};


export default function Contacto() {

  return (
    <>
        <ContactoContent></ContactoContent>
    </>
  )
}
