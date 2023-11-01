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
                                return (
                                    <li key={i}>{credit}</li>
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