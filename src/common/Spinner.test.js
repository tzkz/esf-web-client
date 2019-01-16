import React from 'react'
import renderer from 'react-test-renderer';

import Spinner from './Spinner'

describe('<Spinner />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Spinner />).toJSON();
    expect(rendered).toBeTruthy();
  });
})
