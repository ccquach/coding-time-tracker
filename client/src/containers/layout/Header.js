import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <a href="/auth/logout">Logout</a>
      </header>
    );
  }
}

export default Header;
