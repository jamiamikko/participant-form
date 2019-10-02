import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <img alt="" className="header__logo" />
          <h1 className="header__heading">Hello, React!</h1>
        </div>
      </header>
    );
  }
}

export default Header;
