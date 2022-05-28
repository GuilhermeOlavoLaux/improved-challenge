const express = require('express')
const mongoose = require('mongoose');
const conectToDatabase = require('./dataBase')
const cors = require('cors')

conectToDatabase()

const app = express();
const port = 3030;
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port} ✅`)
})