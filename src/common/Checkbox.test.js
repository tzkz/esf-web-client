import React from 'react'
import renderer from 'react-test-renderer'

import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  const props = {
    id: 'testCheckbox',
    checked: false,
    onChange: (event) => this.checked = event.target.checked,
  }
  it('renders without crashing', () => {
    const rendered = renderer.create(<Checkbox {...props} />).toJSON();
    expect(rendered).toBeTruthy();
  });
})
