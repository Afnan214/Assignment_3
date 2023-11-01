// src/App.js

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import AccountBalance from './components/AccountBalance';
import Credits from './components/Credits'
import Debits from './components/Debits'


export default function App() {
  // constructor() {  // Create and initialize state
  //   super();
  //   this.state = {
  //     accountBalance: 1234567.89,
  //     currentUser: {
  //       userName: 'Joe Smith',
  //       memberSince: '11/22/99',
  //     },
  //     credits: [],
  //     debits: []
  //   };
  // }
  const [accountBalance, setAccountBalance] = useState(1234567.89)
  const [currentUser, setCurrentUser] = useState({ username: 'Joe Smith', memberSince: '11/22/99' })
  const [credits, setCredits] = useState([])
  const [debits, setDebits] = useState([])
  useEffect(() => {
    async function componentCreditDidMount() {
      const CreditLink = "https://johnnylaicode.github.io/api/credits.json";
      try {
        let response = await axios.get(CreditLink)
        console.log(response.data);
        addCredit(response.data)
      }
      catch (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
        }
      }
    }
    async function componentDebitDidMount() {
      const debitLink = "https://johnnylaicode.github.io/api/debits.json";
      try {
        let response = await axios.get(debitLink)
        console.log(response.data);
        addDebit(response.data)
      }
      catch (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
        }
      }
    }
    componentCreditDidMount()
    componentDebitDidMount()

  }, [])
  useEffect(() => {
    const updateBalance = () => {
      function totalCredits() {
        var totalCredits = 0;
        credits.forEach(credit => {
          totalCredits += credit
        });
        return totalCredits
      }
      function totalDebits() {
        var totalDebits = 1;
        debits.forEach(debit => {
          totalDebits += debit
        });
        return totalDebits
      }
      const accountBalance = totalCredits() - totalDebits()
      setAccountBalance(accountBalance)
    }
    updateBalance()
  }, [credits, debits])
  const mockLogIn = (logInInfo) => {  // Update state's currentUser (userName) after "Log In" button is clicked
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser({ newUser })
  }
  const addCredit = (input) => {
    setCredits(input)
  }
  const addDebit = (input) => {
    setDebits(input)
  }

  // const run = () => {

  // }
  return (
    <Routes>
      <Route exact path="/" element={<Home accountBalance={accountBalance} />} />
      <Route exact path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
      <Route exact path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn} />} />
      <Route exact path="/balance" element={<AccountBalance accountBalance={accountBalance} />} />
      <Route exact path="/credits" element={<Credits credits={credits} />} />
      <Route exact path="/debits" element={<Debits debits={debits} />} />
    </Routes>
  );
}

