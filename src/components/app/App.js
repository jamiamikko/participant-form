import React, { Component } from 'react';
import Header from './header';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
