import pool from '../db/pool.js'

// Create a car
async function createCarService({ make, model, car_year }) {
	const result = await pool.query(
		'INSERT INTO cars (make, model, car_year) VALUES ($1, $2, $3) RETURNING *',
		[make, model, car_year]
	)
	return result.rows[0]
}

// Read all cars
async function getAllCarsService() {
	const result = await pool.query('SELECT * FROM cars')
	return result.rows
}

// Read a single car
async function getCarByIdService(id) {
	const result = await pool.query('SELECT * FROM cars WHERE car_id = $1', [id])
	return result.rows[0]
}

// Update a car
async function updateCarService(id, { make, model, car_year }) {
	const result = await pool.query(
		'UPDATE cars SET make = $1, model = $2, car_year = $3 WHERE car_id = $4 RETURNING *',
		[make, model, car_year, id]
	)
	return result.rows[0]
}

// Delete a car
async function deleteCarService(id) {
	const result = await pool.query(
		'DELETE FROM cars WHERE car_id = $1 RETURNING *',
		[id]
	)
	return result.rows[0]
}

export {
	createCarService,
	getAllCarsService,
	getCarByIdService,
	updateCarService,
	deleteCarService,
}
