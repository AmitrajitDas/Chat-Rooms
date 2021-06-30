import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
        Grid
        } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
    
import ChatRoomsIcon from '../../assets/chat.png'
import { useStyles } from './styles'

const Navbar = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <Typography variant="h6" className={classes.title}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <img src={ChatRoomsIcon} className={classes.icon} />
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Link to='/register' style={{ textDecoration: 'none' }}>                
                    <IconButton>
                        <PersonAddIcon />
                        <Typography variant='body1'>
                            Register
                        </Typography>
                    </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                    <IconButton>
                        <AccountCircleIcon />
                        <Typography variant='body1'>
                            Login
                        </Typography>
                    </IconButton>
                    </Link>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar
