import React from 'react'
import renderer from 'react-test-renderer'

import Password from './Password'
import ProvideContext from '../common/ProvideContext'

describe('<Password />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <ProvideContext>
        <Password
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
