import { Routes, Route } from 'react-router-dom'
import NewDish from '../components/NewDish'
import NewRestaurant from '../components/NewRestaurant'
import RestaurantMenu from '../components/RestaurantMenu'
import Restaurants from '../components/Restaurants'


export default function AppRoutes() {

  return (
    <Routes>

      <Route path="/" element={<Restaurants />} />

      <Route path="/restaurant-menu" element={<RestaurantMenu />} />

      <Route path="/new-dish" element={<NewDish />} />


      <Route path="/new-restaurant" element={<NewRestaurant />} />


    </Routes>
  )
}