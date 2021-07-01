import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    root: {
        flexGrow: 1,
    },

    bar: {
        backgroundColor: theme.palette.action.selected,
        width: '50rem'
    },

    onlineIcon: {
        color: '#66DE93'
    },

//     leftInnerContainer: {
//         flex: '0.5',
//         display: 'flex',
//         alignItems: 'center',
//         marginLeft: '5%',
//         color: 'white',
// },

//     rightInnerContainer: {
//         display: 'flex',
//         flex: '0.5',
//         justifyContent: 'flexEnd',
//         marginRight: '5%',
//     }

}));