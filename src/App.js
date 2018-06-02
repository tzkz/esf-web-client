import React, { Component } from 'react';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import kk from 'react-intl/locale-data/kk';
import ru from 'react-intl/locale-data/ru';
import localeData from './i18n/locales';

import './App.css';

import Header from './Header';
import Main from './Main';
import Features from './Features';
import Footer from './Footer';
import BottomCta from './BottomCta';

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
        <div className="App">
          <Header
            localeValue={this.state.locale}
            onLocaleChange={this.onLocaleChange}
          />
          <Main />
          <Features />
          <BottomCta />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
