import {useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import Billing from './Components/Billing/Billing'
import MapHotels from './Components/MapHotels/MapHotels';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import { Routes, Route } from 'react-router-dom'
import RestaurantMenu from './Components/Menu/RestaurantMenu';
import Cart from './Components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div>
      <NavBar size={cart.length}/>
      <Routes>
      {/* <Billing/> */}
      <Route path='/' element={<MapHotels/>} />
      <Route path='/home' element={<MapHotels/>} />
      <Route path='/hotels' element={<HotelDetails/>} />
      <Route path='/menu' element={<RestaurantMenu handleClick={handleClick}/>} />
      <Route path= '/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}/>
      </Routes>
    </div>
  );
}

export default App;
