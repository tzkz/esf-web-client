import React from 'react'
import renderer from 'react-test-renderer';

import SearchForm from './SearchForm'

describe('<SearchForm />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<SearchForm />).toJSON();
    expect(rendered).toBeTruthy();
  });
})