import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'
import colors from 'colors'
import dotenv from 'dotenv'

import homeRoute from './routes/homeRoute.js'

dotenv.config()

const app = express()
app.use(cors())

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
})

io.on('connect', (socket) => {

    console.log('New connection established'.bgGreen)

    socket.on('disconnect', () => {
        console.log('User left'.bgRed)
    })
})


app.use(homeRoute)

const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => console.log(`Server has started in ${PORT}`.yellow.bold))

