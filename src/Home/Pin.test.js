import React from 'react'
import renderer from 'react-test-renderer'

import Pin from './Pin'
import ProvideContext from '../common/ProvideContext'

describe('<Pin />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <ProvideContext>
        <Pin
          isDemo
          p12base64=""
          onDecrypt={() => {}}
          onCancel={() => {}}
        />
      </ProvideContext>,
    ).toJSON();
    expect(rendered).toBeTruthy()
  })
})
