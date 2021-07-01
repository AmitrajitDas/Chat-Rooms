import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Avatar, 
        Button, 
        CssBaseline, 
        TextField, 
        Typography, 
        Container,
        InputAdornment,
        IconButton,
        Grid,
        Link
        } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import Loader from '../../components/Loader/Loader'
import RedAlertBox from '../../components/Alert/RedAlert'
import GreenAlertBox from '../../components/Alert/GreenAlert'
import { userRegisterAction } from '../../redux/actions/userRegisterAction'
import { useStyles } from './styles'

const Register = ({ location, history }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState('')


    const { loading, userData, success, error } = useSelector(state => state.userRegister)

    const redirect = location.search ? location.search.split('=')[1] : '/login'

    useEffect(() => {
        
        if(userData) {
            history.push(redirect)
        }

    }, [ userData, history, redirect ])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("Password doesn't match")
        } else {
            dispatch(userRegisterAction(name, email, password))
        }
        
    }


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
        { success && <GreenAlertBox alert={'User created successfully'} /> }
        { message && <RedAlertBox alert={message} /> }
        { error && <RedAlertBox alert={error} /> }
        { loading && <Loader /> }
        <form className={classes.form} noValidate onSubmit={submitHandler}>
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm password"
            placeholder="Confirm your password"
            type={showPassword ? "text" : "password"}
            id="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={(e) => (!name|| !email || !password) ? e.preventDefault() : null}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href={ redirect ? `/login?redirect=${redirect}` : '/login'} variant="body2" color='secondary'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </div>
    </Container>
    )
}

export default Register
