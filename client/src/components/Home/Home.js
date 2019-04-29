import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LinkSideBar from '../LinkSideBar';

import TimeFrameFullDay from '../TimeFrameFullDay'

// let style = {
//     noApt: {
//         backgroundColor: "red",
//         opacity: 50
//     },
//     hasApt: {
//         backgroundColor: "green",
//         opacity: 50
//     },
//     green: {
//         color: "green"
//     },
//     red: {
//         color: "red"
//     }
// }

export class Home extends Component {
  render() {
    //   const { values: { customer }} = this.props;
    //   const CustomerList = customer.map((customer) => {
    //       return (
    //         <ListItem 
    //             primaryText={customer.fName} 
    //             secondaryText={customer.lName} 
    //             key={customer.key}
    //             style={customer.hasApt === true ? style.hasApt : style.noApt}
    //         />
    //       )
    //   })
      
    return (
      <div>
        <Grid container spacing={24}>
            <LinkSideBar/>
            <Grid item xs={6}>
                {/* <Paper>
                    <List>
                        {CustomerList}
                    </List>
                </Paper> */}
            </Grid>
            <TimeFrameFullDay />
         </Grid>
      </div>
    )
  }
}

export default Home
