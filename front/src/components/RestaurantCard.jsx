import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import PlusIcon from '../assets/images/PlusIcon.png'
export default function RestaurantCard({ restaurant }) {
    const navigate = useNavigate();

    return (
        <Fragment>
            <div className="restaurant-card">
                <div className="restaurant-card-container" onClick={() => navigate('/restaurant-menu', { state: { restaurant: restaurant } })}>
                    <h5>{restaurant.name}</h5>
                    <p>{restaurant.menuItems.length} pratos</p>
                </div>

                <img src={PlusIcon} alt="plus-icon" onClick={() => navigate('/new-dish', { state: { restaurant: restaurant } })} />
            </div>
        </Fragment>
    )
}