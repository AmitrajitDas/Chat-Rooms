import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'
import colors from 'colors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has started in ${PORT}`.yellow.bold))

