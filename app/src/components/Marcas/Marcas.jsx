import React from 'react'
import './Marcas.css'
/* import img1 from '../../assets/marcas/1.png'
import img2 from '../../assets/marcas/2.png'
import img3 from '../../assets/marcas/3.png'
import img4 from '../../assets/marcas/4.png' */


const Marcas = ({img1, img2,img3,img4}) => {
  return (
    <div className='moda'>
        <h2>Nuestras Marcas</h2>
        <div className='moda-imagenes'>
            <img src={img1} alt="marca1"/>
            <img src={img2} alt="marca2"/>
            <img src={img3} alt="marca3"/>
            <img src={img4} alt="marca4"/>
        </div>
    </div>
  )
}

export default Marcas