import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Footer />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
