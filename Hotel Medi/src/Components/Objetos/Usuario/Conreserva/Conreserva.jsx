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
                <th>HABITACIÓN</th><th>ESTADO</th><th>FECHA</th><th>ADULTOS</th><th>NIÑOS</th><th>MASCOTAS</th><th>PRECIO</th>
                </tr>
              </thead>

              <tr>
                <td>Estandard</td><td>Reservado</td><td>desde 09/12/2022 <br /> hasta  19/12/2022</td><td>2</td><td>0</td><td>Perro</td><td>242.000</td>
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

export default Conreserva;
