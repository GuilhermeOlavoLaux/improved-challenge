import { Routes, Route } from 'react-router-dom'
import NewDish from '../components/NewDish'
import RestaurantMenu from '../components/RestaurantMenu'
import Restaurants from '../components/Restaurants'


export default function AppRoutes() {

  return (
    <Routes>
      
      <Route path="/" element={<Restaurants />} />

      <Route path="/restaurant-menu" element={<RestaurantMenu />} />

      <Route path="/new-dish" element={<NewDish />} />

    </Routes>
  )
}