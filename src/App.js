import React from 'react';
import './App.css';
import Button from './components/button/button';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click me" />
        <Toggle />
      </header>
    </div>
  );
}

export default App;
