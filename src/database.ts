import { Pool } from "pg"
require('dotenv').config();


export const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_DB,
    password: String(process.env.PASSWORD_DB),
    port: Number(process.env.PORT_DB),
})

