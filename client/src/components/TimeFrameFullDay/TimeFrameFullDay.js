import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { List, ListItem } from 'material-ui/List'
import { Typography } from '@material-ui/core'

import Divider from '@material-ui/core/Divider';

export class TimeFrameFullDay extends Component {
    state = {
        timeRange: {
            start: 8,
            end: 23
        },
        translation: ['12:00AM', '1:00AM', '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM']
    }
    
    render() {
        // const { timeRange, translation } = this.state
        // const Date = Object.keys(timeRange).map(function(key, index)
        //     for (let i=)
        // )
        return (
            <Grid item xs={3}>
                <Paper>
                        <Typography varient="h1">12:00AM</Typography>
                    <Grid item xs={12}>
                        <List>
                            <ListItem 
                                float="left"
                                primaryText=":00"  
                            />
                            <Divider />
                            <ListItem 
                                float="left"
                                primaryText=":15"    
                            />
                            <Divider />
                            <ListItem 
                                float="left"
                                primaryText=":30"    
                            />
                            <Divider />
                            <ListItem 
                                float="left"
                                primaryText=":45"    
                            />
                        </List>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default TimeFrameFullDay
