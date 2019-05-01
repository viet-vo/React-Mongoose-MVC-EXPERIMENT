import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { List, ListItem } from 'material-ui/List'
import API from '../../utils/API'

export default class LinkSideBar extends Component {
    componentDidMount() {
    }

    seedMe = () => {
        API.seedMe()
        .then(console.log("seeded"))
        .catch(err => console.log(err));
    }

  render() {
    return (
        <Grid item xs={3}>
                <Paper>
                    <List>
                        <ListItem 
                            primaryText="Home"
                            href="/"
                        />
                        <ListItem 
                            primaryText="User Form"
                            href="/UserForm"
                        /> 
                        <ListItem 
                            primaryText="Portfolio"
                            href="/Portfolio"
                        />
                        <ListItem 
                            primaryText="Sign Up"
                            href="/SignUp"
                        /> 
                        <ListItem 
                            primaryText="Seed"
                            onClick={this.seedMe}
                        />  
                    </List>
                </Paper>
            </Grid>
    )
  }
}
