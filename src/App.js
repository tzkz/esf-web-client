import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { css } from 'emotion';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import kk from 'react-intl/locale-data/kk';
import ru from 'react-intl/locale-data/ru';
import localeData from './i18n/locales';

import './App.css';

import Header from './common/Header';
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
              children={({ location }) => (
                <Header
                  localeValue={this.state.locale}
                  onLocaleChange={this.onLocaleChange}
                  className={
                    location.pathname === '/'
                      ? css({
                        backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)',
                        color: 'white',
                      })
                      : ''
                  }
                />
              )}
            />
            <Route exact path="/" component={Landing}/>
            <Route path="/search" component={Search}/>
            <Route path="/result" component={Result}/>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
