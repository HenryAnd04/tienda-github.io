import React from 'react'
import './Tiendas.css'

const Tiendas = () => {
    const ciudades = ['Tegucigalpa','San Pedro Sula','La Ceiba','Villanueva','Puerto Cortes','Siguatepeque','Comayagua','Choluteca',' Danli','Catacamas','Juticalpa','Tocoa','Roatan'];

  return (
    <div className='tiendas'>
        <h2>Nuestras tiendas</h2>
        {ciudades.map(el =>{
            return <p key={el}> {el} </p>
        })}
    </div>
  )
}

export default Tiendas