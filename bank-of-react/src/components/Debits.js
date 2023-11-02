import { Component } from "react";
import React from "react";

class Debits extends Component {
    render() {
        return (
            <>
                <h1>Debits</h1>
                <div>
                    <ol>
                        {this.props.debits.forEach(debit => {
                            return (
                                <li>{debit}</li>
                            )
                        })}
                    </ol>
                </div>
            </>
        )
    }
}
export default Debits