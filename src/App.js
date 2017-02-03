import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is a simple showcase of different components:
        </p>
        <nav className="App-nav">
          <Link to="/timer" activeClassName="js-active">Timer</Link>
          <Link to="/table" activeClassName="js-active">FilterableProductTable</Link>
          <Link to="/tictactoe" activeClassName="js-active">TicTacToe</Link>
        </nav>
        <div className="App-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
