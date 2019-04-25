import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { List, ListItem } from 'material-ui/List'
import { Typography } from '@material-ui/core';

import TimeFrameFullDay from '../TimeFrameFullDay'

let style = {
    noApt: {
        backgroundColor: "red",
        opacity: 50
    },
    hasApt: {
        backgroundColor: "green",
        opacity: 50
    },
    green: {
        color: "green"
    },
    red: {
        color: "red"
    }
}

export class Home extends Component {
  render() {
      const { values: { customer }} = this.props;
      const CustomerList = customer.map((customer) => {
          return (
            <ListItem 
                primaryText={customer.fName} 
                secondaryText={customer.lName} 
                key={customer.key}
                style={customer.hasApt === true ? style.hasApt : style.noApt}
            />
          )
      })
      
    return (
      <div>
        <Grid container spacing={24}>
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
                    </List>
                    <Typography variant="h4" style={style.green}>Green Means has Appointment</Typography>
                    <Typography variant="h4" style={style.red}>Red Means does not have Appointment</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>
                    <List>
                        {CustomerList}
                    </List>
                </Paper>
            </Grid>
            <TimeFrameFullDay />
         </Grid>
      </div>
    )
  }
}

export default Home
