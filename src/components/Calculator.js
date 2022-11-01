import React from 'react';

const buttons = ['AC', '+/-', '%', '÷', '7',
  '8', '9', 'x', '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='];

const MakeArray = () => {
  const arrayForButtons = [];
  buttons.forEach((button) => arrayForButtons.push(
    <button className="calc-btns" type="button">{button}</button>,
  ));
  return arrayForButtons;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="calculator">
          <div id="display-calculator" />
          <input />
        </div>
        <div id="calculator-buttons">
          <MakeArray />
        </div>
      </>
    );
  }
}

export default Calculator;
