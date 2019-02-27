import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'typeface-roboto';
import './App.css';

import SignIn from './components/pages/SignInPage';
import Register from './components/pages/RegisterPage';
import Chat from './components/pages/ChatPage';
import withAuth from './components/auth/CheckAuth';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="container">
              <Route exact path='/' component={ withAuth(Chat) }/>
              <Route exact path='/signin' component={ SignIn } />
              <Route exact path='/register' component= { Register } />
            </div>
      </div>
      </Router>
    );
  }
}

export default App;
