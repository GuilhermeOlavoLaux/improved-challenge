const express = require('express')
const conectToDatabase = require('./dataBase')
const cors = require('cors')
const routes = require('./routes/RestaurantsRoutes')

conectToDatabase()

const app = express();
const port = 3030;
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port} ✅`)
})