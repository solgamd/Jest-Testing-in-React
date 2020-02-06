import React, { Component } from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  };

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount
    }));


  increment = this.makeIncrementer(1);

  decrement = this.makeIncrementer(-1);

  render() {
    return (
      <>
        <div className="App">
          <h1>Count: {this.state.count}</h1>
          <button className="increment" onClick={this.increment}>Increment</button>
          <button className="decrement" onClick={this.decrement}>Decrement</button>
        </div>
        <Question />
        
      </>
    );
  }
}

export default App;
