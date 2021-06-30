import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 

    wrapper: {
        padding: '2rem',
    },
    
    paper: {
        marginTop: '5rem',
        marginBottom: '12.3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.action.selected,
        color: theme.typography.color.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
        borderColor: `${theme.palette.action.selected} !important`
    }
  },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.action.selected,
        color: theme.typography.color.main,
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        }
    },


}));