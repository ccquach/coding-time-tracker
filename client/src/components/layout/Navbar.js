import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';
import SidenavButton from './SidenavButton';

const Heading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
`;

const Navbar = ({ location: { pathname } }) => {
  const name = pathname.slice(-(pathname.length - 1));
  return (
    <nav className={colors.base.primary}>
      <div className="container">
        <div className="nav-wrapper">
          <a className="brand-logo">
            <Heading>{pathname === '/' ? 'Dashboard' : name}</Heading>
          </a>
        </div>
      </div>
      <SidenavButton />
    </nav>
  );
};

export default withRouter(Navbar);
