import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment'
import ProvideContext from './common/ProvideContext'

import 'react-dates/initialize'

import Component from './SearchForm'

const SearchForm = props => (
  <ProvideContext>
    <Component {...props} />
  </ProvideContext>
)

describe('<SearchForm />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <SearchForm onSubmit={() => {}} />,
    ).toJSON();
    expect(rendered).toBeTruthy();
  });
});
