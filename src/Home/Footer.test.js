import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import Footer from './Footer'
import store from '../store'

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Provider store={store}>
        <Footer />
      </Provider>,
    ).toJSON()
    expect(rendered).toBeTruthy()
  })
})
