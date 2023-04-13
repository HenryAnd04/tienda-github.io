import React from 'react'
import { info } from '../helpers/infoPagina';
import './MisionVision.css'

const MisionVision = () => {
  return (
    <div className='misionVision'>
        <h2> {info[0]} </h2>
        <p> {info[1]} </p>
        <p> {info[2]} </p>
        
    </div>
  )
}

export default MisionVision