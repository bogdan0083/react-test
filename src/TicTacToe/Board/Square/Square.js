/**
 * Created by blaze on 31.01.2017.
 */

import React, { Component } from 'react';

import './Square.css';

class Square extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        // if square already clicked,
        // not to continue
        if (this.props.mark) {
            return;
        }

        // move cell number up to state
        this.props.onClick(this.props.cellNum);
    }
    
    render() {
        return (
            <div 
                className={'square ' + (this.props.mark ? ('square-' + this.props.mark) : '')}
                onClick={this.handleClick}
            >
            </div>
        )
    }
}

export default Square;