const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');


router.get('/restaurants', RestaurantController.getRestaurants);

router.post('/restaurants', RestaurantController.postRestaurant);

router.put('/restaurants', RestaurantController.updateRestaurant);





module.exports = router;