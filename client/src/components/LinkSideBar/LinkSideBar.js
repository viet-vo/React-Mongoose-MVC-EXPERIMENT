import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { List, ListItem } from 'material-ui/List'

export default class LinkSideBar extends Component {
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
                    </List>
                </Paper>
            </Grid>
    )
  }
}
