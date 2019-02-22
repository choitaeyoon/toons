import io from 'socket.io-client';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = theme => ({
  html: {
    fontFamily: "roboto"
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
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


class ChatPage extends React.Component {
  constructor(props){
    super(props);

    //CHAT STATE & SOCKET
    this.state = {
      email: '',
      nickname : '',
      message : '',
      messages : []
    }

    this.socket = io('localhost:4000');

    //SEND NEW CHAT MESSAGE
    this.sendMessage = ev => {
      ev.preventDefault();
      
    }

    //UPDATE CHAT LOG WITH NEW MESSAGE
    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });
  
    const addMessage = data => {
        this.setState({messages: [...this.state.messages, data]});
    };

    //OVERRIDE ENTER KEY ON TEXTFIELD
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
    fetch('/api/user/userInfo')
      .then(res => res.json())
      .then(data => {
        this.setState ({
          "nickname": data.nickname,
          "email": data.email
        })
      })
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Toons Room
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
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