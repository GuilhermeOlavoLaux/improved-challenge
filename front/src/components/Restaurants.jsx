import { Fragment } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import GreyBackground from '../assets/images/GreyBackground.png'
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../api/Api";

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([])


    async function getRestaurants() {
        const { data } = await api.get("/restaurants")

        setRestaurants(data.restaurntsList)
    }

    useEffect(() => {
        getRestaurants()
        refactorMoney()
    }, [])


    function refactorMoney() {
        restaurants.forEach(restaurant => {
            restaurant.menuItems.forEach(menuItem => {
                menuItem.price = menuItem.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            })
        })
    }

    function renderRestaurantsCards() {
        refactorMoney()
        const restaurantCards = restaurants.map((restaurant, index) => {
            return (
                <RestaurantCard key={index} restaurant={restaurant} />
            )
        })
        return restaurantCards
    }

    return (
        <Fragment>
            <div className="restaurants">
                <img src={GreyBackground} alt="grey background" className="grey-background" />
                <div className="restaurants-container">
                    <Header />
                    <div className="locals">
                        <h1>Lugares</h1>
                        <p>{restaurants.length} lugares cadastrados</p>
                    </div>
                    {renderRestaurantsCards()}
                </div>
            </div>
        </Fragment>
    )
}