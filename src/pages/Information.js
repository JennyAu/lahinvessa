import React from 'react';
import theme from '../theme';
import {
  Grid,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  CssBaseline,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const Information = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 275,
      textAlign: 'center',
    },
    title: {
      fontSize: 14,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    img: {
      marginTop: theme.spacing(7),
    },
    margin: {
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12} className={classes.paper}>
              <img src={logo} alt="Logo" height={70} wigth={70} className={classes.img} />
              <Typography component="h1" variant="h5" style={{ marginTop: '.3rem' }}>
                Tietoa sovelluksesta
              </Typography>
            </Grid>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography color="textSecondary">Tekijät:</Typography>

                <Typography paragraph>
                  Ronny Friman{bull}Aleksi Vähätaini Jenna Nivakoski{bull}Jenny Auvinen
                </Typography>
              </CardContent>
            </Card>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Button variant="contained" color="primary" className={classes.margin}>
                Palaa
              </Button>
            </motion.div>
          </Grid>
        </div>
      </ThemeProvider>
    </Container>
  );
};

export default Information;
