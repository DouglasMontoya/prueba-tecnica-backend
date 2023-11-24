const { Pool } = require('pg')
require('dotenv').config();


const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_DB,
    password: String(process.env.PASSWORD_DB),
    port: Number(process.env.PORT_DB),
})

async function seedDatabase(){
    try {
        // Crear la tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                phone VARCHAR(30),
                email VARCHAR(100)
            )
        `)
    
        console.log('La tabla contacts se creó correctamente.')
    
        // Insertar los datos de los contactos
        await pool.query(`
            INSERT INTO contacts (name, phone, email) VALUES 
            ('John Doe', '1234567890', 'john.doe@example.com'),
            ('Jane Smith', '0987654321', 'jane.smith@example.com'),
            ('Alice Johnson', '1112223333', 'alice.johnson@example.com'),
            ('Bob Williams', '4445556666', 'bob.williams@example.com')
        `)
    
        console.log('Los contactos se insertaron correctamente.')
    } catch (error) {
        console.error('Ocurrió un error:', error)
    } finally {
        // Cerrar la conexión a la base de datos
        await pool.end()
        console.log('La conexión a la base de datos se cerró correctamente.')
    }
}

seedDatabase()