import React from 'react';
import renderer from 'react-test-renderer'

import ProvideContext from './ProvideContext'

import store from '../store';

describe('<ProvideContext />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <ProvideContext><div /></ProvideContext>
    ).toJSON()

    expect(rendered).toBeTruthy()
  })
})
