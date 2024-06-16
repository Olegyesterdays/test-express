const express = require('express')
const pool = require('../db')
const router = express.Router()

// Create a car
router.post('/', async (req, res) => {
	const { make, model, year } = req.body
	try {
		const result = await pool.query(
			'INSERT INTO cars (make, model, year) VALUES ($1, $2, $3) RETURNING *',
			[make, model, year]
		)
		res.status(201).json(result.rows[0])
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

// Read all cars
router.get('/', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM cars')
		res.status(200).json(result.rows)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

// Read a single car
router.get('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const result = await pool.query('SELECT * FROM cars WHERE id = $1', [id])
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Car not found' })
		}
		res.status(200).json(result.rows[0])
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

// Update a car
router.put('/:id', async (req, res) => {
	const { id } = req.params
	const { make, model, year } = req.body
	try {
		const result = await pool.query(
			'UPDATE cars SET make = $1, model = $2, year = $3 WHERE id = $4 RETURNING *',
			[make, model, year, id]
		)
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Car not found' })
		}
		res.status(200).json(result.rows[0])
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

// Delete a car
router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const result = await pool.query(
			'DELETE FROM cars WHERE id = $1 RETURNING *',
			[id]
		)
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Car not found' })
		}
		res.status(200).json({ message: 'Car deleted' })
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

module.exports = router
