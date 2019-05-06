import React, { Component } from 'react';
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export class UserSignUp extends Component {
    // TODO protect password view
    // TODO check to see if username is unique compared to other users
    state = {
        data: [],
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    };

    componentDidMount = () => {
        this.loadUsers();
    };

    loadUsers = () => {
        API.getUsersLogin()
        .then(res =>
            this.setState({ data: res.data, firstName: '', lastName: '', username: '', password: '' }, console.log(res.data))
            )
        .catch(err => console.log(err));
    };

    updateInput = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.username && this.state.password) {
            API.submitUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
            })
            .then(res => this.loadUsers())
        }
    }

    render() {
        return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '75vh' }}
            >
                <Paper
                style={{
                    width: '50%',
                    }}
                >
                    <Typography variant="h5" component="h2" style={{margin: "1em"}}>
                        Create a basic user profile
                    </Typography>
                    <Divider />
                    <TextField 
                        id="firstName"
                        value={this.state.firstName}
                        hintText="Input First Name"
                        onChange={this.updateInput.bind(this)}
                    />
                    <Divider variant="middle" />
                    <TextField 
                        id="lastName"
                        value={this.state.lastName}
                        hintText="Input Last Name"
                        onChange={this.updateInput.bind(this)}
                    />
                    <Divider variant="middle" />
                    <TextField 
                        id="username"
                        value={this.state.username}
                        hintText="Create a Username"
                        onChange={this.updateInput.bind(this)}
                    />
                    <Divider variant="middle" />
                    <TextField 
                        id="password"
                        value={this.state.password}
                        hintText="Create a Password"
                        onChange={this.updateInput.bind(this)}
                    />
                    <Divider />
                    <RaisedButton
                        disabled={!(this.state.firstName && this.state.lastName && this.state.username && this.state.password)}
                        label="Submit"
                        primary={true}
                        style={{margin: 15}}
                        onClick={this.handleFormSubmit}
                    />
                </Paper>
            </Grid>
        </div>
        )
    }
}

export default UserSignUp
