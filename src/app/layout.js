import './globals.css';
import { Rajdhani } from 'next/font/google';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Bad Bros Barber',
  description: 'Barbería con flow callejero en Barcelona',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/firmar.png" />
        <link rel="preload" as="image" href="/basket.jpg" />
        <link rel="preload" as="image" href="/neon.webp" />
        <link rel="preload" as="video" href="/barber.webm" type="video/webm" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Rajdhani:wght@300;400;600&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
