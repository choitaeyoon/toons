import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';

import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';

const styles = theme => ({
  html: {
    fontFamily: "roboto"
  },
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  tableContainer: {
    height: '90%',
    display: 'flex'
  },
  chatBox: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  chatLog: {
    height: '90%',
    width: '100%',
    margin: 'auto',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  actions:{
    display: 'flex',
    flexDirection: 'row'
  },
  textfield: {
    flexGrow: 10,
  },
  divider: {
    margin: '10px'
  }
});


class ChatPage extends Component {
  constructor(props){
    super(props);

    //CHAT STATE & SOCKET
    this.state = {
      email: '',
      nickname : '',
      message : '',
      messages : [],
      onlineUsers : []
    }

    this.socket = io('https://api.toons.tae-yoon.me');

    //SET AND SEND NICKNAME OF NEW CONNECTION
    this.socket.on('connect', () => {
      fetch('https://api.toons.tae-yoon.me/api/user/userInfo',{
        credentials: 'include',
        'Cache': 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        updateUser(data);
        this.socket.emit('NEW_CONNECTION', {
          nickname: data.nickname
        })
      })
    })

    const updateUser = data => {
      this.setState ({
        "nickname": data.nickname,
        "email": data.email,
      })
    }

    //UPDATED USER LIST
    this.socket.on('ONLINE_USERS_UPDATE', function(data){
      updateUserList(data);
    })

    const updateUserList = data => {
      this.setState({ onlineUsers: data});
    }

    //UPDATE CHAT LOG WITH NEW MESSAGE
    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });
  
    const addMessage = data => {
        this.setState({messages: [...this.state.messages, data]});
    };

    //SEND NEW CHAT MESSAGE
    this.textFieldEnter = ev => {
      if(ev.key === 'Enter'){
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
          author: this.state.nickname,
          message: this.state.message
        });
        this.setState({message: ''});
      }
    }
  }


  //DUMMY CHATLOG DIV FOR SCROLLING TO BOTTOM
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior:'smooth'});
  }

  //GET USER EMAIL & NICKNAME
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <SideBar onlineUsers={this.state.onlineUsers}/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.tableContainer}>
            <Card className={classes.chatBox}>
              <CardContent className={classes.chatLog}>
                {this.state.messages.map(message => {
                  return (
                    <div>
                      <div className={classes.author}>
                        <Typography
                          component="h1"
                          variant="h6"
                          color="secondary"
                        >
                        { message.author }
                        </Typography>
                      </div>
                      <div className={classes.message}>
                        <Typography
                          component="h1"
                          variant="body1"
                        >
                        { message.message }
                        </Typography>
                      </div>
                      <Divider
                        className={classes.divider}
                        variant='middle'
                        light='true'
                      />
                    </div> 
                  )
                })}
                <div 
                  style = {{float:'left', clear: 'both'}}
                  ref={(e) => {this.messagesEnd = e}}
                ></div>
              </CardContent>
              <cardActions className={classes.actions} disableActionSpacing>
                <TextField 
                  className={classes.textfield}  
                  variant='filled'
                  multiline='true'
                  value={this.state.message}
                  onChange={ev => this.setState({message:ev.target.value})}
                  onKeyPress= {this.textFieldEnter}
                />
                <IconButton 
                  aria-label='more' 
                  className={classes.actionsIcons} >
                  <AddIcon />
                </IconButton>
              </cardActions>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

ChatPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatPage);