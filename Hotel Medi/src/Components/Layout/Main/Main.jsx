import React from 'react'
import "./Main.css"
import ContaintObject from '../../Objetos/ContaintObject/ContaintObject'
import Cards from '../../Objetos/Cards/Cards'

const Main = () => {
  return (

    <div className='maina'>

        <div className='contenedorprincipal'>
          <ContaintObject />
          <Cards />
          
        </div>
    </div>
  )
}

export default Main;
