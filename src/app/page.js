import Image from "next/image";
import Hero from "./components/Hero";
import Reto from "./components/Reto";
import Testimonios from "./components/Testimonios";
import CTAinicio from "./components/CTAinicio";
import ServiciosPrincipal from "./components/ServiciosPrincipal";

export const metadata = {
  title: 'Bad Bros Barber | Los mejores cortes',
  description: 'Barbería urbana en Barcelona para los que no siguen modas, las imponen. Reserva tu cita.',
};

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ServiciosPrincipal></ServiciosPrincipal>
      <Reto></Reto>
      <Testimonios></Testimonios>
      <CTAinicio></CTAinicio>
    </div>
  );
}
