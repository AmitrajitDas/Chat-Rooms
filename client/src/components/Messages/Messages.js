import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message/Message'
import { useStyles } from './styles'

const Messages = ({username, messages}) => {

    const classes = useStyles()

    return (
        <ScrollToBottom className={classes.messages}>
            {messages.map((message, index) => <div key={index}><Message username={username} message={message} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages
