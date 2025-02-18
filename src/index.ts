import http from 'http'
import cors from 'cors'
import express from 'express'

import { initRoutes } from './utils/routes.ts'
import { startServer } from './utils/server.ts'
import { connectToDatabase } from './utils/db.ts'

import routes from './routes/index.ts'


// init server
const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

initRoutes(app, routes)

const server = http.createServer(app)
startServer(server, 3000);

connectToDatabase(process.env.DB_URI as string)
