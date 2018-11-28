import React from 'react';
import renderer from 'react-test-renderer';

import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Tooltip />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
