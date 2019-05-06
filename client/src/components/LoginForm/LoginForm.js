import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const LoginForm = props => {
    return (
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
    )
}

LoginForm.propTypes = {

}

export default LoginForm
