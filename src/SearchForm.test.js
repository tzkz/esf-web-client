import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer'
import moment from 'moment'

import 'react-dates/initialize'

import SearchForm, { createQueryString } from './SearchForm'

describe('createQueryString()', () => {
  it('generates query string based on form object', () => {
    const form = {
      direction: 'INBOUND',
      startDate: moment('2018-12-01'),
      endDate: moment('2018-12-31'),
    }

    expect(createQueryString(form)).toEqual('?direction=INBOUND&dateFrom=2018-12-01&dateTo=2018-12-31')
  })
})

describe('<SearchForm />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Router>
        <SearchForm />
      </Router>
    ).toJSON();
    expect(rendered).toBeTruthy();
  });
})