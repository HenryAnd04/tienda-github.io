import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-enlaces'>
            <Link to='./historia'>Historia</Link>
            <Link to='./misionVision'>Mision y Vision</Link>
            <Link to='./tiendas'>Nuestras tiendas</Link>
        </div>
        <div className='footer-iconos'>
            <h2><i className="bi bi-facebook"></i></h2>
            <h2><i className="bi bi-twitter"></i></h2>
            <h2><i className="bi bi-instagram"></i></h2>
        </div>
        <p>2023, CARRION</p>
    </div>
  )
}

export default Footer