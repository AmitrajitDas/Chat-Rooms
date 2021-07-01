import { LinearProgress } from '@material-ui/core'

import { useStyles } from './styles'


const Loader = () => {

    const classes = useStyles()

    return (
        <div className={classes.loader}>
            <LinearProgress color='secondary' />
        </div>
    )
}

export default Loader