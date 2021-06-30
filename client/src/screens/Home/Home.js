import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

import Hero from '../../assets/join-chat-svg.svg'
import { useStyles } from './styles';

const Home = () => {

  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.wrapper}>
      <Grid item md={6} className={classes.intro}>
        <Typography className={classes.header} variant='h3'>
        Chat Rooms
        </Typography>
        <Typography  component='p' variant='h5' className={classes.subHeader}>
          Simple. Secure.Reliable messaging. With Chat Rooms, you'll get fast, simple, secure messaging for <b>FREE</b>, available on devices all over the world.
          <br />
          <br />
        </Typography>
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.registerButton}
          >
           Register
          </Button>
        </Link>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.loginButton}
          >
            Login
          </Button>
        </Link>
      </Grid>

      <Grid item md={5}>
        <img src={Hero} className={classes.vector} />
      </Grid>
    </Grid>

  );
};

export default Home;