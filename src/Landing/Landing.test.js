import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Component from './Landing';

import localeData from '../i18n/locales';
import store from '../store';

const Landing = (...props) => (
  <Provider store={store}>
    <IntlProvider locale="en" messages={localeData.en}>
      <Router>
        <Component {...props} />
      </Router>
    </IntlProvider>
  </Provider>
)

describe('<Landing />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Landing />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
