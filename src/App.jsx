import { Context } from './data/Context'
import Home from './pages/Home'
import About from './pages/About'
import products from './data/products.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Context.Provider value={products}>
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
