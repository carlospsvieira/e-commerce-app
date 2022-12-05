import { Context } from './data/Context'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  return (
    <Context.Provider value={{ cart: [cart, setCart] }}
    >
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Context.Provider>
  )
}

export default App
