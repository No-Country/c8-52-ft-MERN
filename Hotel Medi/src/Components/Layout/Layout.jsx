import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import IniciarSeccion from '../Objetos/Login/IniciarSeccion/IniciarSeccion';
import CrearCuenta from '../Objetos/Login/CrearCuenta/CrearCuenta';
import Footer from './Footer/Footer';
import Header from './Header/Header'
import "./Layout.css"
import Main from './Main/Main'
import Standar from '../Objetos/Habitaciones/Standar/Standar';
import Tarifas from '../Objetos/Tarifas/Tarifas';
import Premiun from '../Objetos/Habitaciones/Premium/Premium';
import InfoHabitaciones from '../Objetos/Habitaciones/InfoHabitaciones/InfoHabitaciones';
import Suite from '../Objetos/Habitaciones/Suite/Suite';
import ConfiStandard from '../Objetos/Usuario/ConfStandard/ConfiStandard';
import ReservasUsuario from '../Objetos/Usuario/ReservasUsuario/ReservasUsuario';
import MiCuenta from '../Objetos/Usuario/MiCuenta/MiCuenta';
import Conreserva from '../Objetos/Usuario/Conreserva/Conreserva';
import CuentCreaExistosamente from '../Objetos/Login/CuentCreaExistosamente/CuentCreaExistosamente';
import Pagos from '../Objetos/Pagos/Pagos';

const Layout = () => {
  return (
    <div className='layuot'>

      <BrowserRouter>
      <div className='headera'>
        <Header />
      </div>
      
        <div className='maina'>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/inicio" element={<Main />} />
          <Route path="/informacion/Habitaciones" element={<InfoHabitaciones />} />
          <Route path="/informacion/Habitacion/Standar" element={<Standar />} />
          <Route path="/informacion/Habitacion/Premium" element={<Premiun />} />
          <Route path="/informacion/Habitacion/Suite" element={<Suite />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/confirmacionDeReservaHabitacionStandar" element={<ConfiStandard /
          >} />
          <Route path="/misReservas" element={<ReservasUsuario />} />
          <Route path="/misReservas/Miguel-Quintero" element={<Conreserva />} />
          
          <Route path="/loginIciarSeccion" element={<IniciarSeccion />} />
          <Route path="/crearCuenta" element={<CrearCuenta />} />
          <Route path="/HootelMifife/CuentCreaExistosamente" element={<CuentCreaExistosamente />} />
          <Route path="/HotelMifife/zona/pagos" element={<Pagos />} />
          <Route path="/hotelMidife/MiCuenta/Miguel-Quintero" element={<MiCuenta />} />
          </Routes>
        </div>
        
        <div className='footera'>
          <Footer />         
        </div>

      </BrowserRouter>
    </div>
  )
}

export default Layout
