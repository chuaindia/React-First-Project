import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const num = e.target.textContent;
    const ans = calculate(state, num);
    setState(ans);
  };

  const { total, next, operation } = state;
  return (
    <div className="main-frame">
      <h1>Math Magician</h1>
      <h2> Let us do some basic Mathematics Operations</h2>
      <div className="main">
        <div className="calculator">
          <div className="screen">
            {total}
            {operation}
            {next}
          </div>
          <div className="first row">
            <button type="button" onClick={handleClick}>AC</button>
            <button type="button" onClick={handleClick}>+/-</button>
            <button type="button" onClick={handleClick}>%</button>
            <button type="button" onClick={handleClick} className="buttoncolor">÷</button>
          </div>
          <div className="second row">
            <button type="button" onClick={handleClick}>7</button>
            <button type="button" onClick={handleClick}>8</button>
            <button type="button" onClick={handleClick}>9</button>
            <button type="button" onClick={handleClick} className="buttoncolor">x</button>
          </div>
          <div className="third row">
            <button type="button" onClick={handleClick}>4</button>
            <button type="button" onClick={handleClick}>5</button>
            <button type="button" onClick={handleClick}>6</button>
            <button type="button" onClick={handleClick} className="buttoncolor">-</button>
          </div>
          <div className="fourth row">
            <button type="button" onClick={handleClick}>1</button>
            <button type="button" onClick={handleClick}>2</button>
            <button type="button" onClick={handleClick}>3</button>
            <button type="button" onClick={handleClick} className="buttoncolor">+</button>
          </div>
          <div className="fifth row">
            <button type="button" onClick={handleClick} className="zero">0</button>
            <button type="button" onClick={handleClick}>.</button>
            <button type="button" onClick={handleClick} className="buttoncolor">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
