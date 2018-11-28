import React from 'react';
import renderer from 'react-test-renderer';

import AuthForm from './AuthForm';

describe('<AuthForm />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<AuthForm />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
