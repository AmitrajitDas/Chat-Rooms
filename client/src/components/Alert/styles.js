import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

}));