import React, { Component } from 'react';

class Question extends Component {
    constructor() {
        super();
        this.state = {
            answer: null
        }
    }
    render() {
        return (
            <>
            <div className="App">
                <div className="question">
                    <input type="text" />
                    <button type="submit">Ask</button>
                </div>
                {this.state.answer && (
                    <div className="answer">
                        <h2>{this.state.answer.answer}</h2>
                        <img src={this.state.answer.image} alt="answer" />
                    </div>
                )}
            </div>
            </>
        )
    }
}

export default Question;