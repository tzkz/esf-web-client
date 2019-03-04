import React from 'react'
import renderer from 'react-test-renderer'

import ProvideContext from '../common/ProvideContext'

import Component from './AuthForm'

const AuthForm = ({ ...props }) => (
  <ProvideContext>
    <Component {...props} />
  </ProvideContext>
)

describe('<AuthForm />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<AuthForm />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
