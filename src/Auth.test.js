import React from 'react';
import renderer from 'react-test-renderer';

import Auth from './Auth';

describe('<Auth />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Auth />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
