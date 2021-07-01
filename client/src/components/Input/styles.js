import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    form: {
        width: '100%',
        marginTop: '-1rem',
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

    button: {
        backgroundColor: theme.palette.action.selected,
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        },
    }

}));