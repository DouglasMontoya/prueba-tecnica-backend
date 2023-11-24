import { Request, Response } from "express"
import { QueryResult } from "pg"
import { pool } from "../database"

/**
 * Función para obtener todos los contactos de la base de datos.
 * 
 * @param {Request} req - El objeto de solicitud de Express.js.
 * @param {Response} res - El objeto de respuesta de Express.js.
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta del servidor.
 */
export const getContacts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM contacts ORDER BY id DESC')
        return res.status(200).json(response.rows)
    } catch (error) {
        return res.status(500).json('Error de conexión')
    }
}

/**
 * Función para obtener un contacto específico por su ID de la base de datos.
 * 
 * @param {Request} req - El objeto de solicitud de Express.js.
 * @param {Response} res - El objeto de respuesta de Express.js.
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta del servidor.
 */
export const getContactById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const response: QueryResult = await pool.query('SELECT * FROM contacts WHERE id = $1', [id])
        return res.status(200).json(response.rows)
    } catch (error) {
        return res.status(500).json('Error de conexión')
    }
}

/**
 * Función para crear un nuevo contacto en la base de datos.
 * 
 * @param {Request} req - El objeto de solicitud de Express.js.
 * @param {Response} res - El objeto de respuesta de Express.js.
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta del servidor.
 */
export const createContact = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json('Faltan campos requeridos');
        }

        if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string') {
            return res.status(400).json('Los campos no son del tipo correcto');
        }
        await pool.query(`INSERT INTO contacts (name, phone, email) VALUES ($1, $2, $3)`, [name, phone, email])
        return res.status(200).json('Contacto creado exitosamente')

    } catch (error) {
        console.log(error);
        return res.status(500).json('Error de conexión');
    }
}

/**
 * Función para eliminar un contacto específico por su ID de la base de datos.
 * 
 * @param {Request} req - El objeto de solicitud de Express.js.
 * @param {Response} res - El objeto de respuesta de Express.js.
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta del servidor.
 */
export const deleteContact = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const response: QueryResult = await pool.query('DELETE FROM contacts WHERE id = $1', [id])
        return res.status(200).json(response.rows)
    } catch (error) {
        return res.status(500).json('Connection Error')
    }
}

/**
 * Función para editar un contacto existente en la base de datos.
 * 
 * @param {Request} req - El objeto de solicitud de Express.js.
 * @param {Response} res - El objeto de respuesta de Express.js.
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta del servidor.
 */
export const editContact = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, phone } = req.body;
        const id = req.params.id;

        if (!name || !email || !phone) {
            return res.status(400).json('Faltan campos requeridos');
        }

        if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string') {
            return res.status(400).json('Los campos no son del tipo correcto');
        }
        await pool.query(`UPDATE contacts SET name = $1, email = $2, phone = $3 WHERE id = $4`, [name, email, phone, id]);
        return res.status(200).json('Contacto creado exitosamente')

    } catch (error) {
        console.log(error);
        return res.status(500).json('Error de conexión');
    }
}


