import React from 'react';
import {
  Grid,
  Typography,
  Button,
  CardContent,
  Card,
  IconButton,
  Collapse,
  Container,
  CssBaseline,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import theme from '../theme';
import clsx from 'clsx';

const Privacy = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    img: {
      marginTop: theme.spacing(7),
    },
    margin: {
      marginTop: theme.spacing(1),
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} className={classes.paper}>
              <img src={logo} alt="Logo" height={70} wigth={70} className={classes.img} />
              <Typography component="h1" variant="h5" style={{ marginTop: '.3rem' }}>
                Tietosuoja
              </Typography>
          </Grid>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography paragraph style={{ fontSize: 'small' }}>
                Päivitetty: 8.12.2020
              </Typography>
              <Typography paragraph>
                Rekisteröityneen käyttäjän tiedot tallennetaan tietokantaan, josta käyttäjän sisään
                kirjautumisen yhteydessä haetaan tiedot. Tietoja ei käytetä henkilötietojen
                tutkimiseen, palveluiden kehittämiseen tai kolmansien osapuolien käyttöön.
              </Typography>
              <IconButton style={{ color: '#8127BA' }}
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded, 
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Rekisteröityneen käyttäjän tietoja ovat: käyttäjätunnus, sähköpostiosoite ja
                    salasana. Palvelu ei myöskään kerää käyttäjän paikannustietoja, IP-osoitteita
                    tai muita tietoja palveluiden kehittämisessä.
                  </Typography>
                  <Typography paragraph>
                    Rekisteröidyn käyttäjän oikeudet Rekisteröidyn käyttäjän oikeus on pyytää
                    palvelun tarjoajaa poistamaan omat henkilötiedot viipymättä palvelusta.
                    Rekisteröityneen käyttäjän on oikeus saada tietoa henkilötietojensa
                    käsittelystä, tulla unohdetuksi poistamalla henkilötiedot palvelussa.
                  </Typography>
                  <Typography paragraph>
                    EUR-Lex-säädös Rekisterinpitäjän noudattaa myös tietosuojasäädöstä, eikä käytä
                    henkilötietoja muihin kuin sovittuihin tarkoituksiin. Jos rekisterin pitäjä
                    huomaa tietokantassaan uhkia, hänen on kerrottava se rekisteröityneille
                    käyttäjilleen välittömästi. Rekisterinpitäjä kunnioittaa rekisteröityneiden
                    käyttäjien henkilötietoja eikä luovuta niitä muille ulkopuolisille eikä muille
                    käyttäjille.
                  </Typography>
                  <Typography>
                    Muutos tietojenkäsittelyssä Mikäli sovellus päättää käyttää henkilötietoja
                    muihin tarkoituksiin, on rekisterinpitäjän tai muun valtuutetun ilmoitettava
                    siitä rekisteröityneille käyttäjilleen huomattavasti aikaisemmin, ennenkuin
                    muutokset tulevat voimaan. Mikäli rekisteröitynyt käyttäjä ei hyväksy muutoksia,
                    hän voi pyytää rekisterinpitäjää poistamaan häntä koskevat henkilötiedot
                    sovelluksesta.
                  </Typography>
                </CardContent>
                <IconButton style={{ color: '#8127BA' }}
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded, 
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              </Collapse>
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

export default Privacy;