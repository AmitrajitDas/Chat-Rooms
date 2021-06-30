import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

  wrapper: {
    padding: '15rem',
  },

  intro: {},

  header: {
    fontSize: '2.8rem',
    fontWeight: 900,
    color: 'rgba(26,32,44,var(--tw-text-opacity))',
    lineHeight: '1.25',
    textAlign: 'left',
  },
  subHeader: {
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: '1.16rem',
    opacity: 0.8,
  },

  registerButton: {
    padding: '0.5rem 2rem 0.5rem 2rem',
    margin: '0.5rem 0 1rem 0',
    borderRadius: '20px',
    marginRight: '1rem',
    fontSize: '1rem',
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
            backgroundColor: theme.palette.action.hover
        }
  },

    loginButton: {
        padding: '0.6rem 2rem 0.6rem 2rem',
        margin: '0.5rem 0 1rem 0',
        borderRadius: '20px',
        fontSize: '1rem',
        backgroundColor: theme.palette.action.selected,
        '&:hover': {
                backgroundColor: theme.palette.action.hover
            }
    },

    display: {
        display: 'none',
    },

    vector: {
        width: '100%',
        height: '100%',
        marginLeft: '5rem'
    },
}));