import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const num = e.target.textContent;
    const ans = calculate(this.state, num);
    this.setState(ans);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="mainframe">
        <div className="calculator">
          <div className="bar">
            {total}
            {operation}
            {next}
          </div>
          <div className="first row">
            <button type="button" onClick={this.handleClick}>AC</button>
            <button type="button" onClick={this.handleClick}>+/-</button>
            <button type="button" onClick={this.handleClick}>%</button>
            <button type="button" onClick={this.handleClick} className="buttoncolor">÷</button>
          </div>
          <div className="second row">
            <button type="button" onClick={this.handleClick}>7</button>
            <button type="button" onClick={this.handleClick}>8</button>
            <button type="button" onClick={this.handleClick}>9</button>
            <button type="button" onClick={this.handleClick} className="buttoncolor">x</button>
          </div>
          <div className="third row">
            <button type="button" onClick={this.handleClick}>4</button>
            <button type="button" onClick={this.handleClick}>5</button>
            <button type="button" onClick={this.handleClick}>6</button>
            <button type="button" onClick={this.handleClick} className="buttoncolor">-</button>
          </div>
          <div className="fourth row">
            <button type="button" onClick={this.handleClick}>1</button>
            <button type="button" onClick={this.handleClick}>2</button>
            <button type="button" onClick={this.handleClick}>3</button>
            <button type="button" onClick={this.handleClick} className="buttoncolor">+</button>
          </div>
          <div className="fifth row">
            <button type="button" onClick={this.handleClick} className="zero">0</button>
            <button type="button" onClick={this.handleClick}>.</button>
            <button type="button" onClick={this.handleClick} className="buttoncolor">=</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Calculator;
