import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from '../src/components/Countries';
import Table from '../src/components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Countries />
          <Table />
        </header>
      </div>
    );
  }
}

export default App;
