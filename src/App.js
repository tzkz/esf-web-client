import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Features from './Features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Features />
      </div>
    );
  }
}

export default App;
