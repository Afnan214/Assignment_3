// src/App.js

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor() {  // Create and initialize state
    super();
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }
  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    return (
      <Routes>
        <Route exact path="/" render={HomeComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent} />
      </Routes>
    );
  }
}

export default App;