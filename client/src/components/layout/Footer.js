import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';

const { hex } = colors;

const Container = styled.footer`
  margin: 2rem 0;
  text-align: center;
  font-size: 1.3rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ path }) => (path === '/' ? hex.greyLight : hex.greyDark)};
`;

const Footer = ({ location }) => (
  <Container path={location.pathname}>&copy; 2018 Cynthia Quach</Container>
);

export default withRouter(Footer);
