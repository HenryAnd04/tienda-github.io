import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About  from './pages/About'
import NavBar from './components/NavBar/NavBar';
import MisionVision from './pages/MisionVision';
import Historia from './pages/Historia';
import Tiendas from './pages/Tiendas';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/misionVision" element={<MisionVision />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/tiendas" element={<Tiendas />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
