import { Fragment } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import GreyBackground from '../assets/images/GreyBackground.png'
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../api/Api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'



export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([])
    const navigate = useNavigate()

    async function getRestaurants() {
        const { data } = await api.get("/restaurants")

        setRestaurants(data.restaurntsList)
    }

    useEffect(() => {
        getRestaurants()
    }, [])



    function renderRestaurantsCards() {
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
                <div className="add-button-mobile">
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        size="3x"
                        color='#f3aa00'
                        onClick={() => navigate('/new-restaurant')}
                    ></FontAwesomeIcon>
                </div>
                <div className="restaurants-container">
                    <Header />
                    <div className="locals-container">

                        <div className="locals">
                            <h1>Lugares</h1>
                            <p>{restaurants.length} lugares cadastrados</p>
                        </div>

                        <div className="add-button-desktop">

                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                size="3x"
                                color='#f3aa00'
                                onClick={() => navigate('/new-restaurant')}
                            ></FontAwesomeIcon>

                        </div>
                    </div>
                    {renderRestaurantsCards()}
                </div>
            </div>
        </Fragment >
    )
}