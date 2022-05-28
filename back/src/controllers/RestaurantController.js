const Restaurant = require('../model/Restaurant')
const { v4: uuid } = require('uuid');
const res = require('express/lib/response');

module.exports = {
    async getRestaurants(request, response) {
        try {
            const restaurntsList = await Restaurant.find();

            restaurntsList.forEach(restaurant => {
                restaurant.menuItems.forEach(menuItem => {
                    menuItem.price = parseFloat(menuItem.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                })
            })

            
            return response.status(200).json({ restaurntsList })
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },

    async postRestaurant(request, response) {

        const { name, menuItems } = request.body;

        if (!name || !menuItems) {
            return response.status(400).json({ error: 'Missing params.' })
        }

        menuItems.forEach(menuItem => {
            if (!menuItem._id) {
                menuItem._id = uuid()
            }
            if (!menuItem.name || !menuItem.description || !menuItem.price) {
                return response.status(400).json({ error: 'Missing params.' })
            }
            menuItem.price = menuItem.price.toString()
            menuItem.price.replace(",", ".");

        });

        const restaurant = new Restaurant({
            _id: uuid(),
            name: name,
            menuItems: menuItems
        })

        try {
            await restaurant.save();
            return response.status(201).json({ message: 'Restaurant added successfully' })
        } catch (error) {
            return response.status(400).json({ error: error.message })

        }

    },


    async updateRestaurant(request, response) {

        const { _id, menuItems } = request.body;

        if (!_id || !menuItems) {
            return response.status(400).json({ error: 'Missing params.' })
        }

        const restaurant = await Restaurant.findById(_id)

        if (!restaurant) {
            return response.status(400).json({ error: 'Restaurant not found.' })
        } else {
            menuItems.forEach(menuItem => {
                if (!menuItem._id) {
                    menuItem._id = uuid()
                }
                menuItem.price = menuItem.price.replace(",", ".");

            });

            restaurant.menuItems = menuItems
        }

        try {
            await restaurant.save();
            return response.status(201).json({ message: 'Restaurant updated successfully' })
        } catch (error) {
            return response.status(400).json({ error: error.message })

        }
    }
} 