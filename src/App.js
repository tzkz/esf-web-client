import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import kk from 'react-intl/locale-data/kk';
import ru from 'react-intl/locale-data/ru';
import localeData from './i18n/locales';

import './App.css';

import Landing from './Landing';
import Search from './Search';
import Result from './Result';
import Pin from './Pin';
import Password from './Password';
import Company from './Company';

if (!window.Intl) {
  require('intl');
}
addLocaleData([...en, ...kk, ...ru]);

class App extends Component {
  state = {
    locale: 'en',
  }

  onLocaleChange = (locale) => this.setState({ locale });

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={{
          ...localeData.en,
          ...localeData[this.state.locale],
        }}
      >
        <Router>
          <div className="App">
            <Route
              exact
              path="/"
              render={() => <Landing locale={this.state.locale} onLocaleChange={this.onLocaleChange} />}
            />
            <Route
              path="/search"
              render={() => <Search locale={this.state.locale} onLocaleChange={this.onLocaleChange} />}
            />
            <Route path="/result" component={Result} />
            <Route path="/pin" component={Pin} />
            <Route path="/password" component={Password} />
            <Route path="/company" component={Company} />
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
