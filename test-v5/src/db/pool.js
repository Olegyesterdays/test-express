import pkg from 'pg'
import 'dotenv/config'

const { Pool } = pkg

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	host: process.env.DB_HOST,
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.DB_PORT,
})

export default pool
