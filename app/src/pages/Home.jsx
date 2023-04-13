import React from 'react'
import './home.css'
import Hero from '../components/Hero/Hero'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import SectionModa from '../components/SectionModa/SectionModa'
import Marcas from '../components/Marcas/Marcas'
import imagenes from '../assets/secciones/index'
import imagenesMarcas from '../assets/marcas'
import Zoom from 'react-reveal';

const Home = () => {

  return (
    <div className='home'>
      <Zoom>
      <Hero/>
      <NewsLetter/>
      <SectionModa 
      img1={imagenes[0]} 
      img2={imagenes[1]} 
      img3={imagenes[2]}
      />
      <Marcas 
      img1={imagenesMarcas[0]} 
      img2={imagenesMarcas[1]} 
      img3={imagenesMarcas[2]} 
      img4={imagenesMarcas[3]}
      />
      <SectionModa 
      img1={imagenes[3]} 
      img2={imagenes[4]} 
      img3={imagenes[5]}
      />
      <Marcas 
      img1={imagenesMarcas[4]} 
      img2={imagenesMarcas[5]} 
      img3={imagenesMarcas[6]} 
      img4={imagenesMarcas[7]}
      />
      <SectionModa 
      img1={imagenes[6]} 
      img2={imagenes[7]} 
      img3={imagenes[8]}
      />
      </Zoom>
    </div>
  )
}

export default Home