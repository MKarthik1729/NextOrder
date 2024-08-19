import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './comp/Nav';
import NextOrder from './comp/NextOrder';
import { useState } from 'react';
import Cart from './comp/Cart';

function App() {
  const [cart,setCart] = useState([])
  const AddtoCart = (e)=>{
    if (!cart.includes(e)) {
    setCart([...cart,e]) 
    }
    else{
      alert("already added")
    }
  }
  const RemoveFromCart=(Eid)=>{
    setCart(cart.filter(item => item.id !== Eid));
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Nav} >
            <Route path='' exact element={<NextOrder AddtoCart={AddtoCart} />} />
            <Route path='cart' element={<Cart data={cart} RemoveFromCart={RemoveFromCart} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
