import React from 'react'
import { info } from '../helpers/infoPagina'
import './Historia.css'

const Historia = () => {
  return (
        <div className='historia'>
        <h2> {info[3]} </h2>
        <p> {info[4]} </p>
        <p> {info[5]} </p>
        <p> {info[6]} </p>
        </div>
  )
}

export default Historia