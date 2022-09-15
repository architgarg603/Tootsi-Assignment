import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Homepage from './pages/Homepage/Homepage';
import Thankyou from './pages/Thankyou/Thankyou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
