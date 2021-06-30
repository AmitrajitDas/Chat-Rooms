import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'
import colors from 'colors'
import dotenv from 'dotenv'

import homeRoute from './routes/homeRoute.js'

dotenv.config()

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)


io.on('connection', (socket) => {

    console.log('New connection established'.bgGreen)

    socket.on('disconnect', () => {
        console.log('User left'.bgRed)
    })
})


app.use(homeRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has started in ${PORT}`.yellow.bold))

