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
import ReservaExitosa from '../Objetos/Usuario/ReservaExitosa/ReservaExitosa';
import ConfPremium from '../Objetos/Usuario/ConfPremium/ConfPremium';
import ConfiSuite from '../Objetos/Usuario/ConfiSuite/ConfiSuite';
import PagosPremium from '../Objetos/Pagos/PagosPremium/PagosPremium';
import PagosStandard from '../Objetos/Pagos/PagosStandard/PagosStandard';
import ExitoPremium from '../Objetos/Login/ExitoPremium/ExitoPremium';
import CrearCuentaPremium from '../Objetos/Login/CrearCuentaPremium/CrearCuentaPremium';
import CrearCuentaStandard from '../Objetos/Login/CrearCuentaStandard/CrearCuentaStandard';
import IniciarSeccionStandard from '../Objetos/Login/IniciarSeccionStandard/IniciarSeccionStandard';
import ExitoStandard from '../Objetos/Login/ExitoStandar/ExitoStandard';
import IniciarSeccionPremium from '../Objetos/Login/IniciarSeccionPremium/IniciarSeccionPremium';

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
          <Route path="/confirmacionDeReservaHabitacionStandard" element={<ConfiStandard /
          >} />
          <Route path="/confirmacionDeReservaHabitacionPremium" element={<ConfPremium /
          >} />
          <Route path="/confirmacionDeReservaHabitacionSuite" element={<ConfiSuite /
          >} />
          <Route path="/misReservas" element={<ReservasUsuario />} />
          <Route path="/misReservas/Miguel-Quintero" element={<Conreserva />} />
          
          <Route path="/loginIciarSeccion" element={<IniciarSeccion />} />
          <Route path="/loginIciarSeccion/standard" element={<IniciarSeccionStandard />} />
          <Route path="/loginIciarSeccion/premium" element={<IniciarSeccionPremium />} />
          <Route path="/crearCuenta" element={<CrearCuenta />} />
          <Route path="/crearCuenta/Premium" element={<CrearCuentaPremium />} />
          <Route path="/crearCuenta/Standard" element={<CrearCuentaStandard />} />
          <Route path="/HootelMifife/CuentCreaExistosamente" element={<CuentCreaExistosamente />} />
          <Route path="/HootelMifife/CuentCreaExistosamente/ExitoPremium" element={<ExitoPremium />} />
          <Route path="/HootelMifife/CuentCreaExistosamente/ExitoStandard" element={<ExitoStandard />} />
          <Route path="/HotelMifife/zona/pagos" element={<Pagos />} />
          <Route path="/HotelMifife/zona/pagos/Premium" element={<PagosPremium />} />
          <Route path="/HotelMifife/zona/pagos/Standard" element={<PagosStandard />} />
          <Route path="/HotelMifife/TuReserva_esTodo_unExito" element={<ReservaExitosa />} />
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
