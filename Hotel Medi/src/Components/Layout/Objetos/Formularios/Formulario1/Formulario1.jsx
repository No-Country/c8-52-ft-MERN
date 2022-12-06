import React from 'react'
import Cards from '../../Cards/Cards';
import "./Formulario1.css"

const Formulario1 = () => {
  return (
    <div>
      <Cards />
      <div className="contenedorfoor">
    <form action="formulario">
      
      <label className="labell" for="">Fecha ingreso al hotel</label>
      <input type="date" name="" id="" />
      
      <label className="labell" for="">Fecha salida del hotel</label>
      <input type="date" name="" id="" />

      <section>
        <span className="contiene">
          <label for="">Adultos</label>
          
          <select className="m1" name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          
        </span>

        <span>
          <label for="">Niños</label>
          
          <select  className="m1" name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </span>

        <span>
          <label for="">Mascotas</label>
          
          <select className="m1" name="" id="">  
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

        </span>




      </section>
      <input className="enviar" type="submit" value="Buscar" />
    </form>
  </div>
      
    </div>
  )
}

export default Formulario1;
