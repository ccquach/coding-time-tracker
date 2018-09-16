import React from 'react';
import styled from 'styled-components';

// #region styles
const Heading = styled.h4`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1em;
`;

const Button = styled.a`
  width: 100%;
  text-align: left;

  i {
    font-size: 2rem;
    margin-right: 2rem;
  }
`;
//#endregion

// TODO: update Github and Facebook paths
const PROVIDERS = [
  {
    name: 'Google',
    path: '/auth/google',
    icon: 'google-plus',
    color: 'red darken-1',
  },
  {
    name: 'Github',
    // path: '/auth/github',
    path: '',
    icon: 'github',
    color: 'grey darken-3',
  },
  {
    name: 'Facebook',
    // path: '/auth/facebook',
    path: '',
    icon: 'facebook-square',
    color: 'blue darken-4',
  },
];

const Login = () => {
  return (
    <div className="container">
      <Heading>Login with</Heading>
      {PROVIDERS.map(({ name, path, icon, color }) => (
        <div className="row" key={name}>
          <Button
            href={path}
            className={`waves-effect waves-light btn-large ${color}`}
          >
            <i className={`fab fa-${icon} left`} aria-hidden="true" />
            <span className="hide-on-med-and-down">Sign in with </span>
            <span>{name}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Login;
