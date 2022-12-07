import React from 'react'
import "./ReservasUsuario.css"

const ReservasUsuario = () => {
  return (
    <div>
      <div className='contienreservgene'>
      <h2 id='sinreserva'>AUN NO TIENES RESERVAS</h2>
        <div className='subcontain'>
        <div id='main-container'>
          
        <table>
              <thead>
              <tr>
                <th>HABITACION</th><th>ESTADO</th><th>FECHA</th><th>ADULTOS</th><th>NIÑOS</th><th>MASCOTAS</th><th>PRECIO</th>
                </tr>
              </thead>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
          </table>
          
        </div>
          
        </div>

      </div>
    </div>
  )
}

export default ReservasUsuario;
