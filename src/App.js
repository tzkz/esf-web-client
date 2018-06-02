import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Features from './Features';
import Footer from './Footer';
import BottomCta from './BottomCta';

class App extends Component {
  state = {
    locale: { value: 'en', label: 'English' },
  }

  onLocaleChange = (value) => this.setState({ locale: value });

  render() {
    return (
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
    );
  }
}

export default App;
