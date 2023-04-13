import React, {useState} from 'react';
import './Hero.css'
import slide from '../../assets/slide';

const Hero = () => {
    const [index, setIndex] = useState(0)


  const selectImg = (e) =>{
    setIndex(e)
  }
  return (
    <div className='hero'>
        <img src={slide[index].img} alt="slider" />
        <div className='iconos-paraImg'>
            <i className="bi bi-circle" id={0} onClick={(e) => selectImg(e.target.id)}></i>
            <i className="bi bi-circle" id={1} onClick={(e) => selectImg(e.target.id)}></i>
            <i className="bi bi-circle" id={2} onClick={(e) => selectImg(e.target.id)}></i>
        </div>
    </div>
  )
}

export default Hero