import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 

    wrapper: {
        padding: '2rem',
    },
    
    paper: {
        marginTop: '5rem',
        marginBottom: '12.6rem',
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
        backgroundColor: theme.palette.action.selected,
        color: theme.typography.color.main,
        padding: '0.6rem 2rem 0.6rem 2rem',
        margin: '0.5rem 0 1rem 0',
        borderRadius: '20px',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        }
    },


}));