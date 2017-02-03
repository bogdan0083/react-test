import React, { Component } from 'react';

// TODO: refactor tests with fake timers

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { secondsElapsed: 0 };

    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.end();
  }
  
  tick() {
    this.setState(prevState => {
      secondsElapsed: prevState.secondsElapsed++
    });
  }

  start(e) {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  end(e) {
    clearInterval(this.timer);
  }

  render() {
    let secondsElapsed = this.state.secondsElapsed;
    return <div className="timer">
    Seconds Elapsed: <span className="timer-value">{secondsElapsed}</span>
      <div>
        <button className="timer-stop" onClick={this.end}>Stop</button>
        <button className="timer-start" onClick={this.start}>Start</button>
      </div>
    </div>
  }
}
