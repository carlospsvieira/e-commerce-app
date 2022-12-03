import { Context } from './data/Context'
import Home from './pages/Home'
import products from './data/products.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Context.Provider value={products}>
      <Home />
    </Context.Provider>
  )
}

export default App
