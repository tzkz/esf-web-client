import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { css } from 'emotion';
import Alert from 'react-s-alert';
import promiseFinally from 'promise.prototype.finally';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import kk from 'react-intl/locale-data/kk';
import ru from 'react-intl/locale-data/ru';
import localeData from './i18n/locales';

import store from './store';

import Landing from './Landing';
import Search from './Search';
import Result from './Result';
import Sidebar from './Sidebar';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

promiseFinally.shim(); // Promise.prototype.finally() polyfill

if (!window.Intl) {
  require('intl');
}
addLocaleData([...en, ...kk, ...ru]);

const container = {
  fontFamily: '\'Open Sans\', sans-serif',
  minHeight: '100vh',
};

class App extends Component {
  state = {
    locale: 'en',
    showSidebar: false,
    user: null,
  }

  onLocaleChange = (locale) => this.setState({ locale })

  onMenuClick = () => this.setState({ showSidebar: true })

  onOverlayClick = () => this.setState({ showSidebar: false })

  onAuthCancel = () => this.setState({ user: null })

  render() {
    return (
      <Provider store={store}>
        <IntlProvider
          locale={this.state.locale}
          messages={{
            ...localeData.en,
            ...localeData[this.state.locale],
          }}
        >
          <Router>
            <div className={css(container)}>
              {this.state.showSidebar && (
                <Sidebar 
                  onOverlayClick={this.onOverlayClick}
                  localeValue={this.state.locale}
                  onLocaleChange={this.onLocaleChange}
                />
              )}
              <Route
                exact
                path="/"
                render={(props) => (
                  <Landing
                    {...props}
                    locale={this.state.locale}
                    onLocaleChange={this.onLocaleChange}
                    onAuthCancel={this.onAuthCancel}
                    onMenuClick={this.onMenuClick}
                  />
                )}
              />
              <Route
                path="/search"
                render={(props) => (
                  <Search
                    {...props}
                    locale={this.state.locale}
                    onLocaleChange={this.onLocaleChange}
                    onMenuClick={this.onMenuClick}
                  />
                )}
              />
              <Route
                path="/result"
                render={(props) => (
                  <Result
                    {...props}
                    locale={this.state.locale}
                    onLocaleChange={this.onLocaleChange}
                    onMenuClick={this.onMenuClick}
                  />
                )}
              />
              <Alert
                stack={{ limit: 3 }}
                effect="stackslide"
                position="top"
                timeout={5000}
              />
            </div>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
