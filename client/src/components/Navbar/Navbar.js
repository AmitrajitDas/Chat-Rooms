import React from 'react'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton} from '@material-ui/core'
    
import ChatRoomsIcon from '../../assets/chat.png'
import { useStyles } from './styles'

const Navbar = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <img src={ChatRoomsIcon} className={classes.icon} />
            </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar
