import React from 'react';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import ProvideIntl from './ProvideIntl'

import store from '../store';

describe('<ProvideIntl />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Provider store={store}>
        <ProvideIntl><div></div></ProvideIntl>
      </Provider>
    ).toJSON()

    expect(rendered).toBeTruthy()
  })
})
