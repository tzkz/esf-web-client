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

import Landing from './Landing';
import Search from './Search';
import Result from './Result';
import Pin from './Pin';
import Password from './Password';
import Company from './Company';
import Sidebar from './Sidebar';

if (!window.Intl) {
  require('intl');
}
addLocaleData([...en, ...kk, ...ru]);

const container = {
  height: '100%',
};

class App extends Component {
  state = {
    locale: 'en',
    showSidebar: false,
    sessionId: null,
    user: null,
  }

  onLocaleChange = (locale) => this.setState({ locale })

  onMenuClick = () => this.setState({ showSidebar: true })

  onOverlayClick = () => this.setState({ showSidebar: false })

  onAuthCancel = () => this.setState({ user: null })

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
              <Sidebar 
                onOverlayClick={this.onOverlayClick}
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
                  sessionId={this.state.sessionId}
                />
              )}
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
