// src/components/Home.js
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://picsum.photos/200/200" alt="bank" />
                <h1> Bank of React </h1>
                <Link to="/userProfile">User Profile</Link>
                <br></br>
                <Link to="/login">Login</Link>
                <br></br>
                <Link to="/credits">Credits</Link>
                <br></br>
                <Link to="/debits">Debits</Link>
                <br></br>
                <Link to="/balance">Balance</Link>

                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}
export default Home;
