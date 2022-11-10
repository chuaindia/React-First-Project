import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/pages/Home';

it('It will render the Homepage', () => {
  const home = renderer
    .create(<Router><Home /></Router>)
    .toJSON();
  expect(home).toMatchSnapshot();
});
