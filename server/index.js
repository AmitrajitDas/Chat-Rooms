import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'
import colors from 'colors'
import dotenv from 'dotenv'

import { addUser, removeUser, getUser, getUsersInRoom } from './config/users.js'
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

        socket.emit('message', { user: 'admin', text: `Hey ${user.username}, welcome to ${user.room}`})
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.username} has joined!`})

        socket.join(user.room)

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', { user: user.username, text: message})
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message', { user: 'admin', text: `${user.username} has left!`})
        }
    })
})


app.get('/', (req, res) => {
    res.send('API is running...')
})

const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => console.log(`Server has started in ${PORT}`.yellow.bold))

