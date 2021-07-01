import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    outerContainer: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60rem',
        // backgroundColor: theme.palette.action.selected,
        '@media (min-width: 320px) and (max-width: 480px)': {
            height: '100%',
        }
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '-20rem',
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '100%',
        },
        '@media (min-width: 480px) and (max-width: 1200px)': {
            width: '60%'
        }
    },

    chatbox: {

        backgroundColor: '#424a44',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")',
        height: '25rem',
    },

}));