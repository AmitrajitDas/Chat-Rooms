import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Avatar, 
        Button, 
        CssBaseline, 
        TextField, 
        Typography, 
        Container,
        InputAdornment,
        IconButton
        } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { useStyles } from './styles'

const Register = () => {

    const classes = useStyles()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.wrapper}>
      <div Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h4">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            placeholder="Enter your name"
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
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            name="password"
            placeholder="Enter a password"
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            },

            endAdornment: (
                <InputAdornment position="end">
                    <IconButton 
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                </InputAdornment>
            )}}
          />
          <Link
          onClick={(e) => (!email || !password) ? e.preventDefault() : null}
          to={'/join-chat'}
          style={{ textDecoration: 'none'}}
          >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Register
          </Button>
          </Link>
        </form>
      </div>
      </div>
    </Container>
    )
}

export default Register
