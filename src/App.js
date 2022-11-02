import React from 'react';
import './index.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>CALCULATOR</h1>
        <Calculator />
      </div>
    );
  }
}
export default App;
