import React from 'react';
import Header from "./components/Header";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles'
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import Tomatoes from './pages/Tomatoes';

const config = {
  themeName: "Test",
  palette: {
    primary: {
      main: '#E53D35'
    }
  }
};

const theme = createMuiTheme(config)

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <MainPage>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tomatoes" exact component={Tomatoes} />
              <Redirect path="/" exact component={Dashboard}/>
            </Switch>
          </MainPage>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter((App));
