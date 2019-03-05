import React from 'react'
import renderer from 'react-test-renderer'

import Result, { generateZip } from './Result'
import ProvideContext from './common/ProvideContext'

describe('generateZip()', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <ProvideContext>
        <Result location={window.location} />
      </ProvideContext>,
    ).toJSON();
    expect(rendered).toBeTruthy()
  })

  it('resolves to a Blob', () => generateZip([])
    .then((content) => {
      expect(content instanceof Blob).toEqual(true)
    }))
})
