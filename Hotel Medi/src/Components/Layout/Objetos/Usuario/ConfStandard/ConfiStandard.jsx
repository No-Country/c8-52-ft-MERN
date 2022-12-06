import React from 'react'
import habitacion3_1 from "../../../../assets/images/habitacion3_1.jpg"
import habitacion2_1 from "../../../../assets/images/habitacion2_1.jpg"
import habitacion4 from "../../../../assets/images/habitacion4.jpg"
import "./ConfiStandard.css"
import { Link } from 'react-router-dom'

const ConfiStandard = () => {
  return (
    <div>
      <h2 className='centrar'>CONFIRMACION DE RESERVA</h2>
    <div className='containtarifas'>
      
      <div className='temporada'>
        <h3 className='centrar' id='colore'>¡¡Excelente Elección!! Habitacion Standard</h3>
        <p> Gracias por Preferir al <strong> Hotel Midife</strong>, la reserva se encuentra en proceso de confirmación,
        por favor Verifica que los datos de la habitacion sean los que has seleccionado. Seguidamente Oprimir en realizar pago.
        </p>
      </div>
    </div>
    
    <div className='contienecar'>
    
    <div className='cardprecioss'>
      <h1 id='nota'>Nota:</h1>
      <span>
        <p>
          <i>
          En caso que se haya realizado el pago y desee realizar la cancelación  de la reserva, este proceso debe realizarse minimo con dos dias de anticipación. y el dinero sera retornado, de no ser asi, la habitación seguira en estado de reservado y no habra retorno de dinero.
          </i>
        </p>
        <p>
          <i>
          Si desea dejar la habitación antes del tiempo que ya reservo, el precio seguira siendo el mismo
          </i>

        </p>
        <p>
          <i>si la reserva es con Mascotas, puede transitar libremente con ellas por todas nuestas instalaciones excepto en las siguientes zonas:</i>

          <ul>
            <li>Restaurante y/ó salón de comidas</li>
            <li>Piscinas</li>
          </ul>
        </p>
      </span>
      <span className='precioss'>
      <h4>TAMBIEN</h4>
      <ul>
        <li>
        Cada Habitacion incluye paraqueadero para 1 Carro o dos Motos
        </li>
        <li>
        Contamos con un seguro de vida que hace respaldo a cada persona que se <strong>encuntre</strong> en nuestras instalaciones y cuente con una reserva en el hotel
        </li>
      </ul>
      

      </span>
    </div>

    <div className='cardprecios'>
      <span>
        <h3></h3>
      </span>
      <span className='precioss'>
      <h4>La Reserva en proceso de confirmacion es la siguiente:</h4><br />
      <p>Reserva desde el <strong> 09/12/2022</strong></p>
      <p>Reserva Hasta el <strong> 19/12/2022</strong></p><br />
      <p>Adultos: 2</p>
      <p>Mascotas: Perro</p><br />
      <p>Precio: $ 222.000 ARS </p>


      </span>
      <Link to="/loginIciarSeccion">
      <button className='btnconf' >Confirmar</button>
      </Link>
    </div>
    </div>

    </div> 
  )
}

export default ConfiStandard;
