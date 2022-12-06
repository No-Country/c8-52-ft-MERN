import React from 'react'
import "./Conreserva.css"

const Conreserva = () => {
  return (
    <div>
      <div className='contienreservgene'>
      <h2 id='sinreserva'>ESTAS SON TUS RESERVAS</h2>
        <div className='subcontain'>
        
        <div id='main-container'>
          
        <table>
              <thead>
              <tr>
                <th>HABITACION</th><th>ESTADO</th><th>FECHA</th><th>ADULTOS</th><th>NIÑOS</th><th>MASCOTAS</th><th>PRECIO</th>
                </tr>
              </thead>

              <tr>
                <td>Estandar</td>Reservado<td>desde 09/12/2022 <br /> hasta 19/12/2022</td>2<td>0</td>Perro<td>$ 222.000</td>
              </tr>    
          </table>
          
        </div>
          
        </div>

      </div>
    </div>
  )
}

export default Conreserva;
