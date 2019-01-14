import React from 'react'
import renderer from 'react-test-renderer'

import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Checkbox id="testCheckbox" />).toJSON();
    expect(rendered).toBeTruthy();
  });
})
