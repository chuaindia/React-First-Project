import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import NavigationBar from './components/pages/navigationBar';
import Quote from './components/pages/quote';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="quote.js" element={<Quote />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
