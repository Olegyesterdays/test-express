import express from 'express'
import {
	createCarControllers,
	getAllCarsControllers,
	getCarByIdControllers,
	updateCarControllers,
	deleteCarControllers,
} from '../controllers/car-controllers.js'

const router = express.Router()

router.post('/', createCarControllers)
router.get('/', getAllCarsControllers)
router.get('/:id', getCarByIdControllers)
router.put('/:id', updateCarControllers)
router.delete('/:id', deleteCarControllers)

export default router
