import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    signin: {
        marginTop: theme.spacing.unit * 2
    }
  });

  class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          confirmPassword: '',
          nickname: ''
        }
      }
    
      handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match")
        }
        else{
            fetch('https://api.toons.tae-yoon.me/api/user/register', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(res => {
                if(res.status === 200){
                  this.props.history.push('/signin');
                }
                else if(res.status == 202){
                  alert('User already exists');
                }
                else {
                  throw new Error(res.error);
                }
              })
              .catch(err => {
                console.log(err);
                alert('Error logging in');
              })
        }
      }
    
      render(){
        const { classes } = this.props;
        return(
          <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="nickname">Nickname</InputLabel>
                <Input 
                      id="nickname"
                      name="nickname"
                      autoComplete="nickname" 
                      value={this.state.nickname}
                      onChange={this.handleInputChange}
                      autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
            </form>
            <Button
            variant="text"
            size="small"
            type="signin"
            className={classes.signin}
            onClick={() => this.props.history.push('/signin')}
            >
            Already have an account? Click Here
          </Button>
          </Paper>
        </main>
        )
      }
  }

  RegisterPage.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(RegisterPage);