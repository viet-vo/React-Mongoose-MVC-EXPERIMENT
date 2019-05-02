import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from '@material-ui/core/Grid';

import UserForm from './components/UserForm';
import UserSignUp from './pages/UserSignUp';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import MyAppBar from './components/MyAppBar';
import SignUp from './pages/SignUp';

class App extends Component {
  state = {}

  render() {
    const { customer } = this.state;
    const values = { customer } 
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar />
          <Grid>
            <Router>
              <Switch>
                <Route path="/" exact component={() => <Home values={values}/>} />
                <Route path="/UserForm" component={UserForm} />
                <Route path="/UserSignUp" component={UserSignUp} />
                <Route path="/SignUp" component={SignUp} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
