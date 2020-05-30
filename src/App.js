import React from "react";
//@material-ui
import Hidden from '@material-ui/core/Hidden';
//Layout components
import Header from 'components/layout/Header/Header';
import BottomNav from 'components/layout/BottomNav/BottomNav';
//Rotes components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from 'views/HomePage';
import AboutPage from 'views/AboutPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';

function App() {

  return (
      <Router >
        <Hidden smDown implementation="css"><Header /></Hidden>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about" component={() => <AboutPage />} />
          <Route path="/projects" component={() => <ProjectsPage />} />
          <Route path="/contact" component={() => <ContactPage />} />
        </Switch>
        <Hidden smUp implementation="css"><BottomNav /></Hidden>
      </Router>
  );
}

export default App;
