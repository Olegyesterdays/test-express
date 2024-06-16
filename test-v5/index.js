import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import carRoutes from './src/routes/car-route.js'

const PORT = process.env.PORT_APP || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/cars', carRoutes)

app.listen(PORT, () =>
	console.log(`Listening on port http://localhost:${PORT}`)
)
