import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
        Grid,
        Avatar
        } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
    
import ChatRoomsIcon from '../../assets/chat.png'
import { userLogoutAction } from '../../redux/actions/userLoginAction'
import { useStyles } from './styles'

const Navbar = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const { userData } = useSelector(state => state.userLogin)

    const logoutHandler = () => {
        
        dispatch(userLogoutAction())
        history.push('/')

  }

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Typography variant="h6" className={classes.title}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <img src={ChatRoomsIcon} className={classes.icon} alt='Chat Rooms Icon'/>
                        </Link>
                    </Typography>
                </Grid>
                { userData
                ?
                (
                <Grid item xs={1}>                
                    <IconButton>
                        <Avatar className={classes.avatar}>
                            {userData.email.charAt(0).toUpperCase()}
                        </Avatar>
                    </IconButton>
                </Grid>
                
                )
                :
                (
                <Grid item xs={1}>
                    <Link to='/register' style={{ textDecoration: 'none' }}>                
                    <Button>
                        <PersonAddIcon />
                        <Typography variant='body2'>
                            Register
                        </Typography>
                    </Button>
                    </Link>
                </Grid>
                )
                }
                { userData
                ?
                (
                <Grid item xs={1}>
                    <Button onClick={logoutHandler} className={classes.logoutButton}>
                        <Typography variant='body2'>
                            Logout
                        </Typography>
                    </Button>
                </Grid>
                )
                :
                (
                <Grid item xs={1}>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Button>
                        <AccountCircleIcon />
                        <Typography variant='body2'>
                            Login
                        </Typography>
                    </Button>
                    </Link>
                </Grid>
                )
                }
                
            </Grid>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar
