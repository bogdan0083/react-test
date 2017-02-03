/**
 * Created by blaze on 31.01.2017.
 */

import React, { Component } from 'react';
import './Board.css';

import Square from './Square/Square';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }
    
    // handle square click. 
    // Move key up to state container 
    // (to TicTacToe component)
    
    handleSquareClick(key) {
        this.props.handleSquareClick(key);
    }
    
    /*
    * generates grid based on array
    */

    generateGrid(grid) {
        return grid.map((item, idx) =>
            <Square
                key={idx}
                cellNum={idx}
                mark={item ? item : null}
                onClick={this.handleSquareClick}
            />
        );
    }

    render() {
        const grid = this.props.grid;
        return (
            <div className="board">
                { this.generateGrid(grid) }
            </div>
        )
    }
}

export default Board;