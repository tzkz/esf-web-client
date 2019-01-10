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
    const rendered = renderer.create(<SearchForm />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('calls onSubmit prop func with form data on form submit', () => {
    const onSubmitProp = jest.fn()
    const testRenderer = renderer.create(<SearchForm onSubmit={onSubmitProp} />);
    const testInstance = testRenderer.root;
    const componentInstance = testRenderer.getInstance();
    const form = testInstance.find((element) => element.type === 'form')
    const fakeEvent = { preventDefault: jest.fn() }

    componentInstance.setState({
      direction: 'OUTBOUND',
      startDate: moment('2018-12-01'),
      endDate: moment('2018-12-31'),
      type: 'CREATED',
      created: true,
      delivered: true,
      revoked: false,
      cancelled: false,
    })
    form.props.onSubmit(fakeEvent)

    expect(onSubmitProp).toBeCalledWith(({
      direction: 'OUTBOUND',
      startDate: moment('2018-12-01'),
      endDate: moment('2018-12-31'),
      type: 'CREATED',
      created: true,
      delivered: true,
      revoked: false,
      cancelled: false,
    }))
  });
});
