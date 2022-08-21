import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
