import React from 'react'
import './about.css'


const About = () => {
  return (
      <form className='form'>
          <h2>Ingresar</h2>
            <label htmlFor="">Correo electronico</label>
            <input type="text" />
            <label htmlFor="">Contrasena</label>
            <input type="text" />
            <p>¿Olvidó su contraseña?</p>
            <button>Ingresar</button>
            <p>Crear cuenta</p>
      </form>
  )
}

export default About