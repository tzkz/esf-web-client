import React from 'react'
import renderer from 'react-test-renderer';

import Radio from './Radio'

describe('<Radio />', () => {
  const options = [
    { id: 'foo', value: 'INBOUND', label: 'Inbound' },
    { id: 'bar', value: 'OUTBOUND', label: 'Outbound' },
  ]
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Radio options={options} name="direction" onOptionChange={() => {}} />,
    ).toJSON();
    expect(rendered).toBeTruthy();
  });
})
