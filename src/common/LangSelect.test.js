import React from 'react';
import renderer from 'react-test-renderer';

import LangSelect from './LangSelect';

describe('<LangSelect />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<LangSelect />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
