import React from 'react'
import {
        TextField,
        Button,
        InputAdornment
        } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { useStyles } from './styles'

const Input = ({ message, setMessage, sendMessage}) => {

    const classes = useStyles()

    return (
        <div>
            <form className={classes.form} noValidate>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="message"
            placeholder="Type a message..."
            name="sendmessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
            }}
            InputProps={{
            endAdornment: (
                <InputAdornment position='end'>
                    <Button 
                    className={classes.button}
                    onClick={(e) => sendMessage(e)}
                    >
                        <SendIcon />
                    </Button>
                </InputAdornment>
            ),
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }
            }}
          />
            </form>
        </div>
    )
}

export default Input
