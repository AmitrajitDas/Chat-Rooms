import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'
import colors from 'colors'
import dotenv from 'dotenv'

import { addUser, removeUser, getUser, getUserFromRoom } from './config/users.js'
import connectDB from './config/db.js'

import homeRoute from './routes/homeRoute.js'

dotenv.config()

connectDB()

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

    socket.on('join', ({username, room}, callback) => {
        const { user, error } = addUser({ id: socket.id, username, room })

        if(error) return callback(error)

        socket.join(user.room)
    })

    socket.on('disconnect', () => {
        console.log('User left'.bgRed)
    })
})


app.use(homeRoute)

const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => console.log(`Server has started in ${PORT}`.yellow.bold))

