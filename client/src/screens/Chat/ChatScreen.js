import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import { useStyles } from './styles'

let socket

const Chat = ({ location }) => {

    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

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

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    },[messages])
    
    const sendMessage = (e) => {
        e.preventDefault()

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);
    
    return (
        <div>
            <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            ></input>
        </div>
    )
}

export default Chat
