import React, { Component } from "react";
import LinkSideBar from "../../components/LinkSideBar";
import API from "../../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// import { List, ListItem } from 'material-ui/List';

export default class SignUp extends Component {
    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        this.loadTestData();
    }

    loadTestData = () => {
        API.getTests()
        .then(res =>
            this.setState({ tests: res.data, username: "", password: "" })
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.saveTest({
                username: this.state.username,
                password: this.state.password
            })
                .then(console.log("worked"))
                .catch(err => console.log(err))
        }
    }

  render() {
    return (
      <div>
        <LinkSideBar/>
        Sign Up
        <Grid item xs={6}>
            <Paper>
                <TextField 
                    value={this.state.username}
                    hintText="Create a username"
                    floatingLableText="Create a Username"
                    onChange={this.handleInputChange}
                />
                <TextField 
                    value={this.state.password}
                    hintText="Create a password"
                    floatingLableText="Create a Password"
                    onChange={this.handleInputChange}
                />
                <RaisedButton
                    disabled={!(this.state.username && this.state.password)}
                    label="Continue"
                    primary={true}
                    style={style.button}
                    onClick={this.handleFormSubmit}
                />
            </Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper>
            {this.state.tests.length ? (
              <List>
                {this.state.tests.map(test => (
                  <ListItem 
                    primaryText={test.username}
                    secondaryText={test.password}
                  />
                ))}
              </List>
            ) : (
              <h3>no results</h3>
            )}
          </Paper>
        </Grid> */}
      </div>
    )
  }
}

const style = {
    button: {
        margin: 15
    }
}