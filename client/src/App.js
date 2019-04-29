import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from '@material-ui/core/Grid';

import UserForm from './components/UserForm';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import MyAppBar from './components/MyAppBar';
import Portfolio from './pages/Portfolio';
import SignUp from './pages/SignUp';

class App extends Component {
  state = {
    customer: [
      {
        fName: "Ann",
        lName: "Hath",
        hasApt: true,
        key: 1
      },
      {
        fName: "Beth",
        lName: "Kiss",
        hasApt: true,
        key: 2
      },
      {
        fName: "Carol",
        lName: "Danvers",
        hasApt: false,
        key: 3
      }
    ]
    }
  
  render() {
    const { customer } = this.state;
    const values = { customer } 
    return (
      <MuiThemeProvider>
        <MyAppBar />
        <Grid>
          <Router>
            <Switch>
              <Route path="/" exact component={() => <Home values={values}/>} />
              <Route path="/UserForm" component={UserForm} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/SignUp" component={SignUp} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Grid>
    </MuiThemeProvider>
      
    );
  }
}

export default App;
