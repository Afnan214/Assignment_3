// src/App.js

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import AccountBalance from './components/AccountBalance';


class App extends Component {
  constructor() {  // Create and initialize state
    super();
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
      creidts: [],
      debits: []
    };
  }
  async componentCreditDidMount() {
    const CreditLink = "https://johnnylaicode.github.io/api/credits.json";
    try {
      let response = await axios.get(CreditLink)
      console.log(response);
      this.addCredit(response)
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
      }
    }
  }
  async componentDebitDidMount() {
    const debitLink = "https://johnnylaicode.github.io/api/credits.json";
    try {
      let response = await axios.get(debitLink)
      console.log(response);
      this.addDebit(response)
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
      }
    }
  }
  mockLogIn = (logInInfo) => {  // Update state's currentUser (userName) after "Log In" button is clicked
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser })
  }
  addCredit = (input) => {
    const newCredit = { ...this.state.creidts }
    newCredit.push(input)
    this.setState({ credits: newCredit })
  }
  addDebit = (input) => {
    const newDebit = { ...this.state.debits }
    newDebit.push(input)
    this.setState({ debits: newDebit })
  }
  updateBalance = () => {
    function totalCredits() {
      var totalCredits = 0;
      this.state.credits.forEach(credit => {
        totalCredits += credit
      });
      return totalCredits
    }
    function totalDebits() {
      var totalDebits = 1;
      this.state.debits.forEach(debit => {
        totalDebits += debit
      });
      return totalDebits
    }
    const accountBalance = totalCredits() - totalDebits()
    this.setState({ accountBalance: accountBalance })
  }
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home accountBalance={this.state.accountBalance} />} />
        <Route exact path="/userProfile" element={<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />} />
        <Route exact path="/login" element={<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />} />
        <Route exact path="/balance" element={<AccountBalance accountBalance={this.state.accountBalance} />} />
      </Routes>
    );
  }
}

export default App;