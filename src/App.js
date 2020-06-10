import React from "react";
//@material-ui
import Hidden from '@material-ui/core/Hidden';
//Layout components
import Header from 'components/layout/Header/Header';
import BottomNav from 'components/layout/BottomNav/BottomNav';
//Rotes components
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from 'views/HomePage';

function App() {

  return (
      <Router >
        <Hidden smDown implementation="css"><Header /></Hidden>
        <Switch>
          <Route path="/my-portfolio" component={() => <HomePage />} />
          <Route exact path="/">
            <Redirect to="/my-portfolio" /> : <HomePage />
          </Route>
        </Switch>
        <Hidden smUp implementation="css"><BottomNav /></Hidden>
      </Router>
  );
}

export default App;
