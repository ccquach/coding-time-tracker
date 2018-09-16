import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Sidenav from '../../containers/Layout/Sidenav';

const Wrapper = styled.header`
  text-transform: uppercase;
  line-spacing: 1px;
  font-weight: 300;
`;

const Header = () => (
  <Wrapper>
    <Navbar />
    <Sidenav />
  </Wrapper>
);

export default Header;
