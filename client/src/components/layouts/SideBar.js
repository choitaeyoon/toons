import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/TagFaces';
const drawerWidth = 240;

const styles = theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: {
      marginTop: theme.spacing.unit * 10
    }
});

class SideBar extends Component {
    constructor(props){
      super(props);


    }
    render(){
        const { classes } = this.props;
        return(
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              <List>
                {this.props.onlineUsers.map(user => {
                  return(
                    <ListItem button>
                      <ListItemIcon> 
                        <FaceIcon />
                      </ListItemIcon>
                      <ListItemText primary={ user.nickname }></ListItemText>
                    </ListItem>
                  )
                })}
              </List>
              <Divider />
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Main Channel"></ListItemText>
                </ListItem>
              </List>
            </Drawer>
        )
    }
}

export default withStyles(styles)(SideBar);