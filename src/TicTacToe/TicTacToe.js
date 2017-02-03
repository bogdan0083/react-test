/**
 * Created by blaze on 31.01.2017.
 */

import React, { Component } from 'react';
import { clone } from 'underscore';

import './TicTacToe.css';
import Board from './Board/Board';

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            steps: [
                {
                    nextPlayer: 'x',
                    gameState: 'active',
                    grid: [
                        false, false, false,
                        false, false, false,
                        false, false, false
                    ]
                }
            ],

            progress: {
                'X': [],
                'O': []
            }
        };

        this.nextStep = this.nextStep.bind(this);
        this.returnToStep = this.returnToStep.bind(this);
    }

    getGameStateMsg(gameState, playerName) {
        if (gameState === 'active') {
            return `Next step: ${playerName}`;
        } else if (gameState === 'finished') {
            return `Game is finished! ${playerName} has won.`;
        } else {
            return `It is a draw.`;
        }
    }

    // returns to game step by index
    returnToStep(event, idx) {
        event.preventDefault();
        const steps = this.state.steps;
        this.setState({ steps: steps.slice(0, idx+1) });
    }

    // adds new game step after clicking on cell
    // updates the state
    nextStep(key) {
        const steps = this.state.steps;
        const lastStep = steps[ steps.length - 1 ];
        console.log(lastStep);
        if (lastStep.gameState === 'finished') {
            return;
        }


        const newStep = {};
        newStep.grid = clone( lastStep.grid );
        newStep.gameState = lastStep.gameState;
        newStep.nextPlayer = lastStep.nextPlayer;


        // set new symbol in grid
        newStep.grid[key] = lastStep.nextPlayer;

        if ( calculateWinner(newStep.grid) ) {
            newStep.gameState = 'finished';
        } else if ( calculateDraw(newStep.grid) ) {
            newStep.gameState = 'draw';
        } else {
            // update nextPlayer property
            newStep.nextPlayer = lastStep.nextPlayer === 'x' ? 'o' : 'x';
        }

        // add new step to state
        this.setState({
           steps: steps.concat(newStep)
        });
    }

    render() {
        const steps = this.state.steps;
        const lastStep = steps[ steps.length - 1 ];
        const nextPlayer = lastStep.nextPlayer;

        const gameState = lastStep.gameState;

        let gameStateMsg = this.getGameStateMsg(gameState, nextPlayer);

        return (
            <div>
                {gameStateMsg}
                <Board grid={lastStep.grid} handleSquareClick={this.nextStep} />
                <ol className="steps-list">
                    {steps.map((step, idx) => {
                        return <li key={idx}>
                            <a href=""
                               onClick={(e) => this.returnToStep(e, idx)}>
                                {idx === 0 ? `New game` : `Step ${idx}`}
                            </a>
                        </li>
                    }, this)}
                </ol>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function calculateDraw(squares) {
    const freeSquares = squares.filter(square => !square);
    console.log(freeSquares.length);
    return freeSquares.length === 0;
}

export default TicTacToe;