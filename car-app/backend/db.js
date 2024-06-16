const { Pool } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'db',
	database: 'car_db',
	password: 'password',
	port: 5432, // Здесь не нужно менять порт, так как это порт внутри контейнера
})

module.exports = pool
