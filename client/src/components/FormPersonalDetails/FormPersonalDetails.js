import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinkSideBar from '../LinkSideBar';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        //! PROCESS FORM Backend
        this.props.nextStep();
    }
    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    const { values, handleChange } = this.props;
    return (
        <MuiThemeProvider>
            <LinkSideBar />
            <Grid item xs={6}>
                <Paper>
                    <React.Fragment>
                        <TextField 
                            hintText="Enter Your Occupation"
                            floatingLableText="Occupation"
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                        />
                        <TextField 
                            hintText="Enter Your City"
                            floatingLableText="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                        />
                        <TextField 
                            hintText="Enter Your Bio"
                            floatingLableText="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                        />
                        <RaisedButton
                            label="Go Back"
                            primary={false}
                            style={style.button}
                            onClick={this.goBack}
                        />
                        <RaisedButton
                            label="Continue"
                            primary={true}
                            style={style.button}
                            onClick={this.continue}
                        />
                    </React.Fragment>
                </Paper>
            </Grid>
        </MuiThemeProvider>
    )
  }
}

const style = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
