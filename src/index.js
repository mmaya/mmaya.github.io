import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// THEME
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'theme';
import CssBaseline from '@material-ui/core/CssBaseline';
// App
import App from 'App';

const render = Component => {
  ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component />
        </MuiThemeProvider>,
    document.getElementById('root')
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
