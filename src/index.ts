import http from 'http'
import cors from 'cors'
import express from 'express'

import { initRoutes } from './utils/routes'
import { startServer } from './utils/server'
import { connectToDatabase } from './utils/db'

import routes from './routes/index'


// init server
const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

initRoutes(app, routes)

const server = http.createServer(app)
startServer(server, 3000);

connectToDatabase(process.env.DB_URI as string)
