import React, {Component} from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header class="header">
        <div class="header__wrapper">
          <img alt="" class="header__logo" />
          <h1 class="header__heading">Hello, React!</h1>
        </div>
      </header>
    );
  }
}

export default Header;
