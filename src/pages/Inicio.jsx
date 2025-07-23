import React from 'react'
import { ServiciosPrincipal } from '../components/ServiciosPrincipal'
import { Reto } from '../components/Reto'
import { Testimonios } from '../components/Testimonios'
import { CTAinicio } from '../components/CTAinicio'
import { Hero } from '../components/Hero'

export const Inicio = () => {
  return (
    <>
        <Hero></Hero>
        <ServiciosPrincipal></ServiciosPrincipal>
        <Reto></Reto>
        <Testimonios></Testimonios>
        <CTAinicio></CTAinicio>
    </>
  )
}
