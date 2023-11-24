import express from 'express'
import indexRoutes from "./routes/index"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(indexRoutes)

app.listen(process.env.SERVER_PORT)
console.log(`Server Listening on Port ${process.env.SERVER_PORT}`);