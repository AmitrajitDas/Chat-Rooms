import React, { useState } from 'react'
import {Avatar, 
        Button, 
        CssBaseline, 
        TextField, 
        FormControlLabel, 
        Link, 
        Checkbox, 
        Grid, 
        Typography, 
        Container } from '@material-ui/core'

import TelegramIcon from '@material-ui/icons/Telegram';

import { useStyles } from './styles'

const Join = () => {

    const classes = useStyles()

    const [name, setName] = useState('')
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
          Join Chat
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            label="Room"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      </div>
    </Container>
    )
}

export default Join
