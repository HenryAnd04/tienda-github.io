import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/logo.png'

const NavBar = ({handleTheme}) => {
    const [toggleLinks, setToggleLinks] = useState(true)
    const [icon, setIcon] = useState(true)

    function handleNavbar(){
        setToggleLinks(!toggleLinks)
        setIcon(!icon)
    }


  return (
    <header className='header'>
        
        <div className='navbar'>
            <Link to='./'><h1> <img src={logo} alt="logo" /> </h1></Link>

            <nav className='navbar__nav'>
                <Link to='/about'><h2><i className="bi bi-person"></i></h2></Link>
            </nav>

            <h1 className='navbar__icon-menu' onClick={() => handleNavbar()}>
                {icon ? <i className="bi bi-list" ></i> : <i className="bi bi-x-square"></i>}
            </h1>
        </div>

        <div className='navbar__links'>
            {toggleLinks ? '' 
            : 
            <div className='navbar__links-mobile'><Link to='/'>Inicio</Link> <Link to='/about'>Login</Link></div>
            }
        </div>
        
        

    </header>
  )
}

export default NavBar