import React from 'react'
import renderer from 'react-test-renderer'

import AuthStep from './AuthStep'
import ProvideContext from '../common/ProvideContext'

describe('<AuthStep />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <ProvideContext>
        <AuthStep />
      </ProvideContext>
    ).toJSON()
    expect(rendered).toBeTruthy()
  })
})
