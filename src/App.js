import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import classnames from 'classnames';
import { css } from 'emotion';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import kk from 'react-intl/locale-data/kk';
import ru from 'react-intl/locale-data/ru';
import localeData from './i18n/locales';

import './App.css';

import Auth from './Auth';
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

const testKey = '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'

const container = {
  height: '100%',
};

class App extends Component {
  state = {
    locale: 'en',
    showSidebar: false,
    p12b64: '',
    user: null,
  }

  onLocaleChange = (locale) => this.setState({ locale })

  onMenuClick = () => this.setState({ showSidebar: true })

  onDemoClick = () => this.setState({ p12b64: testKey })

  onAuthCancel = () => {
    this.setState({ p12b64: '', user: null })
  }

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
          <div className={classnames('App', css(container))}>
            {this.state.showSidebar && (
              <div>
                Sidebar
              </div>
            )}
            <Route
              exact
              path="/"
              render={() => this.state.p12b64
                ? <Auth
                    p12b64={this.state.p12b64}
                    onCancel={this.onAuthCancel}
                  />
                : <Landing
                    locale={this.state.locale}
                    onLocaleChange={this.onLocaleChange}
                    onDemoClick={this.onDemoClick}
                  />
              }
            />
            <Route
              path="/search"
              render={() => (
                <Search
                  locale={this.state.locale}
                  onLocaleChange={this.onLocaleChange}
                  onMenuClick={this.onMenuClick}
                />
              )}
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
