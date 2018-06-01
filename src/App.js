import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Features from './Features';
import Footer from './Footer';
import BottomCta from './BottomCta';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Features />
        <BottomCta />
        <Footer />
      </div>
    );
  }
}

export default App;
