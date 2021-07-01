import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import dotenv from 'dotenv'

import InfoBar from '../../components/InfoBar/InfoBar'
import Input from '../../components/Input/Input'
import Messages from '../../components/Messages/Messages'
import { useStyles } from './styles'

dotenv.config()

let socket

const Chat = ({ location }) => {

    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const ENDPOINT = 'https://chat-rooms-backend.herokuapp.com/'

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
        <div className={classes.outerContainer}>
            <div className={classes.innerContainer}>
                <InfoBar room={room} />
                <div className={classes.chatbox}>
                    <Messages username={username} messages={messages} />
                </div>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat
