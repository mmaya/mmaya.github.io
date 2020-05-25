import React, { useState, useEffect, useCallback, useMemo } from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
//Layout components
import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';
//Rotes components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from 'views/HomePage';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';
//App context
export const AppDataContext = React.createContext([{}, () => {}]);

const useStyles = makeStyles(theme => ({
  root: {
     height: "100%",
  },
  container:{
    margin: theme.spacing(2)
  },
  mensagem: {
    margin: theme.spacing(10),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [notificacao, setNotificacao] = useState({texto: undefined, tipo: undefined})
  const classes = useStyles();


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotificacao({texto: undefined, tipo: undefined});

  };

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setNotificacao({texto: undefined, tipo: undefined});
      }, 6000);
  
      return () => {
        clearTimeout(timer);
      };
    },
    [notificacao],
  );

  const rotas = useMemo(() => (
    <div className={classes.container}>
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/about" component={() => <AboutPage />} />
        <Route path="/projects" component={() => <ProjectsPage />} />
        <Route path="/contact" component={() => <ContactPage />} />
      </Switch>
    </div>
    ),[classes]);

  return (
    <div className={classes.container}>

    <Backdrop className={classes.backdrop} open={isLoading} >
      <CircularProgress color="inherit" />
    </Backdrop>
  <AppDataContext.Provider value={{setNotificacao, setIsLoading}}>
    <div className={classes.root}>
      <Router >
        <Header />
        {notificacao.texto && <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={notificacao.tipo || "info"}>{notificacao.texto}</MuiAlert>}
        {rotas}
      </Router>
      <Footer />
  </div>  }
    </AppDataContext.Provider>

</div>
  );
}

export default App;
