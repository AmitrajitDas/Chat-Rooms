import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import { useStyles } from './styles'

let socket

const Chat = ({ location }) => {

    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { username, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setUsername(username)
        setRoom(room)

        socket.emit('join', {username, room}, () => {

        })

        return () => {

            socket.emit('disconnect')
            socket.off()
        }

    }, [location.search, ENDPOINT])
    
    
    return (
        <h1>
            Chat
        </h1>
    )
}

export default Chat
