import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Avatar, 
        Button, 
        CssBaseline, 
        TextField, 
        FormControlLabel, 
        Checkbox, 
        Grid, 
        Typography, 
        Container } from '@material-ui/core'

import TelegramIcon from '@material-ui/icons/Telegram';

import { useStyles } from './styles'

const Join = () => {

    const classes = useStyles()

    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.wrapper}>
      <div Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TelegramIcon />
        </Avatar>
        <Typography variant="h4">
          Join a Room
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
            }}
            InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="room"
            placeholder="Room"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
            }}
            InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }
            }}
          />
          <Link
          onClick={(e) => (!username || !room) ? e.preventDefault() : null}
          to={`/chat?username=${username}&room=${room}`}
          style={{ textDecoration: 'none'}}
          >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Join
          </Button>
          </Link>
        </form>
      </div>
      </div>
    </Container>
    )
}

export default Join
