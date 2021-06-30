import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    root: {
        flexGrow: 1,
    },
    
    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
    },

    icon: {
        width: '2.5rem',
        height: '2.5rem'
    },

}));