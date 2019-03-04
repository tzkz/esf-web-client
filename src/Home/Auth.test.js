import React from 'react'
import renderer from 'react-test-renderer'

import Auth from './Auth'
import ProvideContext from '../common/ProvideContext'

describe('<Auth />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <ProvideContext>
        <Auth isDemo p12base64="" />
      </ProvideContext>,
    ).toJSON();
    expect(rendered).toBeTruthy()
  })
})
