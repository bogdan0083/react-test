import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Timer from './Timer/Timer';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import TicTacToe from './TicTacToe/TicTacToe';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="timer" component={Timer} />
      <Route path="table" component={FilterableProductTable} />
      <Route path="tictactoe" component={TicTacToe} />
    </Route>
</Router>,
  document.getElementById('root')
);
