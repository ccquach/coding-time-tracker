import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import M from 'materialize-css';

const Logo = styled.h1`
  font-family: 'Coda', sans-serif;
  font-size: 2.5rem;
  color: var(--secondary);
`;

const NAVLINKS = [
  { name: 'Dashboard', icon: 'pie_chart', path: '/' },
  { name: 'Journal', icon: 'date_range', path: '/journal' },
  { name: 'Goals', icon: 'flag', path: '/goals' },
];

class Sidenav extends Component {
  componentDidMount = () => {
    M.Sidenav.init(document.querySelector('.sidenav'));
  };

  render() {
    return (
      <ul id="slide-out" className="sidenav sidenav-fixed show-on-large">
        <li className="logo">
          <Link to="/" id="logo-container" className="brand-logo sidenav-close">
            <Logo>Coding Time Tracker</Logo>
          </Link>
        </li>
        <li>
          <a>Hi, {this.props.auth.name}!</a>
        </li>
        <li>
          <a href="/auth/logout" className="waves-effect">
            <i className="material-icons">power_settings_new</i>
            Logout
          </a>
        </li>
        <div className="divider" />
        {NAVLINKS.map(({ name, icon, path }) => (
          <li key={name}>
            <Link to={path} className="waves-effect sidenav-close">
              <i className="material-icons left">{icon}</i>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Sidenav);
