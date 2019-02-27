import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import store from '../store';

import Auth from './Auth';

describe('<Auth />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Provider store={store}><Auth /></Provider>).toJSON();
    expect(rendered).toBeTruthy();
  });
});
