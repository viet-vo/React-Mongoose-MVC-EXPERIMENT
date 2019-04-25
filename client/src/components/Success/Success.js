import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
    const { values: { firstName, lastName, email }} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <h1>Thank You {firstName} {lastName} For Your Submission</h1>
                <h2>We will reach you at {email}</h2>
            </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

export default FormPersonalDetails
