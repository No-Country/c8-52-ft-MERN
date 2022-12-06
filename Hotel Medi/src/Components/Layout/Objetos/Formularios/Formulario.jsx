import React from 'react'
import { Link } from 'react-router-dom';
import "./Formulario.css"

const Formulario = () => {
  return (
    <>
    <div className='contenedorobjetos'>
     
      <div className='containerformulario'>
        <form action="">
          <section>
            <label className="nombrefecha" htmlFor="">Fecha de Ingreso</label>
            <input className="fecha" type="date" /><br />

            <label className="nombrefecha" htmlFor="">Fecha de Salida</label>
            <input className="fecha" type="date" />
          </section>

          
          <section className='sectform'>
            <label htmlFor="" id='labelselect'>Adultos</label><br />
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>

            <label htmlFor="" id='labelselect'>Niños</label><br />
          <select name="" id="">
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>

          <label htmlFor="" id='labelselect'>Mascotas</label><br />
          <select name="" id="">
            <option value="">0</option>
            <option value="">Gato</option>
            <option value="">Perro</option>
            <option value="">Otro</option>
          </select>
          </section>
          <Link to="/tarifas" >
          <input className="fecha send" type="submit" value="Buscar" ></input>
          </Link>
        </form>
      </div>

    </div>
    </>
  )
}

export default Formulario;
