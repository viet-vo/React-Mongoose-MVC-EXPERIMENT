import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from 'material-ui/List';
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
    const { values: { firstName, lastName, email, occupation, city, bio }} = this.props;
    return (
        <MuiThemeProvider>
            <LinkSideBar />
            <Grid item xs={6}>
                <Paper>
                <React.Fragment>
                <List>
                    <ListItem 
                        primaryText="First Name"
                        secondaryText={ firstName }
                    />
                    <ListItem 
                        primaryText="Last Name"
                        secondaryText={ lastName }
                    />
                    <ListItem 
                        primaryText="Email"
                        secondaryText={ email }
                    />
                    <ListItem 
                        primaryText="Occupation"
                        secondaryText={ occupation }
                    />
                    <ListItem 
                        primaryText="City"
                        secondaryText={ city }
                    />
                    <ListItem 
                        primaryText="Bio"
                        secondaryText={ bio }
                    />
                </List>
                <RaisedButton
                    label="Go Back"
                    primary={false}
                    style={style.button}
                    onClick={this.goBack}
                />
                <RaisedButton
                    label="Confirm"
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
