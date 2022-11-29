import NavBar from './Components/NavBar/NavBar'
import Billing from './Components/Billing/Billing'
import MapHotels from './Components/MapHotels/MapHotels';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import { Routes, Route } from 'react-router-dom'
import RestaurantMenu from './Components/Menu/RestaurantMenu';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      {/* <Billing/> */}
      <Route path='/' element={<MapHotels/>} />
      <Route path='/home' element={<MapHotels/>} />
      <Route path='/hotels' element={<HotelDetails/>} />
      <Route path='/menu' element={<RestaurantMenu/>} />
      </Routes>
    </div>
  );
}

export default App;
