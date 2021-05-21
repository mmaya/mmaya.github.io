import React from "react";
//@material-ui
import Hidden from '@material-ui/core/Hidden';
//Layout components
import Header from 'layout/NavBars/Header';
import Bottom from 'layout/NavBars/Bottom';
//Rotes components
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from 'views/HomePage';

function App() {
  const navLinks = {home: "/my-portfolio", 
                    about: {pathname: "/my-portfolio", hash: "#about", scroll: "smoth"}, 
                    projects: {pathname: "/my-portfolio", hash: "#projects", scroll: "smoth"}, 
                    contact: {pathname: "/my-portfolio", hash: "#contact", scroll: "smoth"}
                  }

  return (
      <Router >
        <Hidden smDown implementation="css"><Header navLinks={navLinks}/></Hidden>
        <Switch>
          <Route path="/my-portfolio" component={() => <HomePage />} />
          <Route exact path="/">
            <Redirect to="/my-portfolio" /> : <HomePage />
          </Route>
        </Switch>
        <Hidden smUp implementation="css"><Bottom navLinks={navLinks}/></Hidden>
      </Router>
  );
}

export default App;
