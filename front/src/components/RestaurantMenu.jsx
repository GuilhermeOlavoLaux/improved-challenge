import { Fragment, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header'
import MenuCard from './MenuCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import GreyBackground from '../assets/images/GreyBackground.png'

export default function RestaurantMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    const restaurant = location.state?.restaurant

    function verifyRestaurantState() {
        if (restaurant === undefined) {
            navigate('/')
        }
    }

    useEffect(() => {
        verifyRestaurantState()
    }, [])

    function renderMenuCards() {
        const menuCards = restaurant.menuItems.map((menuItem, index) => {
            return <MenuCard key={index} menuItem={menuItem} />
        })
        return menuCards
    }

    return (
        <Fragment>
            {
                restaurant &&
                <Fragment>
                    <div className="restaurant-menu">
                        <img src={GreyBackground} alt="grey background" className="grey-background" />

                        <div className="mobile-add-button">
                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                size="3x"
                                color='#f3aa00'
                                onClick={() => navigate('/new-dish', { state: { restaurant: restaurant } })}
                            ></FontAwesomeIcon>
                        </div>

                        <div className='restaurant-menu-container'>
                            <Header backButtonFlag={true} />
                            <div className='restaurant-menu-content'>
                                <div className='restaurant-info'>
                                    <h1>{restaurant.name}</h1>
                                    <p>{restaurant.menuItems.length} pratos</p>
                                </div>

                                <div className="desktop-add-button">
                                    <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        size='2x'
                                        color='#f3aa00'
                                        onClick={() => navigate('/new-dish', { state: { restaurant: restaurant } })}
                                    ></FontAwesomeIcon>
                                </div>
                            </div>

                            {renderMenuCards()}

                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}