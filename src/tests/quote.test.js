import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/pages/quote';

it('Quotes page will be displayed properly', () => {
  const text = renderer
    .create(<Quote />).toJSON;
  expect(text).toMatchSnapshot();
});
