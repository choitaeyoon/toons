import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'typeface-roboto';
import './App.css';

import SignInPage from './components/pages/SignInPage';
import RegisterPage from './components/pages/RegisterPage';
import ChatPage from './components/pages/ChatPage';
import withAuth from './components/auth/CheckAuth';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="container">
              <Route exact path='/' component={ withAuth(ChatPage) }/>
              <Route exact path='/signin' component={ SignInPage } />
              <Route exact path='/register' component= { RegisterPage } />
            </div>
      </div>
      </Router>
    );
  }
}

export default App;
