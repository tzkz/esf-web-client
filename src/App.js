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

if (!window.Intl) {
  require('intl');
}
addLocaleData([...en, ...kk, ...ru]);

class App extends Component {
  state = {
    locale: { value: 'en', label: '🇺🇸 Eng' },
  }

  onLocaleChange = (value) => this.setState({ locale: value });

  render() {
    return (
      <IntlProvider
        locale={this.state.locale.value}
        messages={{
          ...localeData.en,
          ...localeData[this.state.locale.value],
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
            <Route path="/result" component={Result}/>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
