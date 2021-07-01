import React from 'react'
import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
        Grid
        } from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import OnlineIcon from '../../assets/onlineIcon.png'
import { useStyles } from './styles'

const InfoBar = ({ room }) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography variant='h4'>
                                <FiberManualRecordIcon className={classes.onlineIcon} />
                                {room}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <a href='/join-chat'>
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                            </a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default InfoBar
