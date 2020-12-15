import React, { useState } from 'react';
import registerService from '../services/register';
import {
  Grid,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Button,
  InputAdornment,
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import theme from '../theme';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };

  const register = (e) => {
    e.preventDefault();

    const register = async (e) => {
      e.preventDefault();

      if (password === passwordAgain) {
        const newUser = {
          username,
          email,
          password,
        };

        try {
          await registerService.register(newUser);
          setPasswordAgain('');
          setPassword('');
          setEmail('');
          setUsername('');
        } catch (error) {
          console.log(error.response.data);
          // setNotification('Käyttäjätunnus on varattu');
          setPasswordAgain('');
          setPassword('');
        }
      } else {
        // setNotification('Salasanat eivät täsmää');
      }
    };
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
      marginTop: theme.spacing(2),
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
            Rekisteröidy
          </Typography>
          <form onSubmit={register} className={(classes.form, register)} noValidate>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon style={{ color: '#717CB9' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Käyttäjätunnus"
              name="username"
              value={username}
              onChange={(e) => handleUsername(e)}
            />
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
              color="primary"
              required
              fullWidth
              name="password"
              label="Salasana uudelleen"
              type="passwor"
              id="passwordagain"
              value={passwordAgain}
              onChange={(e) => handlePasswordAgain(e)}
            />
            <Grid container>
              <Grid item xs="6">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Rekisteröidy
                  </Button>
                </motion.div>
              </Grid>
              <Grid style={{ paddingLeft: 43 }} item xs="6">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Peruuta
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </form>
        </motion.div>
      </ThemeProvider>
    </Container>
  );
};

export default Register;
