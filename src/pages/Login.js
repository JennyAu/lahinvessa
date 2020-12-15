import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import loginService from '../services/login';
import locationsService from '../services/locations';
import {
  Grid,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Button,
  Link,
  InputAdornment,
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import theme from '../theme';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await loginService.login(user);

      if (response.token) {
        history.push('/');
        handleLogin(response);
        locationsService.setToken(response.token);
      }
    } catch (error) {
      // setNotification('Virheellinen käyttäjätunnus tai salasana');
    }
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    margin: {
      margin: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <motion.div animate={{ y: 30 }} transition={{ delay: 0.2 }} className={classes.paper}>
          <img src={logo} alt="Logo" height={70} wigth={70} className={classes.margin} />
          <Typography component="h1" variant="h5" className={classes.margin}>
            Kirjaudu sisään
          </Typography>
          <form onSubmit={login} className={classes.form} noValidate>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon style={{ color: '#717CB9' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Sähköpostiosoite"
              name="email"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: '#717CB9' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              size="small"
              required
              fullWidth
              name="password"
              label="Salasana"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handlePassword(e)}
            />
            <Grid container>
              <Grid item xs="6">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Kirjaudu
                  </Button>
                </motion.div>
              </Grid>
              <Grid item xs="6">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Peruuta
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="inherit">
                  Unohditko salasanasi?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="inherit">
                  {'Luo tunnukset täältä'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </motion.div>
      </ThemeProvider>
    </Container>
  );
};
export default Login;
