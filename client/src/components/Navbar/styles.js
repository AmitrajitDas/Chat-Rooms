import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    root: {
        flexGrow: 1,
    },
    
    menuButton: {
        marginRight: theme.spacing(2),
    },

    avatar: {
        backgroundColor: theme.palette.action.selected,
        color: '#fff',
    },

    title: {
        flexGrow: 1,
    },

    icon: {
        width: '2.5rem',
        height: '2.5rem'
    },

    logoutButton: {
        marginTop: '2vh',
        backgroundColor: theme.palette.action.selected,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },

}));