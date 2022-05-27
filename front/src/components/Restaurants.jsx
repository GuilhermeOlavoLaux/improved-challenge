import { Fragment } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import GreyBackground from '../assets/images/GreyBackground.png'
const mockData = require('../fakeApi/api.json')

export default function Restaurants() {

    function refactorMoney() {
        mockData.forEach(restaurant => {
            restaurant.menuItems.forEach(menuItem => {
                menuItem.price = menuItem.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            })
        })
    }
    function renderRestaurantsCards() {
        refactorMoney()
        const restaurantCards = mockData.map((restaurant, index) => {
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
                        <p>{mockData.length} lugares cadastrados</p>
                    </div>
                    {renderRestaurantsCards()}
                </div>
            </div>
        </Fragment>
    )
}