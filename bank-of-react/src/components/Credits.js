import { Component } from "react";
import React from "react";
import "./Credits.css"
class Credits extends Component {
    render() {

        return (
            <>
                <h1>Credits</h1>
                <div>
                    <ol>
                        {
                            this.props.credits.map((credit, i) => {
                                console.log(credit)
                                return (
                                    <li key={i}>
                                        <ul>
                                            <li>Description: {credit.description}</li>
                                            <li>Account Balance: {credit.amount}</li>
                                            <li>Data: {credit.date}</li>
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </>
        )
    }
}
export default Credits