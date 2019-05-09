import React, { Component } from "react";
import LinkSideBar from "../../components/LinkSideBar";
import API from "../../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from 'material-ui/List';

export default class SignUp extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        username: "",
        password: "",
      }
    }

    componentDidMount = () => {
        this.loadTestData();
    }

    loadTestData = () => {
        API.getTests()
        .then(res =>
            this.setState({ data: res.data, username: "", password: "" }, console.log(res))
        )
        .catch(err => console.log(err));
    };

    updateInput = event => {
      const { id, value } = event.target;
      this.setState({ [id]: value })
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
          password: this.state.password,
        })
          .then(res => this.loadTestData())
          .catch(err => console.log(err));
      };
    };

  render() {
    return (
      <div>
        <LinkSideBar/>
        Sign Up
        <Grid item xs={6}>
            <Paper>
                <TextField 
                    id="username"
                    value={this.state.username}
                    hintText="Create a username"
                    onChange={this.updateInput.bind(this)}
                />
                <TextField 
                    id="password"
                    value={this.state.password}
                    hintText="Create a password"
                    onChange={this.updateInput.bind(this)}
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
        <Grid item xs={6}>
          <Paper>
            {this.state.data.length ? (
              <List>
                {this.state.data.map(test => (
                  <ListItem 
                    key={test._id}
                    primaryText={test.username}
                    secondaryText={test.password}
                  />
                ))}
              </List>
            ) : (
              <h3>no results</h3>
            )}
          </Paper>
        </Grid>
      </div>
    )
  }
}

const style = {
    button: {
        margin: 15
    }
}