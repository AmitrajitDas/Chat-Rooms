import React from 'react'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton} from '@material-ui/core'
    
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './styles'

const Navbar = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Chat Rooms
            </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar
