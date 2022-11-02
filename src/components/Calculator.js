import React from 'react';
import calculate from '../logic/calculate';

const buttons = ['AC', '+/-', '%', '÷', '7',
  '8', '9', 'x', '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.MakeArray = this.MakeArray.bind(this);
    this.state = { total: '0', next: null, operation: null };
  }

    handleEvent = (e) => {
      this.setState((previousState) => calculate(previousState, e.target.innertext));
    }

  MakeArray = () => {
    const arrayForButtons = [];
    buttons.forEach((button) => arrayForButtons.push(
      <button key={button} onClick={this.handleEvent} className="calc-btns" type="button">{button}</button>,
    ));
    return arrayForButtons;
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div id="calculator">
          <div id="display-calculator" />
          {total}
          {operation}
          {next}
        </div>
        <div id="calculator-buttons">
          {this.MakeArray()}
        </div>
      </>
    );
  }
}

export default Calculator;
