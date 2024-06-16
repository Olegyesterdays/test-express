import {
	createCarService,
	getAllCarsService,
	getCarByIdService,
	updateCarService,
	deleteCarService,
} from '../services/car-service.js'

async function createCarControllers(req, res) {
	try {
		const car = await createCarService(req.body)
		res.status(201).json(car)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}

async function getAllCarsControllers(req, res) {
	try {
		const cars = await getAllCarsService()
		res.status(200).json(cars)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}

async function getCarByIdControllers(req, res) {
	try {
		const car = await getCarByIdService(req.params.id)
		res.status(200).json(car)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}

async function updateCarControllers(req, res) {
	try {
		const car = await updateCarService(req.params.id, req.body)
		res.status(200).json(car)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}

async function deleteCarControllers(req, res) {
	try {
		const car = await deleteCarService(req.params.id)
		res.status(200).json(car)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}

export {
	createCarControllers,
	getAllCarsControllers,
	getCarByIdControllers,
	updateCarControllers,
	deleteCarControllers,
}
