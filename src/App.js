import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import classnames from 'classnames';
import { css } from 'emotion';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import kk from 'react-intl/locale-data/kk';
import ru from 'react-intl/locale-data/ru';
import localeData from './i18n/locales';

import store from './store';

import './App.css';

import Landing from './Landing';
import Search from './Search';
import Result from './Result';
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
              <Route path="/result" component={Result} />
            </div>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
