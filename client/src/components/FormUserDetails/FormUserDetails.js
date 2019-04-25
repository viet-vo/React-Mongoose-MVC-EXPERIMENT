import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinkSideBar from '../LinkSideBar';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //! PROCESS FORM Backend
        this.props.nextStep();
    }
  render() {
    const { values, handleChange } = this.props;
    return (
        <MuiThemeProvider>
        <LinkSideBar />
            <React.Fragment>
                <Grid item xs={6}>
                    <Paper>
                        <TextField 
                            hintText="Enter Your First Name"
                            floatingLableText="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <TextField 
                            hintText="Enter Your Last Name"
                            floatingLableText="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <TextField 
                            hintText="Enter Your Email"
                            floatingLableText="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <RaisedButton
                            label="Continue"
                            primary={true}
                            style={style.button}
                            onClick={this.continue}
                        />
                    </Paper>
                </Grid>
            </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

const style = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
