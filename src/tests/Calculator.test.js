import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('iIt will render the buttons', () => {
  const screen = renderer
    .create(<Calculator />)
    .toJSON();
  expect(screen).toMatchSnapshot();
});
