import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/board';
import Button from './components/button';
import store from './redux/store';
import actions from './redux/actions';
import './App.css';
import { BOARD_SIZE } from './constants';

class App extends Component {

  componentDidMount() {
    store.dispatch(actions.resetBoard(BOARD_SIZE, false));
  }

  toggleCell(row, col) {
    let currentState = store.getState(),
        updatedCell = !currentState.updateBoard[row][col];
    store.dispatch( actions.toggleCell( row, col, updatedCell ) );
  }
  evaluateBoard() {
    store.dispatch(actions.boardStep());
  }
  clearBoard() {
    store.dispatch(actions.resetBoard(BOARD_SIZE, false));
  }
  randomizeBoard() {
    store.dispatch(actions.randomizeBoard());
  }

  render() {
    return (
      <div className='App'>
        <h2>Conway's Game of Life</h2>
        <Board 
          boardArray={this.props.updateBoard} 
          toggleCell={this.toggleCell.bind(this)}
          clickTest={this.clickTest}
        />
        <Button onClick={this.randomizeBoard.bind(this)} text={'Randomize'} />
        <Button onClick={this.evaluateBoard.bind(this)} text={'Step'} />
        <Button onClick={this.clearBoard.bind(this)} text={'Reset'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);