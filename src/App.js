import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { Inicio } from './pages/Inicio';
import { Servicios } from './components/Servicios';
import { Reservar } from './components/Reservar';
import { Contacto } from './components/Contacto';
import ScrollToTop from './helpers/ScrollTop';
import { Error404 } from './components/Error404';
import { useEffect } from 'react';
import { initMenu } from './helpers/initMenu.js'

function App() {

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      initMenu()
    }, 100)
  }, [location.pathname])

  const is404 = location.pathname !== '/' &&
              location.pathname !== '/servicios' &&
              location.pathname !== '/reservar' &&
              location.pathname !== '/contacto';

  return (
    <>
      <ScrollToTop></ScrollToTop>
      {!is404 && <Menu />}
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route path='/reservar' element={<Reservar></Reservar>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
    </>
  );
}

export default App;
