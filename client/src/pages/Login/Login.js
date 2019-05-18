import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import API from "../../utils/API";

export class Login extends Component {
    state = {
        data: [],
        username: '',
        password: '',
    };

    componentDidMount = () => {
        // this.loadUsers();
        // todo Check if user is already logged in and redirects to home
    };

    loadUsers = () => {
        API.getUsers()
        .then(res => 
            this.setState({ data: res.data, username: '', password: '' }, console.log(res.data))
            )
        .catch(err => console.log(err));
    };

    updateInput = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        
        if (this.state.username && this.state.password) {
            API.checkAuth({
                username: this.state.username,
                password: this.state.password,
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        };
    };

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
                            Log into your user account
                    </Typography>
                    <Divider />
                    <TextField 
                            id="username"
                            value={this.state.username}
                            hintText="Username"
                            onChange={this.updateInput.bind(this)}
                    />
                    <Divider variant="middle" />
                    <TextField 
                            id="password"
                            value={this.state.password}
                            hintText="Password"
                            onChange={this.updateInput.bind(this)}
                    />
                    <Divider />
                    <RaisedButton
                            disabled={!(this.state.username && this.state.password)}
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

export default Login
