import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from '@material-ui/core/Grid';

import Home from './components/Home';
import NoMatch from './components/NoMatch';
import MyAppBar from './components/MyAppBar';
import SignUp from './pages/SignUp';
import UserForm from './components/UserForm';
import UserSignUp from './pages/UserSignUp';
import Login from './pages/Login';
import User from './pages/UserPage';

class App extends Component {
  state = {
    data: [],
    firstName: '',
    lastName: '',
    username: '',
    isAuthed: false,
  };
  render() {
    let props = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar />
          <Grid>
            <Router>
              <Switch>
                <Route path="/" exact component={() => <Home values={this.state.data}/>} />
                <Route path="/UserForm" component={UserForm} />
                <Route path="/UserSignUp" component={UserSignUp} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/Login" component={Login} />
                <Route path="/User" component={() => <User {...props} isAuthed={this.state.data} />} />
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
