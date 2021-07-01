import React from 'react'
import ReactEmoji from 'react-emoji';

import  './styles.css'

const Message = ({ username, message: {user,text} }) => {

    let isSentByCurrUser = false

    const trimmedUsername = username.trim().toLowerCase()

    if(user === trimmedUsername){
        isSentByCurrUser = true
    }

    return (
        isSentByCurrUser
        ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedUsername}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>

        )
        : (
            <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
    )
}

export default Message
