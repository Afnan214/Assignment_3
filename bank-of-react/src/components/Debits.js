import { Component } from "react";
import React from "react";

class Debits extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
            date: '',
            amount: 0,

        }
    }
    handleDate = (e) => {
        const updated = { ...this.state }
        updated.date = e.target.value;
        this.setState({ date: updated.date })
    }
    handleAmount = (e) => {
        const updated = { ...this.state }
        updated.amount = e.target.value;
        this.setState({ amount: updated.amount })

    }
    handleDescriptionChange = (e) => {
        const updated = { ...this.state };
        updated.description = e.target.value;

        this.setState({ description: updated.description })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const updated = { ...this.state }
        this.props.addCredit(updated)
    }
    render() {
        return (
            <>
                <h1>Debits</h1>
                <div>
                    <h2>Account Balance = {this.props.accountBalance}</h2>
                </div>
                <div>
                    <ol>
                        {
                            this.props.debits.map((debit, i) => {

                                return (
                                    <li className={'debitObject'} key={i}>
                                        <ul>
                                            <li>Description: {debit.description}</li>
                                            <li>Amount : {debit.amount}</li>
                                            <li>Date: {debit.date}</li>
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Description</label>
                            <input type="text" name="userName" onChange={this.handleDescriptionChange} />
                        </div>
                        <div>
                            <label>Amount</label>
                            <input type="number" name="debitAmmount" min={'0'} step={".01"} onChange={this.handleAmount} />
                        </div>
                        <div>
                            <label>Date</label>
                            <input type="text" name="date" onChange={this.handleDate} />
                        </div>

                        <button>Add Debit</button>
                    </form>
                </div>
            </>
        )
    }
}
export default Debits