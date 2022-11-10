import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigationbar from '../components/pages/navigationbar';

it('It should render Navbar properly', () => {
  const tree = renderer
    .create(<Router><Navigationbar /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
