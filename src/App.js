import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { css } from 'emotion';
import Alert from 'react-s-alert';
import promiseFinally from 'promise.prototype.finally';

import store from './store';

import ProvideIntl from './common/ProvideIntl';
import Home from './Home';
import Search from './Search';
import Result from './Result';
import Sidebar from './Sidebar';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

promiseFinally.shim(); // Promise.prototype.finally() polyfill

const container = {
  minHeight: '100vh',
};

class App extends Component {
  state = {
    locale: 'en',
    showSidebar: false,
  }

  onLocaleChange = (locale) => this.setState({ locale })

  onMenuClick = () => this.setState({ showSidebar: true })

  onOverlayClick = () => this.setState({ showSidebar: false })

  render() {
    return (
      <Provider store={store}>
        <ProvideIntl>
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
                  <Home
                    {...props}
                    locale={this.state.locale}
                    onLocaleChange={this.onLocaleChange}
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
        </ProvideIntl>
      </Provider>
    );
  }
}

export default App;
