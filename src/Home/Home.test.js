import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Component from './Home';

import store from '../store';
import ProvideIntl from '../common/ProvideIntl';

const Home = (...props) => (
  <Provider store={store}>
    <ProvideIntl>
      <Router>
        <Component {...props} />
      </Router>
    </ProvideIntl>
  </Provider>
)

describe('<Home />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
