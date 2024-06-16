const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const carRoutes = require('./routes/cars')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/cars', carRoutes)

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})
