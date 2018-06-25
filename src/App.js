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

import Header from './common/Header';
import Landing from './Landing';
import Search from './Search';

addLocaleData([...en, ...kk, ...ru]);

class App extends Component {
  state = {
    locale: { value: 'en', label: 'English' },
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
            <Header
              localeValue={this.state.locale}
              onLocaleChange={this.onLocaleChange}
            />
            <Route exact path="/" component={Landing}/>
            <Route path="/search" component={Search}/>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
