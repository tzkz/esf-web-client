import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import localeData from '../i18n/locales';

import Component from './Main';

const Main = (...props) => (
  <IntlProvider locale="en" messages={localeData.en}>
    <Component {...props} />
  </IntlProvider>
)

describe('<Main />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Main />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
