import React from 'react';
import renderer from 'react-test-renderer';

import AuthStep from './AuthStep';

describe('<AuthStep />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<AuthStep />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
