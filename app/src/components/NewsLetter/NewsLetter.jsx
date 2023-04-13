import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h2>SUSCRIBETE A NUESTRO NEWSLETTER</h2>
        <p>Se el primero en enterarte de nuestras promociones.</p>
        <div className='newsLetter-input'>
            <input type="text" placeholder='Direccion de correo electronico'/>
            <button>Suscribir</button>
        </div>
    </div>
  )
}

export default NewsLetter