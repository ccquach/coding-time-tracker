import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';

const { text } = colors;

const Wrapper = styled.footer`
  z-index: 1;
`;

const Footer = ({ location, auth }) => (
  <Wrapper className="page-footer transparent">
    <div className="footer-copyright center-align transparent">
      <div
        className={`container ${
          location.pathname === '/' && auth ? text.greyDark : text.greyLight
        }`}
      >
        &copy; 2018 Cynthia Quach
      </div>
    </div>
  </Wrapper>
);

export default withRouter(Footer);
